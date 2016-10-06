$wnd.hal.runAsyncCallback21("function $clinit_LoggingColumn(){\n  $clinit_LoggingColumn = emptyMethod;\n  $clinit_StaticItemColumn();\n}\n\nfunction LoggingColumn(finder, itemMonitor, statementContext, dispatcher, placeManager, places, resources){\n  $clinit_LoggingColumn();\n  StaticItemColumn.call(this, finder, 'logging', 'Logging', asList_2(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_core_finder_StaticItem_2_classLit, 1), {4:1, 1:1, 5:1}, 136, 0, [(new StaticItem$Builder('Configuration')).id_6('logging-configuration').action_5(resources.constants_0().view_3(), new LoggingColumn$lambda$0$Type(places, placeManager, itemMonitor)).onPreview_1(new LoggingPreview(dispatcher, resources, 'Configuration', resources.previews_0().configurationLoggingConfiguration(), (new Operation$Builder('read-resource', ($clinit_AddressTemplates_6() , ROOT_LOGGER_TEMPLATE).resolve_3(statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [])))).build_13())).build_11(), (new StaticItem$Builder('Logging Profiles')).nextColumn_1('logging-profile').onPreview_1(new PreviewContent_0('Logging Profiles', resources.previews_0().configurationLoggingProfiles())).build_11()])));\n  this.$init_957();\n}\n\nfunction lambda$0_112(places_0, placeManager_1, itemMonitor_2, item_3){\n  $clinit_LoggingColumn();\n  itemMonitor_2.monitorPlaceRequest(item_3.getId(), 'logging-configuration', new LoggingColumn$lambda$1$Type(places_0, placeManager_1)).execute_6(item_3);\n}\n\nfunction lambda$1_62(places_0, placeManager_1){\n  $clinit_LoggingColumn();\n  var placeRequest;\n  {\n    placeRequest = places_0.selectedProfile_0('logging-configuration').build_1();\n    placeManager_1.revealPlace(placeRequest);\n  }\n}\n\ndefineClass(2437, 186, {1:1, 34:1}, LoggingColumn);\n_.$init_957 = function $init_957(){\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_logging_LoggingColumn_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.logging', 'LoggingColumn', 2437, Lorg_jboss_hal_core_finder_StaticItemColumn_2_classLit);\nfunction $clinit_LoggingColumn$lambda$0$Type(){\n  $clinit_LoggingColumn$lambda$0$Type = emptyMethod;\n}\n\nfunction LoggingColumn$lambda$0$Type(places_0, placeManager_1, itemMonitor_2){\n  $clinit_LoggingColumn$lambda$0$Type();\n  this.places_0 = places_0;\n  this.placeManager_1 = placeManager_1;\n  this.itemMonitor_2 = itemMonitor_2;\n}\n\ndefineClass(2439, 1, {1:1}, LoggingColumn$lambda$0$Type);\n_.execute_6 = function execute_116(arg0){\n  lambda$0_112(this.places_0, this.placeManager_1, this.itemMonitor_2, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_logging_LoggingColumn$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.logging', 'LoggingColumn/lambda$0$Type', 2439, Ljava_lang_Object_2_classLit);\nfunction $clinit_LoggingColumn$lambda$1$Type(){\n  $clinit_LoggingColumn$lambda$1$Type = emptyMethod;\n}\n\nfunction LoggingColumn$lambda$1$Type(places_0, placeManager_1){\n  $clinit_LoggingColumn$lambda$1$Type();\n  this.places_0 = places_0;\n  this.placeManager_1 = placeManager_1;\n}\n\ndefineClass(2438, 1, {1:1}, LoggingColumn$lambda$1$Type);\n_.execute_0 = function execute_117(){\n  lambda$1_62(this.places_0, this.placeManager_1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_logging_LoggingColumn$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.logging', 'LoggingColumn/lambda$1$Type', 2438, Ljava_lang_Object_2_classLit);\ndefineClass(1042, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn_org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn_methodInjection(this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$ItemMonitor$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_com_gwtplatform_mvp_client_proxy().get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_mvp().get_Key$type$org$jboss$hal$core$mvp$Places$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn_org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn_methodInjection = function org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn_org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn_methodInjection(_0, _1, _2, _3, _4, _5, _6){\n  return new LoggingColumn(_0, _1, _2, _3, _4, _5, _6);\n}\n;\ndefineClass(1048, 1, {60:1, 1:1});\n_.onSuccess_1 = function onSuccess_118(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$logging$LoggingColumn$_annotation$$none$$());\n}\n;\ndefineClass(61, 1, {1:1});\n_.action_5 = function action_39(title_0, action){\n  this.actions.add_0(new ItemAction_2(title_0, action));\n  return this;\n}\n;\n_.id_6 = function id_6(id_0){\n  this.id_0 = id_0;\n  return this;\n}\n;\n$entry(onLoad)(21);\n\n//# sourceURL=hal-21.js\n")
