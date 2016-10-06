$wnd.hal.runAsyncCallback46("defineClass(985, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________________________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________________________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_JndiParser(){\n  $clinit_JndiParser = emptyMethod;\n  $clinit_Object();\n}\n\nfunction JndiParser(){\n  $clinit_JndiParser();\n  Object_0.call(this);\n  this.$init_1245();\n}\n\nfunction lambda$0_197(child_0){\n  $clinit_JndiParser();\n  return child_0.getValue_3().isDefined();\n}\n\ndefineClass(3167, 1, {1:1}, JndiParser);\n_.$init_1245 = function $init_1245(){\n}\n;\n_.lambda$1_70 = function lambda$1_120(parent_1, nodes_2, child_2){\n  $clinit_JndiParser();\n  var jndiContext, modelNode, node;\n  {\n    modelNode = child_2.getValue_3();\n    jndiContext = this.jndiContext(parent_1, child_2.getName(), modelNode);\n    if (modelNode.hasDefined('value')) {\n      this.pushEntry_0(nodes_2, parent_1, child_2.getName(), jndiContext);\n    }\n     else {\n      node = this.pushFolder_0(nodes_2, parent_1, child_2.getName(), jndiContext);\n      if (modelNode.hasDefined('children')) {\n        this.readChildren(nodes_2, node, modelNode.get_17('children').asPropertyList());\n      }\n       else if (jsEquals(child_2.getValue_3().getType_2(), ($clinit_ModelType() , OBJECT_0))) {\n        this.readChildren(nodes_2, node, child_2.getValue_3().asPropertyList());\n      }\n    }\n  }\n}\n;\n_.jndiContext = function jndiContext_0(parent_0, name_0, modelNode){\n  var jndiContext;\n  jndiContext = new $wnd.Object;\n  if (equals_Ljava_lang_Object__Z__devirtual$_0(parent_0.id, ($clinit_Ids() , JNDI_TREE_APPLICATIONS_ROOT))) {\n    jndiContext.uri = '';\n  }\n   else if (equals_Ljava_lang_Object__Z__devirtual$_0(parent_0.id, ($clinit_Ids() , JNDI_TREE_JAVA_CONTEXTS_ROOT))) {\n    jndiContext.uri = name_0;\n  }\n   else {\n    jndiContext.uri = length__I__devirtual$_0(castToJsObject(parent_0.data).uri) == 0?name_0:castToJsObject(parent_0.data).uri + '/' + name_0;\n  }\n  if (modelNode.hasDefined('class-name')) {\n    jndiContext.className = modelNode.get_17('class-name').asString();\n  }\n  if (modelNode.hasDefined('value')) {\n    jndiContext.value = modelNode.get_17('value').asString();\n  }\n  jndiContext.hasDetails = !isNullOrEmpty(jndiContext.uri) || jsNotEquals(jndiContext.className, null) || jsNotEquals(jndiContext.value, null);\n  return jndiContext;\n}\n;\n_.parse_6 = function parse_8(nodes, root, children){\n  $push_0(nodes, root);\n  this.readChildren(nodes, root, children);\n}\n;\n_.pushEntry_0 = function pushEntry_0(nodes, parent_0, name_0, jndiContext){\n  var node;\n  node = (new Node$Builder(build_17(parent_0.id, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [uniqueId_1()])), name_0, jndiContext)).parent_2(parent_0.id).icon_1(fontAwesome('file-text-o')).build_9();\n  $push_0(nodes, node);\n  return node;\n}\n;\n_.pushFolder_0 = function pushFolder_0(nodes, parent_0, name_0, jndiContext){\n  var node;\n  node = (new Node$Builder(build_17(parent_0.id, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [uniqueId_1()])), name_0, jndiContext)).parent_2(parent_0.id).folder().build_9();\n  $push_0(nodes, node);\n  return node;\n}\n;\n_.readChildren = function readChildren(nodes, parent_0, children){\n  children.stream().filter_0(new JndiParser$lambda$0$Type).forEach(new JndiParser$lambda$1$Type(this, parent_0, nodes));\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiParser_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiParser', 3167, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiParser$lambda$0$Type(){\n  $clinit_JndiParser$lambda$0$Type = emptyMethod;\n}\n\nfunction JndiParser$lambda$0$Type(){\n  $clinit_JndiParser$lambda$0$Type();\n}\n\ndefineClass(3168, 1, {1:1, 23:1}, JndiParser$lambda$0$Type);\n_.and = function and_62(other){\n  return $and(this, other);\n}\n;\n_.negate_1 = function negate_69(){\n  return $negate(this);\n}\n;\n_.or_0 = function or_67(other){\n  return $or(this, other);\n}\n;\n_.test_0 = function test_61(arg0){\n  return lambda$0_197(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiParser$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiParser/lambda$0$Type', 3168, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiParser$lambda$1$Type(){\n  $clinit_JndiParser$lambda$1$Type = emptyMethod;\n}\n\nfunction JndiParser$lambda$1$Type($$outer_0, parent_1, nodes_2){\n  $clinit_JndiParser$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n  this.parent_1 = parent_1;\n  this.nodes_2 = nodes_2;\n}\n\ndefineClass(3169, 1, {1:1, 25:1}, JndiParser$lambda$1$Type);\n_.accept = function accept_78(arg0){\n  this.$$outer_0.lambda$1_70(this.parent_1, this.nodes_2, arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiParser$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiParser/lambda$1$Type', 3169, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiPresenter(){\n  $clinit_JndiPresenter = emptyMethod;\n  $clinit_ApplicationPresenter();\n  ROOT_TEMPLATE_3 = of_14('/{selected.host}/{selected.server}/subsystem=naming');\n}\n\nfunction JndiPresenter(eventBus, view, myProxy, finder, finderPathFactory, dispatcher, statementContext, resources){\n  $clinit_JndiPresenter();\n  ApplicationPresenter.call(this, eventBus, view, myProxy, finder);\n  this.$init_1246();\n  this.finderPathFactory = finderPathFactory;\n  this.dispatcher = dispatcher;\n  this.statementContext = statementContext;\n  this.resources = resources;\n}\n\ndefineClass(499, 47, {58:1, 49:1, 1:1, 33:1, 30:1, 499:1, 47:1, 101:1}, JndiPresenter);\n_.$init_1246 = function $init_1246(){\n}\n;\n_.lambda$0_106 = function lambda$0_198(result_0){\n  $clinit_JndiPresenter();\n  castTo(this.getView(), 3185).update_4(result_0);\n}\n;\n_.finderPath = function finderPath_22(){\n  return this.finderPathFactory.runtimeServerPath().append_17('server-monitor', asId('JNDI'), this.resources.constants_0().monitor(), 'JNDI');\n}\n;\n_.load_4 = function load_4(){\n  var address, operation;\n  address = ROOT_TEMPLATE_3.resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  operation = (new Operation$Builder('jndi-view', address)).build_13();\n  this.dispatcher.execute_12(operation, new JndiPresenter$lambda$0$Type(this));\n}\n;\n_.onBind = function onBind_25(){\n  getClassPrototype(89).onBind.call(this);\n  castTo(this.getView(), 3185).setPresenter(this);\n}\n;\n_.onReset = function onReset_15(){\n  getClassPrototype(47).onReset.call(this);\n  this.load_4();\n}\n;\nvar ROOT_TEMPLATE_3;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiPresenter_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiPresenter', 499, Lorg_jboss_hal_core_mvp_ApplicationPresenter_2_classLit);\nfunction $clinit_JndiPresenter$MyView(){\n  $clinit_JndiPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiPresenter/MyView');\nfunction $clinit_JndiPresenter$lambda$0$Type(){\n  $clinit_JndiPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction JndiPresenter$lambda$0$Type($$outer_0){\n  $clinit_JndiPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1244, 1, {1:1, 24:1}, JndiPresenter$lambda$0$Type);\n_.onSuccess_0 = function onSuccess_236(arg0){\n  this.$$outer_0.lambda$0_106(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiPresenter/lambda$0$Type', 1244, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiResources(){\n  $clinit_JndiResources = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiResources_2_classLit = createForInterface('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiResources');\nfunction $clinit_JndiResources_en_InlineClientBundleGenerator(){\n  $clinit_JndiResources_en_InlineClientBundleGenerator = emptyMethod;\n  $clinit_Object();\n  _instance0_3 = new JndiResources_en_InlineClientBundleGenerator;\n}\n\nfunction JndiResources_en_InlineClientBundleGenerator(){\n  $clinit_JndiResources_en_InlineClientBundleGenerator();\n  Object_0.call(this);\n  this.$init_1249();\n}\n\ndefineClass(730, 1, {1:1, 4010:1}, JndiResources_en_InlineClientBundleGenerator);\n_.$init_1249 = function $init_1249(){\n}\n;\n_.jndi = function jndi_1(){\n  return get_228();\n}\n;\n_.jndiInitializer = function jndiInitializer(){\n  $clinit_JndiResources_en_InlineClientBundleGenerator();\n  jndi_0 = new JndiResources_en_InlineClientBundleGenerator$1(this);\n}\n;\nvar _instance0_3, jndi_0;\nfunction $clinit_JndiResources_en_InlineClientBundleGenerator$1(){\n  $clinit_JndiResources_en_InlineClientBundleGenerator$1 = emptyMethod;\n  $clinit_Object();\n}\n\nfunction JndiResources_en_InlineClientBundleGenerator$1(this$0){\n  $clinit_JndiResources_en_InlineClientBundleGenerator$1();\n  this.this$01 = this$0;\n  Object_0.call(this);\n  this.$init_1250();\n}\n\ndefineClass(3012, 1, {132:1, 221:1, 1:1}, JndiResources_en_InlineClientBundleGenerator$1);\n_.$init_1250 = function $init_1250(){\n}\n;\n_.getName = function getName_34(){\n  return 'jndi';\n}\n;\n_.getText = function getText_18(){\n  return 'bwAAAAMAB2NvbW1lbnRzAHFUaGlzIGZpbGUgaXMgbm90IHVzZWQhIEl0J3MganVzdCBoZXJlIHRvIGdlbmVyYXRlIHRoZSBiYXNlNjQgZW5jb2RlZCB2ZXJzaW9uIHVzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9oYWwvZG1yLmNtZAALZGVzY3JpcHRpb25zABpBbiBlbnRyeSBpbiB0aGUgSk5ESSB0cmVlLgAKYXR0cmlidXRlc28AAAADAAN1cmlvAAAAAwAEdHlwZXRzAAtkZXNjcmlwdGlvbnMAFlRoZSBmdWxsIHF1YWxpZmllZCBVUkkACG5pbGxhYmxlWgEACmNsYXNzLW5hbWVvAAAAAwAEdHlwZXRzAAtkZXNjcmlwdGlvbnMAKVRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzZWxlY3RlZCBKTkRJIGVudHJ5AAhuaWxsYWJsZVoBAAV2YWx1ZW8AAAADAAR0eXBldHMAC2Rlc2NyaXB0aW9ucwAkVGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBKTkRJIGVudHJ5AAhuaWxsYWJsZVoB\\n';\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiResources_1en_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiResources_en_InlineClientBundleGenerator/1', 3012, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiResources_en_InlineClientBundleGenerator$jndiInitializer(){\n  $clinit_JndiResources_en_InlineClientBundleGenerator$jndiInitializer = emptyMethod;\n  $clinit_Object();\n  {\n    ($clinit_JndiResources_en_InlineClientBundleGenerator() , _instance0_3).jndiInitializer();\n  }\n}\n\nfunction get_228(){\n  $clinit_JndiResources_en_InlineClientBundleGenerator$jndiInitializer();\n  return $clinit_JndiResources_en_InlineClientBundleGenerator() , jndi_0;\n}\n\nfunction $clinit_JndiView(){\n  $clinit_JndiView = emptyMethod;\n  $clinit_PatternFlyViewImpl();\n}\n\nfunction JndiView(jndiResources, resources){\n  $clinit_JndiView();\n  var builder, metadata;\n  PatternFlyViewImpl.call(this);\n  this.$init_1251();\n  this.search_0 = (new Search$Builder(($clinit_Ids() , JNDI_SEARCH), new JndiView$lambda$0$Type(this))).onClear_0(new JndiView$lambda$1$Type(this)).build_4();\n  metadata = staticDescription(jndiResources.jndi());\n  this.details = (new ModelNodeForm$Builder(($clinit_Ids() , JNDI_DETAILS), metadata)).include_4('uri', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['class-name', 'value'])).viewOnly_0().unsorted_0().build_12();\n  this.registerAttachable(this.details, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 12, 0, []));\n  builder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new LayoutBuilder).row_0().column_5(4).h_1(1), 9).rememberAs('header'), 9).textContent_0(resources.constants_0().jndiTree()), 9).end(), 9).div_0(), 9).css_0('flex-row'), 9).div_0(), 9).css_1('btn-group', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['margin-right-small'])), 9).button_2(), 9).css_1('btn', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['btn-default'])), 9).on_0(($clinit_EventType() , click_0), new JndiView$lambda$2$Type(this)), 9).add_11('i'), 9).css_0(fontAwesome('refresh')), 9).end(), 9).button_2(), 9).css_1('btn', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['btn-default'])), 9).on_0(($clinit_EventType() , click_0), new JndiView$lambda$3$Type(this)), 9).add_11('i'), 9).css_0(fontAwesome('minus')), 9).end(), 9).end(), 9).add_12(this.search_0), 9).end(), 9).div_0(), 9).rememberAs('treeContainer'), 9).css_0('tree-container'), 9).end(), 9).end(), 9).column_5(8).h_1(1), 9).textContent_0(resources.constants_0().details_0()), 9).end(), 9).p(), 9).rememberAs('hint'), 9).textContent_0(resources.constants_0().noDetails()), 9).end(), 9).add_12(this.details), 9).end(), 9).end(), 9);\n  this.header = builder.referenceFor('header');\n  this.treeContainer = builder.referenceFor('treeContainer');\n  this.hint = builder.referenceFor('hint');\n  this.initElements(builder.elements_1());\n}\n\ndefineClass(1620, 73, {1:1, 33:1, 30:1, 3185:1, 59:1, 57:1}, JndiView);\n_.$init_1251 = function $init_1251(){\n}\n;\n_.lambda$0_107 = function lambda$0_199(query_0){\n  $clinit_JndiView();\n  {\n    if (jsNotEquals(this.tree.api_2(), null)) {\n      this.tree.api_2().search(query_0);\n    }\n  }\n}\n;\n_.lambda$1_71 = function lambda$1_121(){\n  $clinit_JndiView();\n  {\n    if (jsNotEquals(this.tree.api_2(), null)) {\n      this.tree.api_2().clear_search();\n    }\n  }\n}\n;\n_.lambda$2_55 = function lambda$2_97(event_0){\n  $clinit_JndiView();\n  this.presenter.load_4();\n}\n;\n_.lambda$3_41 = function lambda$3_74(event_0){\n  $clinit_JndiView();\n  this.collapse_2($getSelected(this.tree.api_2()));\n}\n;\n_.lambda$4_35 = function lambda$4_62(event_0){\n  $clinit_JndiView();\n  this.adjustHeight_0();\n}\n;\n_.lambda$5_32 = function lambda$5_47(event_0, selectionContext_1){\n  $clinit_JndiView();\n  var hasSelection, jndiContext, modelNode, validSelection;\n  {\n    if (!equals_Ljava_lang_Object__Z__devirtual$_0('ready', selectionContext_1.action)) {\n      hasSelection = !$isEmpty(selectionContext_1.selected);\n      validSelection = hasSelection && castToJsObject(selectionContext_1.node.data).hasDetails;\n      setVisible(this.hint, !validSelection);\n      setVisible(this.details.asElement_0(), validSelection);\n      if (validSelection) {\n        jndiContext = castToJsObject(selectionContext_1.node.data);\n        modelNode = new ModelNode;\n        if (jsNotEquals(jndiContext.uri, null)) {\n          modelNode.get_17('uri').set_9(jndiContext.uri);\n        }\n        if (jsNotEquals(jndiContext.className, null)) {\n          modelNode.get_17('class-name').set_9(jndiContext.className);\n        }\n        if (jsNotEquals(jndiContext.value, null)) {\n          modelNode.get_17('value').set_9(jndiContext.value);\n        }\n        this.details.view_0(modelNode);\n      }\n    }\n  }\n}\n;\n_.setPresenter = function setPresenter_23(presenter){\n  this.setPresenter_12(castTo(presenter, 499));\n}\n;\n_.adjustHeight_0 = function adjustHeight_0(){\n  var headerHeight, height, searchHeight;\n  height = applicationHeight();\n  headerHeight = $getOffsetHeight_0(this.header);\n  searchHeight = $getOffsetHeight_0(this.search_0.asElement_0());\n  $setHeight_0($getStyle_0(this.treeContainer), height - 2 * 20 - headerHeight - searchHeight - 2 * 10, 'px');\n}\n;\n_.attach = function attach_28(){\n  getClassPrototype(73).attach.call(this);\n  $setOnresize(getWindow(), new JndiView$lambda$4$Type(this));\n  this.adjustHeight_0();\n}\n;\n_.collapse_2 = function collapse_0(node){\n  if (jsNotEquals(node, null)) {\n    this.tree.select_5(node.id, true);\n  }\n}\n;\n_.setPresenter_12 = function setPresenter_24(presenter){\n  this.presenter = presenter;\n}\n;\n_.update_4 = function update_37(jndi){\n  var jndiContext, jndiParser, nodes, root;\n  jndiParser = new JndiParser;\n  nodes = create_14();\n  if (jndi.hasDefined('java: contexts')) {\n    jndiContext = new $wnd.Object;\n    root = (new Node$Builder(($clinit_Ids() , JNDI_TREE_JAVA_CONTEXTS_ROOT), 'Java Contexts', jndiContext)).root_2().folder().open_1().build_9();\n    jndiParser.parse_6(nodes, root, jndi.get_17('java: contexts').asPropertyList());\n  }\n  if (jndi.hasDefined('applications')) {\n    jndiContext = new $wnd.Object;\n    root = (new Node$Builder(($clinit_Ids() , JNDI_TREE_APPLICATIONS_ROOT), 'Applications', jndiContext)).root_2().folder().open_1().build_9();\n    jndiParser.parse_6(nodes, root, jndi.get_17('applications').asPropertyList());\n  }\n  this.tree = new Tree(($clinit_Ids() , JNDI_TREE), nodes);\n  removeChildrenFrom(this.treeContainer);\n  $appendChild_0(this.treeContainer, this.tree.asElement_0());\n  this.tree.attach();\n  this.tree.onSelectionChange(makeLambdaFunction(JndiView$lambda$5$Type.prototype.onSelectionChanged_0, JndiView$lambda$5$Type, [this]));\n  setVisible(this.hint, true);\n  setVisible(this.details.asElement_0(), false);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiView_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiView', 1620, Lorg_jboss_hal_core_mvp_PatternFlyViewImpl_2_classLit);\nfunction $clinit_JndiView$lambda$0$Type(){\n  $clinit_JndiView$lambda$0$Type = emptyMethod;\n}\n\nfunction JndiView$lambda$0$Type($$outer_0){\n  $clinit_JndiView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1621, 1, {1:1}, JndiView$lambda$0$Type);\n_.search_1 = function search_5(arg0){\n  this.$$outer_0.lambda$0_107(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiView/lambda$0$Type', 1621, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiView$lambda$1$Type(){\n  $clinit_JndiView$lambda$1$Type = emptyMethod;\n}\n\nfunction JndiView$lambda$1$Type($$outer_0){\n  $clinit_JndiView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1622, 1, {1:1}, JndiView$lambda$1$Type);\n_.clear_0 = function clear_46(){\n  this.$$outer_0.lambda$1_71();\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiView/lambda$1$Type', 1622, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiView$lambda$2$Type(){\n  $clinit_JndiView$lambda$2$Type = emptyMethod;\n}\n\nfunction JndiView$lambda$2$Type($$outer_0){\n  $clinit_JndiView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1623, 1, {1:1}, JndiView$lambda$2$Type);\n_.handleEvent_0 = function handleEvent_96(arg0){\n  this.$$outer_0.lambda$2_55(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiView/lambda$2$Type', 1623, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiView$lambda$3$Type(){\n  $clinit_JndiView$lambda$3$Type = emptyMethod;\n}\n\nfunction JndiView$lambda$3$Type($$outer_0){\n  $clinit_JndiView$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1624, 1, {1:1}, JndiView$lambda$3$Type);\n_.handleEvent_0 = function handleEvent_97(arg0){\n  this.$$outer_0.lambda$3_41(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiView$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiView/lambda$3$Type', 1624, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiView$lambda$4$Type(){\n  $clinit_JndiView$lambda$4$Type = emptyMethod;\n}\n\nfunction JndiView$lambda$4$Type($$outer_0){\n  $clinit_JndiView$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1625, 1, {1:1}, JndiView$lambda$4$Type);\n_.handleEvent_0 = function handleEvent_98(arg0){\n  this.$$outer_0.lambda$4_35(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jndi_JndiView$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jndi', 'JndiView/lambda$4$Type', 1625, Ljava_lang_Object_2_classLit);\nfunction $clinit_JndiView$lambda$5$Type(){\n  $clinit_JndiView$lambda$5$Type = emptyMethod;\n}\n\nfunction JndiView$lambda$5$Type($$outer_0){\n  $clinit_JndiView$lambda$5$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4111, $wnd.Function, {1:1}, JndiView$lambda$5$Type);\n_.onSelectionChanged_0 = function onSelectionChanged_2(arg0, arg1){\n  this.$$outer_0.lambda$5_32(arg0, arg1);\n}\n;\ndefineClass(1122, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter_org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiResources$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiResources$_annotation$$none$$(){\n  var created, result;\n  created = new JndiResources_en_InlineClientBundleGenerator;\n  result = castTo(created, 4010);\n  this.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiResources$_annotation$$none$$(result);\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$runtime$subsystem$jndi$JndiView_org$jboss$hal$client$runtime$subsystem$jndi$JndiView_methodInjection(this.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiResources$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________________________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiResources$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiResources$_annotation$$none$$(injectee){\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter_org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter_methodInjection = function org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter_org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7){\n  return new JndiPresenter(_0, _1, _2, _3, _4, _5, _6, _7);\n}\n;\n_.org$jboss$hal$client$runtime$subsystem$jndi$JndiView_org$jboss$hal$client$runtime$subsystem$jndi$JndiView_methodInjection = function org$jboss$hal$client$runtime$subsystem$jndi$JndiView_org$jboss$hal$client$runtime$subsystem$jndi$JndiView_methodInjection(_0, _1){\n  return new JndiView(_0, _1);\n}\n;\ndefineClass(1124, 1, {60:1, 1:1});\n_.onSuccess_1 = function onSuccess_237(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$runtime$subsystem$jndi$JndiPresenter$_annotation$$none$$());\n}\n;\ndefineClass(116, 1, {1:1, 125:1});\n_.jndiTree = function jndiTree(){\n  return 'JNDI Tree';\n}\n;\n$entry(onLoad)(46);\n\n//# sourceURL=hal-46.js\n")
