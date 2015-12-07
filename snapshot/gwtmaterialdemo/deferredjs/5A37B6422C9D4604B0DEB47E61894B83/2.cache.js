$wnd.gwtmaterialdemo.runAsyncCallback2("function $setOpacity(this$static, opacity){\n  $cssSetOpacity(($clinit_DOM() , this$static.element).style, opacity);\n}\n\nfunction animate(source, target){\n  $wnd.cta(source, target);\n}\n\nfunction animate_0(source, target, callback){\n  $wnd.cta(source, target, function(){\n    callback != null && callback.run();\n  }\n  );\n}\n\nfunction PathAnimatorPresenter(eventBus, view, proxy){\n  $clinit_PathAnimatorPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(553, 54, $intern_41, PathAnimatorPresenter);\n_.onReveal = function onReveal_3(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Path Animator', 'Custom component that provides meaningfull transition between two elements to show visual continuity.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorPresenter', 553);\nfunction $onClose(this$static){\n  ($clinit_DOM() , this$static.panelTarget.element).style['visibility'] = ($clinit_Style$Visibility() , 'hidden');\n  $setOpacity(this$static.panelTarget, 0);\n  animate(this$static.panelTarget.element, this$static.btnSource.element);\n}\n\nfunction $onSource(this$static){\n  var callback;\n  callback = new PathAnimatorView$1(this$static);\n  animate_0(($clinit_DOM() , this$static.btnSource.element), this$static.panelTarget.element, callback);\n}\n\nfunction PathAnimatorView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_1(new PathAnimatorView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(693, 58, $intern_42, PathAnimatorView);\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorView', 693);\nfunction PathAnimatorView$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(694, 1, $intern_40, PathAnimatorView$1);\n_.run = function run_2(){\n  ($clinit_DOM() , this.this$01.panelTarget.element).style['visibility'] = ($clinit_Style$Visibility() , 'visible');\n  $setOpacity(this.this$01.panelTarget, 1);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorView/1', 694);\nfunction PathAnimatorView_BinderImpl(){\n}\n\ndefineClass(866, 1, {}, PathAnimatorView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorView_BinderImpl', 866);\nfunction $build_f_HTMLPanel1_1(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, btnSource, panelTarget, f_MaterialTitle3, btnClose;\n  f_HTMLPanel1 = new HTMLPanel($html1_2(this$static.domId0, this$static.domId1, this$static.domId2).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Meaningful transitions') , $setText_4(f_MaterialTitle2.paragraph, 'Motion design can effectively guide the user\\u2019s attention in ways that both inform and delight. Use motion to smoothly transport users between navigational contexts, explain changes in the arrangement of elements on a screen, and reinforce element hierarchy.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnSource = new MaterialButton , btnSource.span_0.setText('Meaningful Transitions') , $add_13(btnSource, btnSource.span_0) , $setBackgroundColor((!btnSource.colorsMixin && (btnSource.colorsMixin = new ColorsMixin(btnSource)) , btnSource.colorsMixin), 'blue') , $setSize(btnSource, ($clinit_ButtonSize() , LARGE)) , $addDomHandler(btnSource, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , this$static.owner.btnSource = btnSource , btnSource), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (panelTarget = new MaterialPanel , $add_13(panelTarget, (f_MaterialTitle3 = new MaterialTitle , setStyleName(f_MaterialTitle3.element, 'E0WIYBC-f-b', true) , $setTextColor((!f_MaterialTitle3.colorsMixin && (f_MaterialTitle3.colorsMixin = new ColorsMixin(f_MaterialTitle3)) , f_MaterialTitle3.colorsMixin), 'white') , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Meaningful transitions') , $setText_4(f_MaterialTitle3.paragraph, 'Motion design can effectively guide the user\\u2019s attention in ways that both inform and delight. Use motion to smoothly transport users between navigational contexts, explain changes in the arrangement of elements on a screen, and reinforce element hierarchy.') , f_MaterialTitle3)) , $add_13(panelTarget, (btnClose = new MaterialButton , btnClose.span_0.setText('Back to Main Page') , $add_13(btnClose, btnClose.span_0) , $setTextColor((!btnClose.colorsMixin && (btnClose.colorsMixin = new ColorsMixin(btnClose)) , btnClose.colorsMixin), 'white') , $setBackgroundColor((!btnClose.colorsMixin && (btnClose.colorsMixin = new ColorsMixin(btnClose)) , btnClose.colorsMixin), 'blue lighten-2') , $setSize(btnClose, LARGE) , $addDomHandler(btnClose, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnClose)) , setStyleName(panelTarget.element, 'E0WIYBC-f-a', true) , $setBackgroundColor((!panelTarget.colorsMixin && (panelTarget.colorsMixin = new ColorsMixin(panelTarget)) , panelTarget.colorsMixin), 'blue') , $setTextAlign(panelTarget, ($clinit_TextAlign() , CENTER_4)) , this$static.owner.panelTarget = panelTarget , panelTarget), $get_0(this$static.domId2Element));\n  return f_HTMLPanel1;\n}\n\nfunction PathAnimatorView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new PathAnimatorView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new PathAnimatorView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n  this.style_0 = (new PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_3);\n  $ensureInjected_8(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n}\n\ndefineClass(867, 1, {}, PathAnimatorView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorView_BinderImpl/Widgets', 867);\nfunction PathAnimatorView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(868, 1, $intern_51, PathAnimatorView_BinderImpl$Widgets$1);\n_.onClick = function onClick_13(event_0){\n  $onSource(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorView_BinderImpl/Widgets/1', 868);\nfunction PathAnimatorView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(869, 1, $intern_51, PathAnimatorView_BinderImpl$Widgets$2);\n_.onClick = function onClick_14(event_0){\n  $onClose(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorView_BinderImpl/Widgets/2', 869);\nfunction PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1170, 1, {}, PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_3;\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1170);\nfunction $ensureInjected_8(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    inject_0(($clinit_LocaleInfo() , '.E0WIYBC-f-a{width:100%;height:100%;top:0;left:0;right:0;bottom:0;position:fixed;z-index:1000;opacity:0;visibility:hidden}.E0WIYBC-f-b{width:50%;margin:auto;margin-bottom:50px}'));\n    return true;\n  }\n  return false;\n}\n\nfunction PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1171, 1, {}, PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_16(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_addins_pathanimator_PathAnimatorView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.pathanimator', 'PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1171);\nfunction $clinit_PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_3 = new PathAnimatorView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html1_2(arg0, arg1, arg2){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorPresenter$_annotation$$none$$) {\n    result = new PathAnimatorPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorView$_annotation$$none$$) {\n    result = new PathAnimatorView(new PathAnimatorView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorView$_annotation$$none$$;\n}\n\ndefineClass(477, 1, $intern_56);\n_.onSuccess_0 = function onSuccess_1(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$pathanimator$PathAnimatorPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(2);\n\n//# sourceURL=gwtmaterialdemo-2.js\n")
