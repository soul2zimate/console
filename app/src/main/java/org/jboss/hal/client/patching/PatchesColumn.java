/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client.patching;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.inject.Inject;
import javax.inject.Provider;

import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeHtmlUtils;
import com.google.web.bindery.event.shared.EventBus;
import org.jboss.gwt.flow.Async;
import org.jboss.gwt.flow.Control;
import org.jboss.gwt.flow.Function;
import org.jboss.gwt.flow.FunctionContext;
import org.jboss.gwt.flow.Outcome;
import org.jboss.gwt.flow.Progress;
import org.jboss.hal.ballroom.dialog.Dialog;
import org.jboss.hal.ballroom.dialog.DialogFactory;
import org.jboss.hal.ballroom.form.Form;
import org.jboss.hal.ballroom.wizard.Wizard;
import org.jboss.hal.client.patching.wizard.PatchContentStep;
import org.jboss.hal.client.patching.wizard.PatchContext;
import org.jboss.hal.client.patching.wizard.PatchNamesStep;
import org.jboss.hal.client.patching.wizard.PatchState;
import org.jboss.hal.config.Environment;
import org.jboss.hal.core.finder.ColumnAction;
import org.jboss.hal.core.finder.ColumnActionFactory;
import org.jboss.hal.core.finder.Finder;
import org.jboss.hal.core.finder.FinderColumn;
import org.jboss.hal.core.finder.ItemAction;
import org.jboss.hal.core.finder.ItemDisplay;
import org.jboss.hal.core.mbui.form.ModelNodeForm;
import org.jboss.hal.core.runtime.host.Host;
import org.jboss.hal.core.runtime.host.HostActions;
import org.jboss.hal.dmr.ModelNode;
import org.jboss.hal.dmr.Operation;
import org.jboss.hal.dmr.Property;
import org.jboss.hal.dmr.ResourceAddress;
import org.jboss.hal.dmr.dispatch.Dispatcher;
import org.jboss.hal.meta.AddressTemplate;
import org.jboss.hal.meta.Metadata;
import org.jboss.hal.meta.MetadataRegistry;
import org.jboss.hal.meta.StatementContext;
import org.jboss.hal.meta.security.Constraint;
import org.jboss.hal.resources.Ids;
import org.jboss.hal.resources.Messages;
import org.jboss.hal.resources.Names;
import org.jboss.hal.resources.Resources;
import org.jboss.hal.spi.Column;
import org.jboss.hal.spi.Footer;
import org.jboss.hal.spi.Message;
import org.jboss.hal.spi.MessageEvent;

import static org.jboss.hal.client.patching.wizard.PatchState.NAMES;
import static org.jboss.hal.client.patching.wizard.PatchState.UPLOAD;
import static org.jboss.hal.core.finder.FinderColumn.RefreshMode.RESTORE_SELECTION;
import static org.jboss.hal.dmr.ModelDescriptionConstants.*;
import static org.jboss.hal.resources.Ids.ADD_SUFFIX;
import static org.jboss.hal.resources.Ids.PATCHES_AGEOUT;

/**
 * @author Claudio Miranda
 */
@Column(Ids.PATCHES_HOST)
public class PatchesColumn extends FinderColumn<ModelNode> {

    static final String SELECTED_PATCHING_ADDRESS = "/{selected.host}/core-service=patching";
    static final AddressTemplate SELECTED_PATCHING_TEMPLATE = AddressTemplate.of(SELECTED_PATCHING_ADDRESS);
    static Logger _log = Logger.getLogger("org.jboss");

    private EventBus eventBus;
    private Dispatcher dispatcher;
    private MetadataRegistry metadataRegistry;
    private StatementContext statementContext;
    private Environment environment;
    private HostActions hostActions;
    private Provider<Progress> progress;
    private Resources resources;

    @Inject
    public PatchesColumn(final Finder finder,
            final EventBus eventBus,
            final Dispatcher dispatcher,
            final MetadataRegistry metadataRegistry,
            final StatementContext statementContext,
            final Environment environment,
            final HostActions hostActions,
            @Footer final Provider<Progress> progress,
            final ColumnActionFactory columnActionFactory,
            final Resources resources) {

        super(new Builder<ModelNode>(finder, Ids.PATCHES_HOST, Names.PATCHES)

                .columnAction(columnActionFactory.refresh(Ids.PATCHES_REFRESH))

                .itemsProvider((context, callback) -> {
                    ResourceAddress address = SELECTED_PATCHING_TEMPLATE.resolve(statementContext);
                    Operation operation = new Operation.Builder(address, SHOW_HISTORY_OPERATION).build();
                    dispatcher.execute(operation, result -> callback.onSuccess(result.asList()));
                })
                .onPreview(PatchesPreview::new)
                .pinnable()
                .showCount()
                .useFirstActionAsBreadcrumbHandler()
                .withFilter()
        );
        this.eventBus = eventBus;
        this.dispatcher = dispatcher;
        this.metadataRegistry = metadataRegistry;
        this.statementContext = statementContext;
        this.environment = environment;
        this.hostActions = hostActions;
        this.progress = progress;
        this.resources = resources;

        setItemRenderer(item -> new ItemDisplay<ModelNode>() {
            @Override
            public String getId() {
                return Ids.build(HOST, PATCHING, item.get(PATCH_ID).asString());
            }

            @Override
            public String getTitle() {
                return item.get(PATCH_ID).asString();
            }

            @Override
            public List<ItemAction<ModelNode>> actions() {

                List<ItemAction<ModelNode>> actions = new ArrayList<>();
                actions.add(new ItemAction.Builder<ModelNode>()
                        .title(resources.constants().rollback())
                        .handler(item1 -> rollback(item1.get(PATCH_ID).asString()))
                        .constraint(Constraint.executable(SELECTED_PATCHING_TEMPLATE, ROLLBACK_OPERATION))
                        .build());

                return actions;
            }

        });

        ColumnAction<ModelNode> applyPatchAction = new ColumnAction.Builder<ModelNode>(Ids.PATCH_ADD)
                .element(columnActionFactory.addButton(Names.PATCH))
                .handler(column -> applyPatch())
                .build();
        ColumnAction<ModelNode> ageoutAction = new ColumnAction.Builder<ModelNode>(
                Ids.build(HOSTS, PATCHES_AGEOUT, ADD_SUFFIX))
                .element(columnActionFactory.addButton(resources.messages().cleanPatchHistory(), "fa fa-eraser"))
                .handler(column -> ageoutHistory())
                .build();
        addColumnAction(applyPatchAction);
        addColumnAction(ageoutAction);

    }

    private void rollback(final String patchId) {

        ModelNode model = new ModelNode();
        model.get(PATCH_ID).set(patchId);
        ResourceAddress address = SELECTED_PATCHING_TEMPLATE.resolve(statementContext);
        Metadata metadata = metadataRegistry.lookup(SELECTED_PATCHING_TEMPLATE);
        Metadata operationMetadata = metadata.forOperation(ROLLBACK_OPERATION);
        String id = Ids
                .build(Ids.HOST, statementContext.selectedHost(), CORE_SERVICE, PATCHING, patchId, ROLLBACK_OPERATION);
        Form<ModelNode> form = new ModelNodeForm.Builder<>(id, operationMetadata)
                .unsorted()
                .build();
        form.getFormItem(PATCH_ID).setEnabled(false);
        Dialog dialog = new Dialog.Builder(resources.constants().rollback())
                .add(form.asElement())
                .closeIcon(true)
                .closeOnEsc(true)
                .primary(resources.constants().rollback(), () -> {
                    if (form.save()) {
                        ModelNode payload = form.getModel();
                        // reset-configuration is a required attribute, if the user doesn't set it, meaning it should be false
                        // it will not be added into the payload, but we must forcibly set as false to satisfy the required=true metadata
                        if (!payload.hasDefined(RESET_CONFIGURATION)) {
                            payload.get(RESET_CONFIGURATION).set(false);
                        }
                        Operation operation = new Operation.Builder(address, ROLLBACK_OPERATION)
                                .payload(payload)
                                .build();
                        dispatcher.execute(operation, result -> {
                            MessageEvent.fire(eventBus,
                                    Message.success(resources.messages().patchSucessfullyRemoved(patchId)));
                            refresh(RESTORE_SELECTION);
                        });
                        return true;
                    }
                    return false;
                })
                .cancel()
                .build();
        dialog.registerAttachable(form);
        dialog.show();
        form.edit(model);
    }

    private void ageoutHistory() {

        ResourceAddress address = SELECTED_PATCHING_TEMPLATE.resolve(statementContext);
        Metadata metadata = metadataRegistry.lookup(SELECTED_PATCHING_TEMPLATE);
        Metadata operationMetadata = metadata.forOperation(AGEOUT_HISTORY_OPERATION);
        Messages messages = resources.messages();
        // prepend the ageout-history description to let user know the intended action.
        SafeHtml message = messages.cleanPatchHistoryQuestion(operationMetadata.getDescription().getDescription());

        DialogFactory.showConfirmation(messages.cleanPatchHistory(), message, () -> {
            Operation operation = new Operation.Builder(address, AGEOUT_HISTORY_OPERATION).build();
            dispatcher.execute(operation, result -> {
                MessageEvent
                        .fire(eventBus, Message.success(SafeHtmlUtils.fromString(messages.cleanPatchHistorySuccess())));
                refresh(RESTORE_SELECTION);
            });

        });
    }

    private void applyPatch() {

        checkHostState(result -> {

            Metadata metadata = metadataRegistry.lookup(SELECTED_PATCHING_TEMPLATE);
            Metadata metadataOp = metadata.forOperation(PATCH);
            Wizard<PatchContext, PatchState> wizard = new Wizard.Builder<PatchContext, PatchState>(
                    resources.messages().addResourceTitle(Names.PATCH), new PatchContext())

                    .addStep(UPLOAD, new PatchContentStep(resources))
                    .addStep(NAMES, new PatchNamesStep(environment, metadataOp, resources))

                    .onBack((context, currentState) -> currentState == NAMES ? UPLOAD : null)
                    .onNext((context, currentState) -> currentState == UPLOAD ? NAMES : null)

                    .stayOpenAfterFinish()
                    .onFinish((wzd, context) -> {
                        String name = context.file.name;
                        wzd.showProgress(resources.constants().uploadInProgress(),
                                resources.messages().uploadInProgress(name));

                        Function[] functions = {
                                new UploadPatch(eventBus, statementContext, environment, dispatcher, resources, context)
                        };
                        new Async<FunctionContext>(progress.get()).waterfall(new FunctionContext(),
                                new Outcome<FunctionContext>() {
                                    @Override
                                    public void onFailure(final FunctionContext functionContext) {
                                        wzd.showError(resources.constants().uploadError(),
                                                resources.messages().uploadError(name), functionContext.getError());
                                    }

                                    @Override
                                    public void onSuccess(final FunctionContext functionContext) {
                                        refresh(Ids.content(name));
                                        wzd.showSuccess(resources.constants().uploadSuccessful(),
                                                resources.messages().uploadSuccessful(name),
                                                resources.messages().view(Names.CONTENT),
                                                cxt -> { /* nothing to do, content is already selected */ });
                                    }
                                }, functions);
                    })
                    .build();
            wizard.show();
        });
    }

    /**
     * Checks if the host is in restart mode, if yes then asks user to restart host, as it must be restarted before
     * a patch can be installed or to call a rollback on a installed patch.
     *
     * @param callback
     */
    private void checkHostState(Dispatcher.SuccessCallback callback) {

        ResourceAddress address = new ResourceAddress().add(HOST, statementContext.selectedHost());
        Operation operation = new Operation.Builder(address, READ_RESOURCE_OPERATION)
                .param(INCLUDE_RUNTIME, true)
                .build();

        dispatcher.execute(operation, result -> {

            Property prop = new Property(statementContext.selectedHost(), result);
            Host host = new Host(prop);
            if (host.needsRestart()) {
                SafeHtml question = host.isDomainController()
                        ? resources.messages().patchRestartDomainControllerQuestion(host.getName())
                        : resources.messages().patchRestartHostControllerQuestion(host.getName());

                hostActions.restart(host, question);
            } else {
                callback.onSuccess(null);
            }
        });

    }

    /**
     *
     */
    static class UploadPatch implements Function<FunctionContext> {

        private EventBus eventBus;
        private StatementContext statementContext;
        private final Environment environment;
        private final Dispatcher dispatcher;
        private Resources resources;
        private PatchContext patchContext;

        UploadPatch(final EventBus eventBus, final StatementContext statementContext, final Environment environment,
                final Dispatcher dispatcher, final Resources resources, final PatchContext patchContext) {
            this.eventBus = eventBus;
            this.statementContext = statementContext;
            this.environment = environment;
            this.dispatcher = dispatcher;
            this.resources = resources;
            this.patchContext = patchContext;
        }

        @Override
        public void execute(final Control<FunctionContext> control) {
            _log.info("UploadPatch content: " + patchContext.file.name);
            ResourceAddress address = SELECTED_PATCHING_TEMPLATE.resolve(statementContext);
            Operation.Builder opBuilder = new Operation.Builder(address, PATCH)
                    .param(OVERRIDE_ALL, patchContext.overrideAll)
                    .param(OVERRIDE_MODULE, patchContext.overrideModules);
            if (patchContext.override != null)
                opBuilder.param(OVERRIDE, patchContext.override.toArray(new String[patchContext.override.size()]));
            if (patchContext.preserve != null)
                opBuilder.param(PRESERVE, patchContext.preserve.toArray(new String[patchContext.preserve.size()]));

            Operation operation = opBuilder.build();

            operation.get(CONTENT).add().get("input-stream-index").set(0); //NON-NLS
            _log.info("upload patch operation: " + operation);

            dispatcher.upload(patchContext.file, operation,
                    result -> {
                        _log.info("callback patch upload result: " + result);
                        MessageEvent.fire(eventBus, Message.success(resources.messages().patchSucessfullyApplied(patchContext.file.name)));
                        control.proceed();
                    },

                    (op, failure) -> {
                        MessageEvent.fire(eventBus, Message.error(resources.messages().patchAddError(patchContext.file.name, failure)));
                        _log.info("callback failure patch upload: " + failure);
                        control.proceed();
                    },

                    (op, exception) -> {
                        MessageEvent.fire(eventBus, Message.error(resources.messages().patchAddError(patchContext.file.name, exception.getMessage())));
                        _log.info("callback exception patch upload: " + exception);
                        control.proceed();
                    });
        }
    }

}
