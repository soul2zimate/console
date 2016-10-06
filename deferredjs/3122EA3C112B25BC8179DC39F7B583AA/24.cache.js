$wnd.hal.runAsyncCallback24("function MailSession_0(property){\n  $clinit_MailSession();\n  NamedNode.call(this, property.getName(), property.getValue_3());\n  this.$init_981();\n}\n\ndefineClass(733, 22, {1:1, 14:1, 22:1}, MailSession_0);\n_.getServerSocketBinding = function getServerSocketBinding(name_0){\n  var node;\n  node = failSafeGet(this, 'server' + '/' + name_0 + '/' + 'outbound-socket-binding-ref');\n  return node.isDefined()?node.asString():'n/a';\n}\n;\nfunction $clinit_MailSessionColumn(){\n  $clinit_MailSessionColumn = emptyMethod;\n  $clinit_FinderColumn();\n}\n\nfunction MailSessionColumn(finder, columnActionFactory, itemActionFactory, eventBus, dispatcher, statementContext, metadataRegistry, places, resources){\n  $clinit_MailSessionColumn();\n  FinderColumn.call(this, (new FinderColumn$Builder(finder, 'mail-session', 'Mail Session')).withFilter_0().useFirstActionAsBreadcrumbHandler_0());\n  this.$init_982();\n  this.setItemsProvider(new MailSessionColumn$lambda$0$Type(statementContext, dispatcher));\n  this.addColumnAction(columnActionFactory.add_27(($clinit_Ids() , MAIL_SESSION_ADD), 'Mail Session', new MailSessionColumn$lambda$1$Type(metadataRegistry, resources, statementContext, dispatcher, eventBus)));\n  this.addColumnAction(columnActionFactory.refresh_8(($clinit_Ids() , MAIL_SESSION_REFRESH)));\n  this.setItemRenderer(new MailSessionColumn$lambda$2$Type(this, itemActionFactory, places));\n  this.setPreviewCallback(new MailSessionColumn$lambda$3$Type(resources));\n}\n\nfunction lambda$0_121(statementContext_0, dispatcher_1, context_2, callback_3){\n  $clinit_MailSessionColumn();\n  var mailAddress, op;\n  {\n    mailAddress = ($clinit_AddressTemplates_7() , MAIL_TEMPLATE).resolve_3(statementContext_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n    op = (new Operation$Builder('read-resource', mailAddress)).param_2('recursive', true).build_13();\n    dispatcher_1.execute_12(op, new MailSessionColumn$lambda$4$Type(callback_3));\n  }\n}\n\nfunction lambda$1_70(metadataRegistry_0, resources_1, statementContext_2, dispatcher_3, eventBus_4, column_5){\n  $clinit_MailSessionColumn();\n  var dialog, metadata;\n  {\n    metadata = castTo(metadataRegistry_0.lookup_1(($clinit_AddressTemplates_7() , MAIL_SESSION_TEMPLATE)), 27);\n    dialog = new AddResourceDialog(($clinit_Ids() , MAIL_SESSION_DIALOG), resources_1.messages_0().addResourceTitle('Mail Session'), metadata, asList_2(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['jndi-name', 'from', 'debug'])), new MailSessionColumn$lambda$5$Type(statementContext_2, dispatcher_3, eventBus_4, resources_1, column_5));\n    dialog.show_0();\n  }\n}\n\nfunction lambda$3_41(resources_0, mailSession_1){\n  $clinit_MailSessionColumn();\n  return new MailSessionPreview(mailSession_1, resources_0);\n}\n\nfunction lambda$4_32(callback_0, result_1){\n  $clinit_MailSessionColumn();\n  var mailSessions;\n  {\n    mailSessions = castTo(result_1.get_17('mail-session').asPropertyList().stream().map_3(new MailSessionColumn$0methodref$ctor$Type).collect_0(toList()), 13);\n    callback_0.onSuccess_0(mailSessions);\n  }\n}\n\nfunction lambda$5_23(statementContext_0, dispatcher_1, eventBus_2, resources_3, column_4, name_5, modelNode_6){\n  $clinit_MailSessionColumn();\n  var address, operation;\n  {\n    if (isNotNull(modelNode_6)) {\n      address = ($clinit_AddressTemplates_7() , MAIL_SESSION_TEMPLATE).resolve_3(statementContext_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [name_5]));\n      operation = (new Operation$Builder('add', address)).param_0('mail-session', name_5).payload_0(modelNode_6).build_13();\n      dispatcher_1.execute_12(operation, new MailSessionColumn$lambda$6$Type(eventBus_2, resources_3, name_5, column_4));\n    }\n  }\n}\n\nfunction lambda$6_19(eventBus_0, resources_1, name_2, column_3, result_4){\n  $clinit_MailSessionColumn();\n  {\n    fire_18(eventBus_0, success_6(resources_1.messages_0().addResourceSuccess('Mail Session', name_2)));\n    column_3.refresh_2(name_2);\n  }\n}\n\ndefineClass(2447, 34, {1:1, 34:1}, MailSessionColumn);\n_.$init_982 = function $init_982(){\n}\n;\n_.lambda$2_32 = function lambda$2_54(itemActionFactory_1, places_2, mailSession_2){\n  $clinit_MailSessionColumn();\n  return new MailSessionColumn$1(this, mailSession_2, itemActionFactory_1, places_2);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn', 2447, Lorg_jboss_hal_core_finder_FinderColumn_2_classLit);\nfunction $clinit_MailSessionColumn$0methodref$ctor$Type(){\n  $clinit_MailSessionColumn$0methodref$ctor$Type = emptyMethod;\n}\n\nfunction MailSessionColumn$0methodref$ctor$Type(){\n  $clinit_MailSessionColumn$0methodref$ctor$Type();\n}\n\ndefineClass(2448, 1, {1:1}, MailSessionColumn$0methodref$ctor$Type);\n_.apply_2 = function apply_112(arg0){\n  return new MailSession_0(castTo(arg0, 54));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$0methodref$ctor$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/0methodref$ctor$Type', 2448, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionColumn$1(){\n  $clinit_MailSessionColumn$1 = emptyMethod;\n  $clinit_Object();\n  $clinit_ItemDisplay_0();\n}\n\nfunction MailSessionColumn$1(this$0, val$mailSession, val$itemActionFactory, val$places){\n  $clinit_MailSessionColumn$1();\n  this.this$01 = this$0;\n  this.val$mailSession2 = val$mailSession;\n  this.val$itemActionFactory3 = val$itemActionFactory;\n  this.val$places4 = val$places;\n  Object_0.call(this);\n  this.$init_983();\n}\n\ndefineClass(2454, 1, {1:1}, MailSessionColumn$1);\n_.$init_983 = function $init_983(){\n}\n;\n_.getIcon = function getIcon_10(){\n  return $getIcon(this);\n}\n;\n_.getId = function getId_18(){\n  return $getId_1(this);\n}\n;\n_.getTooltip = function getTooltip_10(){\n  return $getTooltip(this);\n}\n;\n_.nextColumn_0 = function nextColumn_11(){\n  return $nextColumn(this);\n}\n;\n_.actions_0 = function actions_11(){\n  var actions;\n  actions = new ArrayList;\n  actions.add_0(this.val$itemActionFactory3.view_1(this.val$places4.selectedProfile_0('mail-session').with_0('name', this.val$mailSession2.getName()).build_1()));\n  actions.add_0(this.val$itemActionFactory3.remove_15('Mail Session', this.val$mailSession2.getName(), ($clinit_AddressTemplates_7() , MAIL_SESSION_TEMPLATE), this.this$01));\n  return actions;\n}\n;\n_.asElement_0 = function asElement_53(){\n  if (!this.val$mailSession2.getServers().isEmpty()) {\n    return withSubtitle(this.val$mailSession2.getName(), on_1(', ').join_0(this.val$mailSession2.getServers()));\n  }\n  return null;\n}\n;\n_.getFilterData = function getFilterData_10(){\n  var data_0;\n  data_0 = new ArrayList;\n  data_0.add_0(this.val$mailSession2.getName());\n  data_0.addAll(this.val$mailSession2.getServers());\n  return on_0(32).join_0(data_0);\n}\n;\n_.getTitle = function getTitle_11(){\n  return this.val$mailSession2.getName();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$1_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/1', 2454, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionColumn$lambda$0$Type(){\n  $clinit_MailSessionColumn$lambda$0$Type = emptyMethod;\n}\n\nfunction MailSessionColumn$lambda$0$Type(statementContext_0, dispatcher_1){\n  $clinit_MailSessionColumn$lambda$0$Type();\n  this.statementContext_0 = statementContext_0;\n  this.dispatcher_1 = dispatcher_1;\n}\n\ndefineClass(2450, 1, {1:1}, MailSessionColumn$lambda$0$Type);\n_.get_13 = function get_146(arg0, arg1){\n  lambda$0_121(this.statementContext_0, this.dispatcher_1, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/lambda$0$Type', 2450, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionColumn$lambda$1$Type(){\n  $clinit_MailSessionColumn$lambda$1$Type = emptyMethod;\n}\n\nfunction MailSessionColumn$lambda$1$Type(metadataRegistry_0, resources_1, statementContext_2, dispatcher_3, eventBus_4){\n  $clinit_MailSessionColumn$lambda$1$Type();\n  this.metadataRegistry_0 = metadataRegistry_0;\n  this.resources_1 = resources_1;\n  this.statementContext_2 = statementContext_2;\n  this.dispatcher_3 = dispatcher_3;\n  this.eventBus_4 = eventBus_4;\n}\n\ndefineClass(2453, 1, {1:1}, MailSessionColumn$lambda$1$Type);\n_.execute_7 = function execute_137(arg0){\n  lambda$1_70(this.metadataRegistry_0, this.resources_1, this.statementContext_2, this.dispatcher_3, this.eventBus_4, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/lambda$1$Type', 2453, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionColumn$lambda$2$Type(){\n  $clinit_MailSessionColumn$lambda$2$Type = emptyMethod;\n}\n\nfunction MailSessionColumn$lambda$2$Type($$outer_0, itemActionFactory_1, places_2){\n  $clinit_MailSessionColumn$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n  this.itemActionFactory_1 = itemActionFactory_1;\n  this.places_2 = places_2;\n}\n\ndefineClass(2455, 1, {1:1}, MailSessionColumn$lambda$2$Type);\n_.render_4 = function render_50(arg0){\n  return this.$$outer_0.lambda$2_32(this.itemActionFactory_1, this.places_2, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/lambda$2$Type', 2455, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionColumn$lambda$3$Type(){\n  $clinit_MailSessionColumn$lambda$3$Type = emptyMethod;\n}\n\nfunction MailSessionColumn$lambda$3$Type(resources_0){\n  $clinit_MailSessionColumn$lambda$3$Type();\n  this.resources_0 = resources_0;\n}\n\ndefineClass(2456, 1, {1:1}, MailSessionColumn$lambda$3$Type);\n_.onPreview = function onPreview_8(arg0){\n  return lambda$3_41(this.resources_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/lambda$3$Type', 2456, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionColumn$lambda$4$Type(){\n  $clinit_MailSessionColumn$lambda$4$Type = emptyMethod;\n}\n\nfunction MailSessionColumn$lambda$4$Type(callback_0){\n  $clinit_MailSessionColumn$lambda$4$Type();\n  this.callback_0 = callback_0;\n}\n\ndefineClass(2449, 1, {1:1, 24:1}, MailSessionColumn$lambda$4$Type);\n_.onSuccess_0 = function onSuccess_120(arg0){\n  lambda$4_32(this.callback_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/lambda$4$Type', 2449, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionColumn$lambda$5$Type(){\n  $clinit_MailSessionColumn$lambda$5$Type = emptyMethod;\n}\n\nfunction MailSessionColumn$lambda$5$Type(statementContext_0, dispatcher_1, eventBus_2, resources_3, column_4){\n  $clinit_MailSessionColumn$lambda$5$Type();\n  this.statementContext_0 = statementContext_0;\n  this.dispatcher_1 = dispatcher_1;\n  this.eventBus_2 = eventBus_2;\n  this.resources_3 = resources_3;\n  this.column_4 = column_4;\n}\n\ndefineClass(2452, 1, {1:1}, MailSessionColumn$lambda$5$Type);\n_.onAdd = function onAdd_16(arg0, arg1){\n  lambda$5_23(this.statementContext_0, this.dispatcher_1, this.eventBus_2, this.resources_3, this.column_4, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/lambda$5$Type', 2452, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionColumn$lambda$6$Type(){\n  $clinit_MailSessionColumn$lambda$6$Type = emptyMethod;\n}\n\nfunction MailSessionColumn$lambda$6$Type(eventBus_0, resources_1, name_2, column_3){\n  $clinit_MailSessionColumn$lambda$6$Type();\n  this.eventBus_0 = eventBus_0;\n  this.resources_1 = resources_1;\n  this.name_2 = name_2;\n  this.column_3 = column_3;\n}\n\ndefineClass(2451, 1, {1:1, 24:1}, MailSessionColumn$lambda$6$Type);\n_.onSuccess_0 = function onSuccess_121(arg0){\n  lambda$6_19(this.eventBus_0, this.resources_1, this.name_2, this.column_3, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionColumn$lambda$6$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionColumn/lambda$6$Type', 2451, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPreview(){\n  $clinit_MailSessionPreview = emptyMethod;\n  $clinit_PreviewContent();\n}\n\nfunction MailSessionPreview(mailSession, resources){\n  $clinit_MailSessionPreview();\n  var attributes;\n  PreviewContent_2.call(this, mailSession.getName(), mailSession.getServers().isEmpty()?resources.constants_0().noConfiguredMailServers():resources.messages_0().configuredMailServer(on_1(', ').join_0(mailSession.getServers())).asString());\n  this.$init_987();\n  attributes = new PreviewAttributes(mailSession);\n  attributes.append_19('jndi-name');\n  if (mailSession.hasServer('smtp')) {\n    attributes.append_21(new MailSessionPreview$lambda$0$Type);\n  }\n  if (mailSession.hasServer('imap')) {\n    attributes.append_21(new MailSessionPreview$lambda$1$Type);\n  }\n  if (mailSession.hasServer('pop3')) {\n    attributes.append_21(new MailSessionPreview$lambda$2$Type);\n  }\n  attributes.end_0();\n  this.previewBuilder().addAll_0(attributes);\n}\n\nfunction lambda$0_123(model_0){\n  $clinit_MailSessionPreview();\n  return new PreviewAttributes$PreviewAttribute(toUpperCase__Ljava_lang_String___devirtual$('smtp') + ' ' + 'Socket Binding', model_0.getServerSocketBinding('smtp'));\n}\n\nfunction lambda$1_72(model_0){\n  $clinit_MailSessionPreview();\n  return new PreviewAttributes$PreviewAttribute(toUpperCase__Ljava_lang_String___devirtual$('imap') + ' ' + 'Socket Binding', model_0.getServerSocketBinding('imap'));\n}\n\nfunction lambda$2_56(model_0){\n  $clinit_MailSessionPreview();\n  return new PreviewAttributes$PreviewAttribute(toUpperCase__Ljava_lang_String___devirtual$('pop3') + ' ' + 'Socket Binding', model_0.getServerSocketBinding('pop3'));\n}\n\ndefineClass(3060, 39, {1:1, 12:1, 39:1}, MailSessionPreview);\n_.$init_987 = function $init_987(){\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPreview_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPreview', 3060, Lorg_jboss_hal_core_finder_PreviewContent_2_classLit);\nfunction $clinit_MailSessionPreview$lambda$0$Type(){\n  $clinit_MailSessionPreview$lambda$0$Type = emptyMethod;\n}\n\nfunction MailSessionPreview$lambda$0$Type(){\n  $clinit_MailSessionPreview$lambda$0$Type();\n}\n\ndefineClass(3061, 1, {1:1, 147:1}, MailSessionPreview$lambda$0$Type);\n_.labelValue = function labelValue_2(arg0){\n  return lambda$0_123(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPreview$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPreview/lambda$0$Type', 3061, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPreview$lambda$1$Type(){\n  $clinit_MailSessionPreview$lambda$1$Type = emptyMethod;\n}\n\nfunction MailSessionPreview$lambda$1$Type(){\n  $clinit_MailSessionPreview$lambda$1$Type();\n}\n\ndefineClass(3062, 1, {1:1, 147:1}, MailSessionPreview$lambda$1$Type);\n_.labelValue = function labelValue_3(arg0){\n  return lambda$1_72(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPreview$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPreview/lambda$1$Type', 3062, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPreview$lambda$2$Type(){\n  $clinit_MailSessionPreview$lambda$2$Type = emptyMethod;\n}\n\nfunction MailSessionPreview$lambda$2$Type(){\n  $clinit_MailSessionPreview$lambda$2$Type();\n}\n\ndefineClass(3063, 1, {1:1, 147:1}, MailSessionPreview$lambda$2$Type);\n_.labelValue = function labelValue_4(arg0){\n  return lambda$2_56(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPreview$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPreview/lambda$2$Type', 3063, Ljava_lang_Object_2_classLit);\ndefineClass(1052, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn_org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ColumnActionFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ItemActionFactory$_annotation$$none$$(), this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_mvp().get_Key$type$org$jboss$hal$core$mvp$Places$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn_org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn_methodInjection = function org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn_org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7, _8){\n  return new MailSessionColumn(_0, _1, _2, _3, _4, _5, _6, _7, _8);\n}\n;\ndefineClass(1056, 1, {60:1, 1:1});\n_.onSuccess_1 = function onSuccess_127(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionColumn$_annotation$$none$$());\n}\n;\ndefineClass(116, 1, {1:1, 125:1});\n_.noConfiguredMailServers = function noConfiguredMailServers(){\n  return 'No configured mail servers found.';\n}\n;\ndefineClass(229, 1, {1:1, 259:1});\n_.configuredMailServer = function configuredMailServer(arg0){\n  return (new SafeHtmlBuilder).appendHtmlConstant('Configured mail servers: ').appendEscaped(arg0).toSafeHtml();\n}\n;\n$entry(onLoad)(24);\n\n//# sourceURL=hal-24.js\n")
