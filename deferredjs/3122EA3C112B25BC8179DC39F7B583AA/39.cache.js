$wnd.hal.runAsyncCallback39("defineClass(985, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_ServerGroupPresenter$MyView(){\n  $clinit_ServerGroupPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_runtime_group_ServerGroupPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.runtime.group', 'ServerGroupPresenter/MyView');\nfunction $clinit_ServerGroupView(){\n  $clinit_ServerGroupView = emptyMethod;\n  $clinit_MbuiViewImpl();\n}\n\nfunction ServerGroupView(mbuiContext){\n  $clinit_ServerGroupView();\n  MbuiViewImpl.call(this, mbuiContext);\n  this.$init_1167();\n}\n\nfunction create_30(mbuiContext){\n  $clinit_ServerGroupView();\n  return new Mbui_ServerGroupView(mbuiContext);\n}\n\ndefineClass(2763, 162, {1:1, 33:1, 30:1, 461:1, 59:1, 115:1, 57:1});\n_.$init_1167 = function $init_1167(){\n}\n;\n_.getVerticalNavigation = function getVerticalNavigation_7(){\n  return this.navigation;\n}\n;\n_.updateJvms = function updateJvms(interfaces){\n  $refresh_1($add_0(this.serverGroupJvmTable.api_0().clear(), interfaces), ($clinit_Api$RefreshMode() , RESET_0));\n  this.serverGroupJvmForm.clear_0();\n}\n;\n_.updateServerGroup = function updateServerGroup(serverGroup){\n  this.serverGroupConfigurationForm.view_0(serverGroup);\n}\n;\n_.updateSystemProperties = function updateSystemProperties(interfaces){\n  $refresh_1($add_0(this.serverGroupSystemPropertyTable.api_0().clear(), interfaces), ($clinit_Api$RefreshMode() , RESET_0));\n  this.serverGroupSystemPropertyForm.clear_0();\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_ServerGroupView_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'ServerGroupView', 2763, Lorg_jboss_hal_core_mbui_MbuiViewImpl_2_classLit);\nfunction $clinit_Mbui_ServerGroupView(){\n  $clinit_Mbui_ServerGroupView = emptyMethod;\n  $clinit_ServerGroupView();\n}\n\nfunction Mbui_ServerGroupView(mbuiContext){\n  $clinit_Mbui_ServerGroupView();\n  var layoutBuilder, metadata49Template, metadata50Template, metadata51Template, root, serverGroupConfigurationItemBuilder, serverGroupConfigurationItemElement, serverGroupJvmItemBuilder, serverGroupJvmItemElement, serverGroupJvmTableOptions, serverGroupSystemPropertyItemBuilder, serverGroupSystemPropertyItemElement, serverGroupSystemPropertyTableOptions;\n  ServerGroupView.call(this, mbuiContext);\n  this.$init_1168();\n  metadata50Template = of_14('/{selected.group}/jvm=*');\n  this.metadata50 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata50Template), 27);\n  metadata49Template = of_14('/{selected.group}');\n  this.metadata49 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata49Template), 27);\n  metadata51Template = of_14('/{selected.group}/system-property=*');\n  this.metadata51 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata51Template), 27);\n  this.handlebarElements = new HashMap;\n  this.serverGroupConfigurationForm = (new ModelNodeForm$Builder('server-group-configuration-form', this.metadata49)).includeRuntime_0().include_4('profile', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['socket-binding-group', 'socket-binding-port-offset', 'socket-binding-default-interface', 'management-subsystem-endpoint'])).unsorted_0().onSave_0(new Mbui_ServerGroupView$lambda$0$Type(this, metadata49Template, mbuiContext)).build_12();\n  this.serverGroupJvmForm = (new ModelNodeForm$Builder('server-group-jvm-form', this.metadata50)).onSave_0(new Mbui_ServerGroupView$lambda$1$Type(this, metadata50Template, mbuiContext)).build_12();\n  this.serverGroupSystemPropertyForm = (new ModelNodeForm$Builder('server-group-system-property-form', this.metadata51)).onSave_0(new Mbui_ServerGroupView$lambda$2$Type(this, metadata51Template, mbuiContext)).build_12();\n  serverGroupJvmTableOptions = castTo(castTo(castTo((new ModelNodeTable$Builder(this.metadata50)).button_5(mbuiContext.tableButtonFactory_0().add_30(build_17('server-group-jvm-table', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['add'])), 'Jvm', metadata50Template, new Mbui_ServerGroupView$lambda$3$Type(this))), 16).button_5(mbuiContext.tableButtonFactory_0().remove_16('Jvm', metadata50Template, new Mbui_ServerGroupView$lambda$4$Type, new Mbui_ServerGroupView$lambda$5$Type(this))), 16).column_8('name', makeLambdaFunction(Mbui_ServerGroupView$lambda$6$Type.prototype.render_1, Mbui_ServerGroupView$lambda$6$Type, [])), 16).build_7();\n  this.serverGroupJvmTable = new ModelNodeTable('server-group-jvm-table', serverGroupJvmTableOptions);\n  serverGroupSystemPropertyTableOptions = castTo(castTo(castTo((new ModelNodeTable$Builder(this.metadata51)).button_5(mbuiContext.tableButtonFactory_0().add_30(build_17('server-group-system-property-table', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['add'])), 'System Property', metadata51Template, new Mbui_ServerGroupView$lambda$7$Type(this))), 16).button_5(mbuiContext.tableButtonFactory_0().remove_16('System Property', metadata51Template, new Mbui_ServerGroupView$lambda$8$Type, new Mbui_ServerGroupView$lambda$9$Type(this))), 16).column_8('name', makeLambdaFunction(Mbui_ServerGroupView$lambda$10$Type.prototype.render_1, Mbui_ServerGroupView$lambda$10$Type, [])), 16).column_10('value').build_7();\n  this.serverGroupSystemPropertyTable = new ModelNodeTable('server-group-system-property-table', serverGroupSystemPropertyTableOptions);\n  this.registerAttachable(this.serverGroupConfigurationForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  this.registerAttachable(this.serverGroupJvmTable, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  this.registerAttachable(this.serverGroupJvmForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  this.registerAttachable(this.serverGroupSystemPropertyTable, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  this.registerAttachable(this.serverGroupSystemPropertyForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  this.navigation = new VerticalNavigation;\n  serverGroupConfigurationItemBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).div_0(), 3).innerHtml(fromSafeConstant('<h1>Server Group Configuration<\\/h1><p>{{metadata49.getDescription().getDescription()}}<\\/p>')), 3).rememberAs('html143'), 3).end(), 3).add_12(this.serverGroupConfigurationForm), 3).end(), 3);\n  serverGroupConfigurationItemElement = serverGroupConfigurationItemBuilder.build_2();\n  this.handlebarElements.put_0('html143', serverGroupConfigurationItemBuilder.referenceFor('html143'));\n  this.navigation.addPrimary_0('server-group-configuration-item', 'Configuration', 'pficon pficon-cluster', serverGroupConfigurationItemElement);\n  serverGroupJvmItemBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).div_0(), 3).innerHtml(fromSafeConstant('<h1>JVMs<\\/h1><p>{{metadata50.getDescription().getDescription()}}<\\/p>')), 3).rememberAs('html145'), 3).end(), 3).add_12(this.serverGroupJvmTable), 3).add_12(this.serverGroupJvmForm), 3).end(), 3);\n  serverGroupJvmItemElement = serverGroupJvmItemBuilder.build_2();\n  this.handlebarElements.put_0('html145', serverGroupJvmItemBuilder.referenceFor('html145'));\n  this.navigation.addPrimary_0('server-group-jvm-item', 'JVMs', 'fa fa-coffee', serverGroupJvmItemElement);\n  serverGroupSystemPropertyItemBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).div_0(), 3).innerHtml(fromSafeConstant('<h1>System Properties<\\/h1><p>{{metadata51.getDescription().getDescription()}}<\\/p>')), 3).rememberAs('html148'), 3).end(), 3).add_12(this.serverGroupSystemPropertyTable), 3).add_12(this.serverGroupSystemPropertyForm), 3).end(), 3);\n  serverGroupSystemPropertyItemElement = serverGroupSystemPropertyItemBuilder.build_2();\n  this.handlebarElements.put_0('html148', serverGroupSystemPropertyItemBuilder.referenceFor('html148'));\n  this.navigation.addPrimary_0('server-group-system-property-item', 'System Properties', 'fa fa-list-ul', serverGroupSystemPropertyItemElement);\n  layoutBuilder = castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().addAll_0(this.navigation.panes_0()), 9).end(), 9).end(), 9);\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\nfunction lambda$10_16(cell_0, type_1, row_2, meta_3){\n  $clinit_Mbui_ServerGroupView();\n  return row_2.getName();\n}\n\nfunction lambda$4_51(api_0){\n  $clinit_Mbui_ServerGroupView();\n  return castTo($selectedRow(api_0), 22).getName();\n}\n\nfunction lambda$6_30(cell_0, type_1, row_2, meta_3){\n  $clinit_Mbui_ServerGroupView();\n  return row_2.getName();\n}\n\nfunction lambda$8_19(api_0){\n  $clinit_Mbui_ServerGroupView();\n  return castTo($selectedRow(api_0), 22).getName();\n}\n\ndefineClass(2962, 2763, {1:1, 33:1, 30:1, 461:1, 59:1, 115:1, 57:1}, Mbui_ServerGroupView);\n_.$init_1168 = function $init_1168(){\n}\n;\n_.lambda$0_93 = function lambda$0_172(metadata49Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_ServerGroupView();\n  this.saveSingletonForm(changedValues_3, metadata49Template_1.resolve_3(mbuiContext_2.statementContext_4(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [])), 'Server Group Configuration');\n}\n;\n_.lambda$1_63 = function lambda$1_104(metadata50Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_ServerGroupView();\n  var name_0;\n  {\n    name_0 = castTo(form_2.getModel(), 22).getName();\n    this.saveForm(changedValues_3, metadata50Template_1.resolve_3(mbuiContext_2.statementContext_4(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [name_0])), 'Jvm', name_0);\n  }\n}\n;\n_.lambda$2_50 = function lambda$2_84(metadata51Template_1, mbuiContext_2, form_2, changedValues_3){\n  $clinit_Mbui_ServerGroupView();\n  var name_0;\n  {\n    name_0 = castTo(form_2.getModel(), 22).getName();\n    this.saveForm(changedValues_3, metadata51Template_1.resolve_3(mbuiContext_2.statementContext_4(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [name_0])), 'System Property', name_0);\n  }\n}\n;\n_.lambda$3_33 = function lambda$3_61(){\n  $clinit_Mbui_ServerGroupView();\n  castTo(this.presenter, 306).reload_0();\n}\n;\n_.lambda$5_26 = function lambda$5_38(){\n  $clinit_Mbui_ServerGroupView();\n  castTo(this.presenter, 306).reload_0();\n}\n;\n_.lambda$7_11 = function lambda$7_24(){\n  $clinit_Mbui_ServerGroupView();\n  castTo(this.presenter, 306).reload_0();\n}\n;\n_.lambda$9_12 = function lambda$9_18(){\n  $clinit_Mbui_ServerGroupView();\n  castTo(this.presenter, 306).reload_0();\n}\n;\n_.attach = function attach_25(){\n  getClassPrototype(73).attach.call(this);\n  $bindForm(this.serverGroupJvmTable.api_0(), this.serverGroupJvmForm);\n  $bindForm(this.serverGroupSystemPropertyTable.api_0(), this.serverGroupSystemPropertyForm);\n  replaceHandlebar(castToJso(this.handlebarElements.get_2('html143')), '{{metadata49.getDescription().getDescription()}}', valueOf_29(this.metadata49.getDescription_0().getDescription()));\n  replaceHandlebar(castToJso(this.handlebarElements.get_2('html145')), '{{metadata50.getDescription().getDescription()}}', valueOf_29(this.metadata50.getDescription_0().getDescription()));\n  replaceHandlebar(castToJso(this.handlebarElements.get_2('html148')), '{{metadata51.getDescription().getDescription()}}', valueOf_29(this.metadata51.getDescription_0().getDescription()));\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView', 2962, Lorg_jboss_hal_client_runtime_group_ServerGroupView_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$0$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$0$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$0$Type($$outer_0, metadata49Template_1, mbuiContext_2){\n  $clinit_Mbui_ServerGroupView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata49Template_1 = metadata49Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(2963, 1, {1:1}, Mbui_ServerGroupView$lambda$0$Type);\n_.onSave = function onSave_63(arg0, arg1){\n  this.$$outer_0.lambda$0_93(this.metadata49Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$0$Type', 2963, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$1$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$1$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$1$Type($$outer_0, metadata50Template_1, mbuiContext_2){\n  $clinit_Mbui_ServerGroupView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata50Template_1 = metadata50Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(2964, 1, {1:1}, Mbui_ServerGroupView$lambda$1$Type);\n_.onSave = function onSave_64(arg0, arg1){\n  this.$$outer_0.lambda$1_63(this.metadata50Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$1$Type', 2964, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$10$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$10$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$10$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$10$Type();\n}\n\ndefineClass(4215, $wnd.Function, {1:1}, Mbui_ServerGroupView$lambda$10$Type);\n_.render_1 = function render_61(arg0, arg1, arg2, arg3){\n  return lambda$10_16(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_Mbui_ServerGroupView$lambda$2$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$2$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$2$Type($$outer_0, metadata51Template_1, mbuiContext_2){\n  $clinit_Mbui_ServerGroupView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n  this.metadata51Template_1 = metadata51Template_1;\n  this.mbuiContext_2 = mbuiContext_2;\n}\n\ndefineClass(2965, 1, {1:1}, Mbui_ServerGroupView$lambda$2$Type);\n_.onSave = function onSave_65(arg0, arg1){\n  this.$$outer_0.lambda$2_50(this.metadata51Template_1, this.mbuiContext_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$2$Type', 2965, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$3$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$3$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$3$Type($$outer_0){\n  $clinit_Mbui_ServerGroupView$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2966, 1, {1:1}, Mbui_ServerGroupView$lambda$3$Type);\n_.execute_0 = function execute_177(){\n  this.$$outer_0.lambda$3_33();\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$3$Type', 2966, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$4$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$4$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$4$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$4$Type();\n}\n\ndefineClass(2967, 1, {1:1}, Mbui_ServerGroupView$lambda$4$Type);\n_.apply_2 = function apply_138(arg0){\n  return lambda$4_51(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$4$Type', 2967, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$5$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$5$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$5$Type($$outer_0){\n  $clinit_Mbui_ServerGroupView$lambda$5$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2968, 1, {1:1}, Mbui_ServerGroupView$lambda$5$Type);\n_.execute_0 = function execute_178(){\n  this.$$outer_0.lambda$5_26();\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$5$Type', 2968, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$6$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$6$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$6$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$6$Type();\n}\n\ndefineClass(4214, $wnd.Function, {1:1}, Mbui_ServerGroupView$lambda$6$Type);\n_.render_1 = function render_62(arg0, arg1, arg2, arg3){\n  return lambda$6_30(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_Mbui_ServerGroupView$lambda$7$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$7$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$7$Type($$outer_0){\n  $clinit_Mbui_ServerGroupView$lambda$7$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2969, 1, {1:1}, Mbui_ServerGroupView$lambda$7$Type);\n_.execute_0 = function execute_179(){\n  this.$$outer_0.lambda$7_11();\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$7$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$7$Type', 2969, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$8$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$8$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$8$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$8$Type();\n}\n\ndefineClass(2970, 1, {1:1}, Mbui_ServerGroupView$lambda$8$Type);\n_.apply_2 = function apply_139(arg0){\n  return lambda$8_19(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$8$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$8$Type', 2970, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView$lambda$9$Type(){\n  $clinit_Mbui_ServerGroupView$lambda$9$Type = emptyMethod;\n}\n\nfunction Mbui_ServerGroupView$lambda$9$Type($$outer_0){\n  $clinit_Mbui_ServerGroupView$lambda$9$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2971, 1, {1:1}, Mbui_ServerGroupView$lambda$9$Type);\n_.execute_0 = function execute_180(){\n  this.$$outer_0.lambda$9_12();\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView$lambda$9$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView/lambda$9$Type', 2971, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_ServerGroupView_Provider(){\n  $clinit_Mbui_ServerGroupView_Provider = emptyMethod;\n  $clinit_Object();\n}\n\nfunction Mbui_ServerGroupView_Provider(mbuiContext){\n  $clinit_Mbui_ServerGroupView_Provider();\n  Object_0.call(this);\n  this.$init_1169();\n  this.mbuiContext = mbuiContext;\n}\n\ndefineClass(2762, 1, {1:1, 64:1}, Mbui_ServerGroupView_Provider);\n_.$init_1169 = function $init_1169(){\n}\n;\n_.get_8 = function get_197(){\n  return this.get_46();\n}\n;\n_.get_46 = function get_198(){\n  return create_30(this.mbuiContext);\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_Mbui_1ServerGroupView_1Provider_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'Mbui_ServerGroupView_Provider', 2762, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupPresenter(){\n  $clinit_ServerGroupPresenter = emptyMethod;\n  $clinit_MbuiPresenter();\n  JVM_ADDRESS = '/{selected.group}' + '/jvm=*';\n  SYSTEM_PROPERTY_ADDRESS = '/{selected.group}' + '/system-property=*';\n}\n\nfunction ServerGroupPresenter(eventBus, view, proxy, finder, finderPathFactory, statementContext, dispatcher){\n  $clinit_ServerGroupPresenter();\n  MbuiPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_1173();\n  this.finderPathFactory = finderPathFactory;\n  this.statementContext = statementContext;\n  this.dispatcher = dispatcher;\n}\n\ndefineClass(306, 106, {58:1, 49:1, 1:1, 33:1, 30:1, 306:1, 106:1, 47:1, 101:1}, ServerGroupPresenter);\n_.$init_1173 = function $init_1173(){\n}\n;\n_.lambda$0_94 = function lambda$0_175(result_0){\n  $clinit_ServerGroupPresenter();\n  {\n    castTo(this.getView(), 461).updateServerGroup(new ServerGroup(this.statementContext.selectedServerGroup(), result_0.step(0).get_17('result')));\n    castTo(this.getView(), 461).updateJvms(asNamedNodes(result_0.step(1).get_17('result').asPropertyList()));\n    castTo(this.getView(), 461).updateSystemProperties(asNamedNodes(result_0.step(2).get_17('result').asPropertyList()));\n  }\n}\n;\n_.finderPath = function finderPath_17(){\n  return this.finderPathFactory.runtimeServerGroupPath();\n}\n;\n_.onBind = function onBind_21(){\n  getClassPrototype(89).onBind.call(this);\n  castTo(this.getView(), 461).setPresenter(this);\n}\n;\n_.reload_0 = function reload_10(){\n  var jvmsOp, serverGroupAddress, serverGroupOp, systemPropertiesOp;\n  serverGroupAddress = of_14('/{selected.group}').resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  serverGroupOp = (new Operation$Builder('read-resource', serverGroupAddress)).param_2('include-runtime', true).build_13();\n  jvmsOp = (new Operation$Builder('read-children-resources', serverGroupAddress)).param_0('child-type', 'jvm').param_2('include-runtime', true).build_13();\n  systemPropertiesOp = (new Operation$Builder('read-children-resources', serverGroupAddress)).param_0('child-type', 'system-property').param_2('include-runtime', true).build_13();\n  this.dispatcher.execute_10(new Composite_0(serverGroupOp, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_dmr_model_Operation_2_classLit, 1), {4:1, 1:1, 5:1, 149:1}, 96, 0, [jvmsOp, systemPropertiesOp])), new ServerGroupPresenter$lambda$0$Type(this));\n}\n;\nvar JVM_ADDRESS, SYSTEM_PROPERTY_ADDRESS;\nvar Lorg_jboss_hal_client_runtime_group_ServerGroupPresenter_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'ServerGroupPresenter', 306, Lorg_jboss_hal_core_mbui_MbuiPresenter_2_classLit);\nfunction $clinit_ServerGroupPresenter$lambda$0$Type(){\n  $clinit_ServerGroupPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction ServerGroupPresenter$lambda$0$Type($$outer_0){\n  $clinit_ServerGroupPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1237, 1, {1:1, 76:1}, ServerGroupPresenter$lambda$0$Type);\n_.onSuccess_0 = function onSuccess_203(arg0){\n  this.$$outer_0.lambda$0_94(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_group_ServerGroupPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.group', 'ServerGroupPresenter/lambda$0$Type', 1237, Ljava_lang_Object_2_classLit);\ndefineClass(1100, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider_org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider_methodInjection(this.injector.getFragment_org_jboss_hal_core_mbui().get_Key$type$org$jboss$hal$core$mbui$MbuiContext$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider$_annotation$$none$$(result);\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$MyView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$MyView$_annotation$$none$$)) {\n    result = this.get_Key$type$org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider$_annotation$$none$$().get_46();\n    this.singleton_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$MyView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$MyView$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$runtime$group$ServerGroupPresenter_org$jboss$hal$client$runtime$group$ServerGroupPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider$_annotation$$none$$(injectee){\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider_org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider_methodInjection = function org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider_org$jboss$hal$client$runtime$group$Mbui_ServerGroupView_Provider_methodInjection(_0){\n  return new Mbui_ServerGroupView_Provider(_0);\n}\n;\n_.org$jboss$hal$client$runtime$group$ServerGroupPresenter_org$jboss$hal$client$runtime$group$ServerGroupPresenter_methodInjection = function org$jboss$hal$client$runtime$group$ServerGroupPresenter_org$jboss$hal$client$runtime$group$ServerGroupPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6){\n  return new ServerGroupPresenter(_0, _1, _2, _3, _4, _5, _6);\n}\n;\ndefineClass(1102, 1, {60:1, 1:1});\n_.onSuccess_1 = function onSuccess_204(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$runtime$group$ServerGroupPresenter$_annotation$$none$$());\n}\n;\n$entry(onLoad)(39);\n\n//# sourceURL=hal-39.js\n")
