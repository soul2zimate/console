$wnd.hal.runAsyncCallback23("defineClass(1968, 687, {1:1, 51:1, 178:1});\n_.firstKey = function firstKey(){\n  return this.sortedMap().firstKey();\n}\n;\ndefineClass(685, 684, {17:1, 1:1, 18:1, 32:1, 165:1});\n_.first_1 = function first_1(){\n  return this.sortedMap().firstKey();\n}\n;\n_.sortedMap = function sortedMap_0(){\n  return castTo(getClassPrototype(424).map_1.call(this), 178);\n}\n;\ndefineClass(1965, 435, {17:1, 1:1, 18:1, 32:1, 165:1});\n_.first_1 = function first_4(){\n  this.refreshIfEmpty();\n  return this.getSortedSetDelegate().first_1();\n}\n;\n_.getSortedSetDelegate = function getSortedSetDelegate(){\n  return castTo(this.getDelegate(), 165);\n}\n;\ndefineClass(985, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction getKeyOrNSE(entry){\n  if (isNull_0(entry)) {\n    throw toJs(new NoSuchElementException);\n  }\n  return entry.getKey_0();\n}\n\ndefineClass(1158, 265, {1:1, 51:1, 178:1});\n_.firstKey = function firstKey_0(){\n  return getKeyOrNSE(this.getFirstEntry());\n}\n;\ndefineClass(1163, 158, {17:1, 1:1, 18:1, 32:1, 165:1});\n_.first_1 = function first_5(){\n  return this.map_0.firstKey();\n}\n;\ndefineClass(843, 394, {17:1, 1:1, 18:1, 32:1, 165:1});\n_.first_1 = function first_6(){\n  return this.sortedSet.first_1();\n}\n;\ndefineClass(482, 1158, {4:1, 1:1, 51:1, 178:1});\n_.getFirstEntry = function getFirstEntry(){\n  var nextNode, node;\n  if (isNull_0(this.root)) {\n    return null;\n  }\n  node = this.root;\n  while (isNotNull(nextNode = node.child[0])) {\n    node = nextNode;\n  }\n  return node;\n}\n;\ndefineClass(219, 158, {4:1, 17:1, 1:1, 18:1, 32:1, 165:1});\n_.first_1 = function first_7(){\n  return this.map_0.firstKey();\n}\n;\ndefineClass(22, 14, {1:1, 14:1, 22:1});\n_.asModelNode = function asModelNode(){\n  return this.node;\n}\n;\nfunction MailSession(name_0, node){\n  $clinit_MailSession();\n  NamedNode.call(this, name_0, node);\n  this.$init_988();\n}\n\ndefineClass(733, 22, {1:1, 14:1, 22:1}, MailSession);\nfunction $clinit_MailSessionPresenter(){\n  $clinit_MailSessionPresenter = emptyMethod;\n  $clinit_ApplicationPresenter();\n}\n\nfunction MailSessionPresenter(eventBus, view, proxy, finder, finderPathFactory, resources, dispatcher, statementContext, metadataRegistry){\n  $clinit_MailSessionPresenter();\n  ApplicationPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_991();\n  this.finderPathFactory = finderPathFactory;\n  this.metadataRegistry = metadataRegistry;\n  this.resources = resources;\n  this.dispatcher = dispatcher;\n  this.statementContext = new SelectionAwareStatementContext(statementContext, new MailSessionPresenter$lambda$0$Type(this));\n  this.operationFactory = new OperationFactory;\n}\n\nfunction lambda$4_33(node_0){\n  $clinit_MailSessionPresenter();\n  return toUpperCase__Ljava_lang_String___devirtual$(node_0.asString());\n}\n\ndefineClass(489, 47, {58:1, 49:1, 1:1, 33:1, 30:1, 489:1, 47:1, 101:1}, MailSessionPresenter);\n_.$init_991 = function $init_991(){\n}\n;\n_.lambda$0_71 = function lambda$0_122(){\n  $clinit_MailSessionPresenter();\n  return this.mailSessionName;\n}\n;\n_.lambda$1_42 = function lambda$1_71(result_0){\n  $clinit_MailSessionPresenter();\n  castTo(this.getView(), 3182).update_8(new MailSession(this.mailSessionName, result_0));\n}\n;\n_.lambda$2_33 = function lambda$2_55(result_0){\n  $clinit_MailSessionPresenter();\n  {\n    fire_18(this.getEventBus(), success_6(this.resources.messages_0().modifyResourceSuccess('Mail Session', this.mailSessionName)));\n    this.loadMailSession();\n  }\n}\n;\n_.lambda$3_21 = function lambda$3_42(availableServers_1, serversResult_1){\n  $clinit_MailSessionPresenter();\n  var dialog, existingServers, form_0, metadata, serverTypeItem;\n  {\n    existingServers = castTo(serversResult_1.asList_1().stream().map_3(new MailSessionPresenter$lambda$4$Type).collect_0(toSet()), 32);\n    availableServers_1.removeAll(existingServers);\n    if (availableServers_1.isEmpty()) {\n      fire_18(this.getEventBus(), error_6(this.resources.messages_0().allMailServersExist()));\n    }\n     else {\n      if (availableServers_1.size_1() == 1) {\n        serverTypeItem = new TextBoxItem('server-type', this.resources.constants_0().type_8());\n        serverTypeItem.setValue_1(castToString(availableServers_1.first_1()));\n        serverTypeItem.setEnabled(false);\n      }\n       else {\n        serverTypeItem = new SingleSelectBoxItem('server-type', this.resources.constants_0().type_8(), new ArrayList_1(availableServers_1));\n        serverTypeItem.setRequired(true);\n      }\n      metadata = castTo(this.metadataRegistry.lookup_1(($clinit_AddressTemplates_7() , SERVER_TEMPLATE)), 27);\n      form_0 = (new ModelNodeForm$Builder(($clinit_Ids() , MAIL_SERVER_DIALOG), metadata)).addFromRequestProperties().include_4('outbound-socket-binding-ref', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['username', 'password', 'ssl', 'tls'])).requiredOnly_0().unboundFormItem_0(serverTypeItem, 0).build_12();\n      dialog = new AddResourceDialog_1(this.resources.messages_0().addResourceTitle('Server'), form_0, new MailSessionPresenter$lambda$5$Type(this, serverTypeItem));\n      dialog.getForm().getFormItem('outbound-socket-binding-ref').registerSuggestHandler(new ReadChildResourcesTypeahead_0(($clinit_AddressTemplates_7() , SOCKET_BINDING_TEMPLATE), this.statementContext));\n      dialog.show_0();\n    }\n  }\n}\n;\n_.lambda$5_17 = function lambda$5_24(serverTypeItem_1, name_1, modelNode_2){\n  $clinit_MailSessionPresenter();\n  var address, operation, serverType;\n  {\n    serverType = toLowerCase__Ljava_lang_String___devirtual$(castToString(serverTypeItem_1.getValue_0()));\n    address = ($clinit_AddressTemplates_7() , SELECTED_MAIL_SESSION_TEMPLATE).append_22('server' + '=' + serverType).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n    operation = (new Operation$Builder('add', address)).payload_0(modelNode_2).param_0('server', name_1).build_13();\n    this.dispatcher.execute_12(operation, new MailSessionPresenter$lambda$6$Type(this, serverType));\n  }\n}\n;\n_.lambda$6_11 = function lambda$6_20(serverType_1, result_1){\n  $clinit_MailSessionPresenter();\n  {\n    fire_18(this.getEventBus(), success_6(this.resources.messages_0().addResourceSuccess('Server', serverType_1)));\n    this.loadMailSession();\n  }\n}\n;\n_.finderPath = function finderPath_11(){\n  return this.finderPathFactory.subsystemPath('mail').append_17('mail-session', this.mailSessionName, 'Mail Session', this.mailSessionName);\n}\n;\n_.getMailSessionName = function getMailSessionName(){\n  return this.mailSessionName;\n}\n;\n_.launchAddNewServer = function launchAddNewServer(){\n  var availableServers, selectedSessionAddress, serverNamesOp;\n  availableServers = new TreeSet_0(asList_2(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [toUpperCase__Ljava_lang_String___devirtual$('smtp'), toUpperCase__Ljava_lang_String___devirtual$('imap'), toUpperCase__Ljava_lang_String___devirtual$('pop3')])));\n  selectedSessionAddress = ($clinit_AddressTemplates_7() , SELECTED_MAIL_SESSION_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  serverNamesOp = (new Operation$Builder('read-children-names', selectedSessionAddress)).param_0('child-type', 'server').build_13();\n  this.dispatcher.execute_12(serverNamesOp, new MailSessionPresenter$lambda$3$Type(this, availableServers));\n}\n;\n_.loadMailSession = function loadMailSession(){\n  var address, operation;\n  address = ($clinit_AddressTemplates_7() , SELECTED_MAIL_SESSION_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  operation = (new Operation$Builder('read-resource', address)).param_2('recursive', true).build_13();\n  this.dispatcher.execute_12(operation, new MailSessionPresenter$lambda$1$Type(this));\n}\n;\n_.onBind = function onBind_14(){\n  getClassPrototype(89).onBind.call(this);\n  castTo(this.getView(), 3182).setPresenter(this);\n}\n;\n_.onReset = function onReset_8(){\n  getClassPrototype(47).onReset.call(this);\n  this.loadMailSession();\n}\n;\n_.prepareFromRequest = function prepareFromRequest_6(request){\n  getClassPrototype(47).prepareFromRequest.call(this, request);\n  this.mailSessionName = request.getParameter_0('name', null);\n}\n;\n_.save_2 = function save_3(changedValues){\n  var composite, resourceAddress;\n  resourceAddress = ($clinit_AddressTemplates_7() , SELECTED_MAIL_SESSION_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  composite = this.operationFactory.fromChangeSet(resourceAddress, changedValues);\n  this.dispatcher.execute_10(composite, new MailSessionPresenter$lambda$2$Type(this));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter', 489, Lorg_jboss_hal_core_mvp_ApplicationPresenter_2_classLit);\nfunction $clinit_MailSessionPresenter$MyView(){\n  $clinit_MailSessionPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/MyView');\nfunction $clinit_MailSessionPresenter$lambda$0$Type(){\n  $clinit_MailSessionPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$0$Type($$outer_0){\n  $clinit_MailSessionPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1208, 1, {1:1}, MailSessionPresenter$lambda$0$Type);\n_.get_8 = function get_149(){\n  return this.$$outer_0.lambda$0_71();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$0$Type', 1208, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$1$Type(){\n  $clinit_MailSessionPresenter$lambda$1$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$1$Type($$outer_0){\n  $clinit_MailSessionPresenter$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1209, 1, {1:1, 24:1}, MailSessionPresenter$lambda$1$Type);\n_.onSuccess_0 = function onSuccess_122(arg0){\n  this.$$outer_0.lambda$1_42(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$1$Type', 1209, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$2$Type(){\n  $clinit_MailSessionPresenter$lambda$2$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$2$Type($$outer_0){\n  $clinit_MailSessionPresenter$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1210, 1, {1:1, 76:1}, MailSessionPresenter$lambda$2$Type);\n_.onSuccess_0 = function onSuccess_123(arg0){\n  this.$$outer_0.lambda$2_33(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$2$Type', 1210, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$3$Type(){\n  $clinit_MailSessionPresenter$lambda$3$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$3$Type($$outer_0, availableServers_1){\n  $clinit_MailSessionPresenter$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n  this.availableServers_1 = availableServers_1;\n}\n\ndefineClass(1214, 1, {1:1, 24:1}, MailSessionPresenter$lambda$3$Type);\n_.onSuccess_0 = function onSuccess_124(arg0){\n  this.$$outer_0.lambda$3_21(this.availableServers_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$3$Type', 1214, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$4$Type(){\n  $clinit_MailSessionPresenter$lambda$4$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$4$Type(){\n  $clinit_MailSessionPresenter$lambda$4$Type();\n}\n\ndefineClass(1211, 1, {1:1}, MailSessionPresenter$lambda$4$Type);\n_.apply_2 = function apply_113(arg0){\n  return lambda$4_33(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$4$Type', 1211, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$5$Type(){\n  $clinit_MailSessionPresenter$lambda$5$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$5$Type($$outer_0, serverTypeItem_1){\n  $clinit_MailSessionPresenter$lambda$5$Type();\n  this.$$outer_0 = $$outer_0;\n  this.serverTypeItem_1 = serverTypeItem_1;\n}\n\ndefineClass(1213, 1, {1:1}, MailSessionPresenter$lambda$5$Type);\n_.onAdd = function onAdd_17(arg0, arg1){\n  this.$$outer_0.lambda$5_17(this.serverTypeItem_1, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$5$Type', 1213, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$6$Type(){\n  $clinit_MailSessionPresenter$lambda$6$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$6$Type($$outer_0, serverType_1){\n  $clinit_MailSessionPresenter$lambda$6$Type();\n  this.$$outer_0 = $$outer_0;\n  this.serverType_1 = serverType_1;\n}\n\ndefineClass(1212, 1, {1:1, 24:1}, MailSessionPresenter$lambda$6$Type);\n_.onSuccess_0 = function onSuccess_125(arg0){\n  this.$$outer_0.lambda$6_11(this.serverType_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$6$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$6$Type', 1212, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionView(){\n  $clinit_MailSessionView = emptyMethod;\n  $clinit_PatternFlyViewImpl();\n}\n\nfunction MailSessionView(metadataRegistry, metadataProcessor, progress, dispatcher, eventBus, statementContext, resources){\n  $clinit_MailSessionView();\n  var formServer, layoutBuilder, mailSessionAttributesForm, mailSessionMetadata, navigationElement, root, serverMetadata, serverTemplate, tableButtonFactory, tableOptions;\n  PatternFlyViewImpl.call(this);\n  this.$init_995();\n  this.statementContext = statementContext;\n  this.navigation = new VerticalNavigation;\n  this.forms_0 = new HashMap;\n  tableButtonFactory = new TableButtonFactory(metadataProcessor, progress, dispatcher, eventBus, new SelectionAwareStatementContext(statementContext, new MailSessionView$lambda$0$Type(this)), resources);\n  mailSessionMetadata = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_7() , MAIL_SESSION_TEMPLATE)), 27);\n  mailSessionAttributesForm = (new ModelNodeForm$Builder(($clinit_Ids() , MAIL_SESSION_ATTRIBUTES_FORM), mailSessionMetadata)).onSave_0(new MailSessionView$lambda$1$Type(this)).build_12();\n  navigationElement = castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).p(), 3).textContent_0(mailSessionMetadata.getDescription_0().getDescription()), 3).end(), 3).add_10(mailSessionAttributesForm.asElement_0()), 3).end(), 3).build_2();\n  this.forms_0.put_0(($clinit_Ids() , MAIL_SESSION_ATTRIBUTES_FORM), mailSessionAttributesForm);\n  this.navigation.addPrimary_0(($clinit_Ids() , MAIL_SESSION_ATTRIBUTES_ENTRY), resources.constants_0().attributes_1(), fontAwesome('envelope'), navigationElement);\n  this.registerAttachable(mailSessionAttributesForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  serverMetadata = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_7() , SERVER_TEMPLATE)), 27);\n  serverTemplate = ($clinit_AddressTemplates_7() , SELECTED_MAIL_SESSION_TEMPLATE).append_22('server=*');\n  tableOptions = castTo(castTo(castTo(castTo((new ModelNodeTable$Builder(serverMetadata)).column_9((new ColumnBuilder('type', resources.constants_0().type_8(), makeLambdaFunction(MailSessionView$lambda$2$Type.prototype.render_1, MailSessionView$lambda$2$Type, []))).build_6()), 16).column_9((new ColumnBuilder('outbound-socket-binding-ref', 'Outbound Socket Binding', makeLambdaFunction(MailSessionView$lambda$3$Type.prototype.render_1, MailSessionView$lambda$3$Type, []))).build_6()), 16).button_3(resources.constants_0().add_40(), makeLambdaFunction(MailSessionView$lambda$4$Type.prototype.action_4, MailSessionView$lambda$4$Type, [this])), 16).button_5(tableButtonFactory.remove_16('server', serverTemplate, new MailSessionView$lambda$5$Type, new MailSessionView$lambda$6$Type(this))), 16).build_7();\n  this.serversTable = new ModelNodeTable(($clinit_Ids() , MAIL_SERVER_TABLE), tableOptions);\n  this.registerAttachable(this.serversTable, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  formServer = (new ModelNodeForm$Builder(($clinit_Ids() , MAIL_SERVER_FORM), serverMetadata)).include_4('outbound-socket-binding-ref', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['username', 'password', 'ssl', 'tls'])).unsorted_0().onSave_0(new MailSessionView$lambda$7$Type(this)).build_12();\n  this.registerAttachable(formServer, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  this.forms_0.put_0(($clinit_Ids() , MAIL_SERVER_FORM), formServer);\n  navigationElement = castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).p(), 3).textContent_0(serverMetadata.getDescription_0().getDescription()), 3).end(), 3).add_10(this.serversTable.asElement_0()), 3).add_10(formServer.asElement_0()), 3).end(), 3).build_2();\n  this.navigation.addPrimary_0(($clinit_Ids() , MAIL_SERVER_ENTRY), 'Server', pfIcon('server'), navigationElement);\n  layoutBuilder = castTo(castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().header_1('Mail Session').end(), 9).addAll_0(this.navigation.panes_0()), 9).end(), 9).end(), 9);\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\nfunction lambda$2_57(cell_0, type_1, row_2, meta_3){\n  $clinit_MailSessionView();\n  return toUpperCase__Ljava_lang_String___devirtual$(row_2.getName());\n}\n\nfunction lambda$3_43(cell_0, type_1, row_2, meta_3){\n  $clinit_MailSessionView();\n  return row_2.get_17('outbound-socket-binding-ref').asString();\n}\n\nfunction lambda$5_25(api_0){\n  $clinit_MailSessionView();\n  return castTo($selectedRow(api_0), 22).getName();\n}\n\ndefineClass(1566, 73, {1:1, 33:1, 30:1, 3182:1, 59:1, 115:1, 57:1}, MailSessionView);\n_.$init_995 = function $init_995(){\n}\n;\n_.lambda$0_72 = function lambda$0_124(){\n  $clinit_MailSessionView();\n  return this.presenter.getMailSessionName();\n}\n;\n_.lambda$1_43 = function lambda$1_73(form_0, changedValues_1){\n  $clinit_MailSessionView();\n  this.presenter.save_2(changedValues_1);\n}\n;\n_.lambda$4_19 = function lambda$4_34(event_0, api_1){\n  $clinit_MailSessionView();\n  this.presenter.launchAddNewServer();\n}\n;\n_.lambda$6_12 = function lambda$6_21(){\n  $clinit_MailSessionView();\n  this.presenter.loadMailSession();\n}\n;\n_.lambda$7_8 = function lambda$7_16(f_0, changedValues_1){\n  $clinit_MailSessionView();\n  this.presenter.save_2(changedValues_1);\n}\n;\n_.setPresenter = function setPresenter_7(presenter){\n  this.setPresenter_4(castTo(presenter, 489));\n}\n;\n_.attach = function attach_20(){\n  var form_0;\n  getClassPrototype(73).attach.call(this);\n  form_0 = castTo(this.forms_0.get_2(($clinit_Ids() , MAIL_SERVER_FORM)), 228);\n  $bindForm(this.serversTable.api_0(), form_0);\n}\n;\n_.getVerticalNavigation = function getVerticalNavigation_5(){\n  return this.navigation;\n}\n;\n_.setPresenter_4 = function setPresenter_8(presenter){\n  var form_0;\n  this.presenter = presenter;\n  form_0 = castTo(this.forms_0.get_2(($clinit_Ids() , MAIL_SERVER_FORM)), 228);\n  form_0.getFormItem('outbound-socket-binding-ref').registerSuggestHandler(new ReadChildResourcesTypeahead_0(($clinit_AddressTemplates_7() , SOCKET_BINDING_TEMPLATE), this.statementContext));\n}\n;\n_.update_8 = function update_15(mailSession){\n  var form_0, formAttributes, serverTypeModels;\n  formAttributes = castTo(this.forms_0.get_2(($clinit_Ids() , MAIL_SESSION_ATTRIBUTES_FORM)), 228);\n  formAttributes.view_0(mailSession.asModelNode());\n  $refresh_1(this.serversTable.api_0().clear(), ($clinit_Api$RefreshMode() , RESET_0));\n  this.serversTable.api_0().button(0).enable(mailSession.getServers().size_1() != 3);\n  if (mailSession.hasDefined('server')) {\n    serverTypeModels = asNamedNodes(mailSession.asModelNode().get_17('server').asPropertyList());\n    $refresh_1($add_0(this.serversTable.api_0().clear(), serverTypeModels), ($clinit_Api$RefreshMode() , RESET_0));\n  }\n  form_0 = castTo(this.forms_0.get_2(($clinit_Ids() , MAIL_SERVER_FORM)), 228);\n  form_0.clear_0();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionView', 1566, Lorg_jboss_hal_core_mvp_PatternFlyViewImpl_2_classLit);\nfunction $clinit_MailSessionView$lambda$0$Type(){\n  $clinit_MailSessionView$lambda$0$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$0$Type($$outer_0){\n  $clinit_MailSessionView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1567, 1, {1:1}, MailSessionView$lambda$0$Type);\n_.get_8 = function get_150(){\n  return this.$$outer_0.lambda$0_72();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionView/lambda$0$Type', 1567, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionView$lambda$1$Type(){\n  $clinit_MailSessionView$lambda$1$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$1$Type($$outer_0){\n  $clinit_MailSessionView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1568, 1, {1:1}, MailSessionView$lambda$1$Type);\n_.onSave = function onSave_55(arg0, arg1){\n  this.$$outer_0.lambda$1_43(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionView/lambda$1$Type', 1568, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionView$lambda$2$Type(){\n  $clinit_MailSessionView$lambda$2$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$2$Type(){\n  $clinit_MailSessionView$lambda$2$Type();\n}\n\ndefineClass(4101, $wnd.Function, {1:1}, MailSessionView$lambda$2$Type);\n_.render_1 = function render_51(arg0, arg1, arg2, arg3){\n  return lambda$2_57(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_MailSessionView$lambda$3$Type(){\n  $clinit_MailSessionView$lambda$3$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$3$Type(){\n  $clinit_MailSessionView$lambda$3$Type();\n}\n\ndefineClass(4102, $wnd.Function, {1:1}, MailSessionView$lambda$3$Type);\n_.render_1 = function render_52(arg0, arg1, arg2, arg3){\n  return lambda$3_43(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_MailSessionView$lambda$4$Type(){\n  $clinit_MailSessionView$lambda$4$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$4$Type($$outer_0){\n  $clinit_MailSessionView$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4103, $wnd.Function, {1:1}, MailSessionView$lambda$4$Type);\n_.action_4 = function action_38(arg0, arg1){\n  this.$$outer_0.lambda$4_19(arg0, arg1);\n}\n;\nfunction $clinit_MailSessionView$lambda$5$Type(){\n  $clinit_MailSessionView$lambda$5$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$5$Type(){\n  $clinit_MailSessionView$lambda$5$Type();\n}\n\ndefineClass(1569, 1, {1:1}, MailSessionView$lambda$5$Type);\n_.apply_2 = function apply_114(arg0){\n  return lambda$5_25(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionView$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionView/lambda$5$Type', 1569, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionView$lambda$6$Type(){\n  $clinit_MailSessionView$lambda$6$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$6$Type($$outer_0){\n  $clinit_MailSessionView$lambda$6$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1570, 1, {1:1}, MailSessionView$lambda$6$Type);\n_.execute_0 = function execute_140(){\n  this.$$outer_0.lambda$6_12();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionView$lambda$6$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionView/lambda$6$Type', 1570, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionView$lambda$7$Type(){\n  $clinit_MailSessionView$lambda$7$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$7$Type($$outer_0){\n  $clinit_MailSessionView$lambda$7$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1571, 1, {1:1}, MailSessionView$lambda$7$Type);\n_.onSave = function onSave_56(arg0, arg1){\n  this.$$outer_0.lambda$7_8(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionView$lambda$7$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionView/lambda$7$Type', 1571, Ljava_lang_Object_2_classLit);\ndefineClass(1052, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_methodInjection(this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta_processing().get_Key$type$org$jboss$hal$meta$processing$MetadataProcessor$_annotation$$none$$(), this.injector.getFragment_org_jboss_gwt_flow().get_Key$type$com$google$inject$Provider$org$jboss$gwt$flow$Progress$$_annotation$$org$jboss$hal$spi$Footer$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7, _8){\n  return new MailSessionPresenter(_0, _1, _2, _3, _4, _5, _6, _7, _8);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_methodInjection = function org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_methodInjection(_0, _1, _2, _3, _4, _5, _6){\n  return new MailSessionView(_0, _1, _2, _3, _4, _5, _6);\n}\n;\ndefineClass(1054, 1, {60:1, 1:1});\n_.onSuccess_1 = function onSuccess_126(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$());\n}\n;\ndefineClass(229, 1, {1:1, 259:1});\n_.allMailServersExist = function allMailServersExist(){\n  return (new SafeHtmlBuilder).appendHtmlConstant('All mails servers already exist.').toSafeHtml();\n}\n;\n$entry(onLoad)(23);\n\n//# sourceURL=hal-23.js\n")
