$wnd.gwtmaterialdemo.runAsyncCallback24("var $intern_101 = {8:1, 14:1, 1636:1};\nfunction $printStackTrace(this$static){\n  var element$array, element$index, element$max, t, stackTrace;\n  for (t = this$static; t; t = t.cause) {\n    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)\n    ;\n  }\n}\n\nfunction $setDate(this$static, dayOfMonth){\n  this$static.setDate(dayOfMonth);\n  return this$static.getTime();\n}\n\nfunction $setFullYear(this$static, year, month, day){\n  this$static.setFullYear(year, month, day);\n  return this$static.getTime();\n}\n\nfunction $setHours(this$static, hours, mins, secs, ms){\n  this$static.setHours(hours, mins, secs, ms);\n  return this$static.getTime();\n}\n\nfunction $setTime(this$static, milliseconds){\n  this$static.setTime(milliseconds);\n  return this$static.getTime();\n}\n\nfunction create_0(year, month, dayOfMonth, hours, minutes, seconds, millis){\n  return new Date(year, month, dayOfMonth, hours, minutes, seconds, millis);\n}\n\nfunction dropInternalFrames(stackTrace){\n  var dropFrameUntilFnName, i, numberOfFrameToSearch;\n  dropFrameUntilFnName = 'captureStackTrace';\n  numberOfFrameToSearch = min_1(stackTrace.length, 5);\n  for (i = 0; i < numberOfFrameToSearch; i++) {\n    if ($equals_0(stackTrace[i].methodName, dropFrameUntilFnName)) {\n      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 1636);\n    }\n  }\n  return stackTrace;\n}\n\nfunction parseInt_0(number){\n  $clinit_StackTraceCreator();\n  return parseInt(number) || -1;\n}\n\ndefineClass(473, 1662, {});\n_.getStackTrace = function getStackTrace(t){\n  var i, length_0, stack_0, stackTrace;\n  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);\n  length_0 = stack_0.length;\n  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_101, 172, length_0, 0, 1);\n  for (i = 0; i < length_0; i++) {\n    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);\n  }\n  return stackTrace;\n}\n;\nfunction $parse(this$static, stString){\n  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;\n  if (!stString.length) {\n    return this$static.createSte('Unknown', 'anonymous', -1, -1);\n  }\n  toReturn = $trim(stString);\n  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));\n  toReturn = toReturn.replace(/\\[.*?\\]/g, '');\n  index_0 = toReturn.indexOf('(');\n  if (index_0 == -1) {\n    index_0 = toReturn.indexOf('@');\n    if (index_0 == -1) {\n      location_0 = toReturn;\n      toReturn = '';\n    }\n     else {\n      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));\n      toReturn = $trim(toReturn.substr(0, index_0));\n    }\n  }\n   else {\n    closeParen = toReturn.indexOf(')', index_0);\n    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));\n    toReturn = $trim(toReturn.substr(0, index_0));\n  }\n  index_0 = $indexOf_0(toReturn, fromCodePoint(46));\n  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));\n  (!toReturn.length || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');\n  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));\n  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);\n  line = -1;\n  col = -1;\n  fileName = 'Unknown';\n  if (lastColonIndex != -1 && endFileUrlIndex != -1) {\n    fileName = location_0.substr(0, endFileUrlIndex);\n    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));\n    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));\n  }\n  return this$static.createSte(fileName, toReturn, line, col);\n}\n\ndefineClass(1663, 1662, {});\n_.createSte = function createSte(fileName, method, line, col){\n  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);\n}\n;\n_.getStackTrace = function getStackTrace_0(t){\n  var addIndex, i, length_0, stack_0, stackTrace, ste, e;\n  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\\n'):[]);\n  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_101, 172, 0, 0, 1);\n  addIndex = 0;\n  length_0 = stack_0.length;\n  if (length_0 == 0) {\n    return stackTrace;\n  }\n  ste = $parse(this, stack_0[0]);\n  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);\n  for (i = 1; i < length_0; i++) {\n    stackTrace[addIndex++] = $parse(this, stack_0[i]);\n  }\n  return stackTrace;\n}\n;\ndefineClass(474, 1663, {});\n_.createSte = function createSte_0(fileName, method, line, col){\n  return new StackTraceElement(method, fileName, -1);\n}\n;\nfunction shru(a, n){\n  var a2, res0, res1, res2;\n  n &= 63;\n  a2 = a.h & $intern_20;\n  if (n < 22) {\n    res2 = a2 >>> n;\n    res1 = a.m >> n | a2 << 22 - n;\n    res0 = a.l >> n | a.m << 22 - n;\n  }\n   else if (n < 44) {\n    res2 = 0;\n    res1 = a2 >>> n - 22;\n    res0 = a.m >> n - 22 | a.h << 44 - n;\n  }\n   else {\n    res2 = 0;\n    res1 = 0;\n    res0 = a2 >>> n - 44;\n  }\n  return {l:res0 & $intern_19, m:res1 & $intern_19, h:res2 & $intern_20};\n}\n\nfunction xor(a, b){\n  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};\n}\n\nfunction $getPickerDate(this$static){\n  var e, selectedDate;\n  try {\n    selectedDate = this$static.pickatizedDateInput.pickadate('picker').get('select').obj;\n    return new Date_2(fromDouble(selectedDate.getTime()));\n  }\n   catch ($e0) {\n    $e0 = wrap($e0);\n    if (instanceOf($e0, 83)) {\n      e = $e0;\n      $printStackTrace(e);\n      return null;\n    }\n     else \n      throw unwrap($e0);\n  }\n}\n\nfunction $setFormat(this$static){\n  if (this$static.initialized) {\n    throw new IllegalStateException_0('setFormat can be called only before initialization');\n  }\n  this$static.format = 'Yehey yyyy mm dd';\n}\n\nfunction $setSelectionType(this$static, selectionType){\n  if (this$static.initialized) {\n    throw new IllegalStateException_0('setSelectionType can be called only before initialization');\n  }\n  this$static.selectionType = selectionType;\n}\n\nfunction PickersPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(647, 56, $intern_54, PickersPresenter);\n_.onReveal = function onReveal_34(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Date Picker', 'A dialog picker is used to select a single date on mobile. The selected day is indicated by a filled circle. The current day is indicated by a different color and type weight.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersPresenter', 647);\nfunction PickersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_20(new PickersView_BinderImpl$Widgets(this)));\n  $setDateMin(this.dpLimit, new Date_1(117, 1));\n  $setDateMax(this.dpLimit, new Date_1(117, 15));\n}\n\ndefineClass(854, 59, $intern_55, PickersView);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView', 854);\nfunction PickersView_BinderImpl(){\n}\n\ndefineClass(1167, 1, {}, PickersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl', 1167);\nfunction $build_f_HTMLPanel1_20(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialDatePicker3, f_PrettyPre4, f_MaterialTitle5, f_MaterialDatePicker6, f_MaterialTitle7, f_MaterialDatePicker8, f_PrettyPre9, f_MaterialTitle10, dp, btnSetDate, btnGetDate, f_PrettyPre11, f_PrettyPre12, f_MaterialTitle13, dpFormat, btnSetFormat, f_PrettyPre14, f_MaterialTitle15, dpLimit, f_PrettyPre16, sb, sb_0, sb_1, sb_2, sb_3, sb_4;\n  f_HTMLPanel1 = new HTMLPanel($html7_4(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13, this$static.domId14, this$static.domId15, this$static.domId16, this$static.domId17, this$static.domId18, this$static.domId19, this$static.domId20).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  $get_0(this$static.domId14Element);\n  $get_0(this$static.domId15Element);\n  $get_0(this$static.domId16Element);\n  $get_0(this$static.domId17Element);\n  $get_0(this$static.domId18Element);\n  $get_0(this$static.domId19Element);\n  $get_0(this$static.domId20Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Date Picker') , $setText_9(f_MaterialTitle2.paragraph, 'Material Datepicker') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialDatePicker3 = new MaterialDatePicker , f_MaterialDatePicker3.placeholder = 'Date' , f_MaterialDatePicker3.initialized && $setText_7(f_MaterialDatePicker3.lblName, 'Date') , f_MaterialDatePicker3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre4 = new PrettyPre , $setHTML(f_PrettyPre4, (sb = new StringBuilder , sb.string += '&lt;m:MaterialDatePicker ui:field=\"dp\" placeholder=\"Date\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre4.element, 'lang-xml', true) , setStyleName(f_PrettyPre4.element, 'z-depth-1', true) , f_PrettyPre4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle5 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle5.header), 'Disabled Styles') , $setText_9(f_MaterialTitle5.paragraph, \"You can disable the datepicker by adding enabled='false'\") , f_MaterialTitle5), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialDatePicker6 = new MaterialDatePicker , $setEnabled_0(f_MaterialDatePicker6.dateInput) , f_MaterialDatePicker6.placeholder = 'Birthday' , f_MaterialDatePicker6.initialized && $setText_7(f_MaterialDatePicker6.lblName, 'Birthday') , f_MaterialDatePicker6), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), 'Date Picker Selection Types') , $setText_9(f_MaterialTitle7.paragraph, \"You can set easily the selection type of your datepicker by adding an attribute, selectionType='YEAR'. Here is the available formats [DAY, MONTH_DAY, YEAR_MONTH_DAY, YEAR]\") , f_MaterialTitle7), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialDatePicker8 = new MaterialDatePicker , f_MaterialDatePicker8.placeholder = 'Date' , f_MaterialDatePicker8.initialized && $setText_7(f_MaterialDatePicker8.lblName, 'Date') , $setSelectionType(f_MaterialDatePicker8, ($clinit_MaterialDatePicker$MaterialDatePickerType() , YEAR)) , f_MaterialDatePicker8), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre9 = new PrettyPre , $setHTML(f_PrettyPre9, (sb_0 = new StringBuilder , sb_0.string += '&lt;m:MaterialDatePicker placeholder=\"Date\" selectionType=\"YEAR\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre9.element, 'lang-xml', true) , setStyleName(f_PrettyPre9.element, 'z-depth-1', true) , f_PrettyPre9), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle10 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle10.header), 'setDate() and getDate()') , f_MaterialTitle10), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (dp = new MaterialDatePicker , dp.placeholder = 'Date' , dp.initialized && $setText_7(dp.lblName, 'Date') , $setSelectionType(dp, YEAR) , this$static.owner.dp = dp , dp), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnSetDate = new MaterialButton , btnSetDate.span_1.setText('Set Date to January 1 2020') , $add_13(btnSetDate, btnSetDate.span_1) , $addDomHandler(btnSetDate, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , btnSetDate), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnGetDate = new MaterialButton , btnGetDate.span_1.setText('Get the date') , $add_13(btnGetDate, btnGetDate.span_1) , $addDomHandler(btnGetDate, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , btnGetDate), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre11 = new PrettyPre , $setHTML(f_PrettyPre11, (sb_1 = new StringBuilder , sb_1.string += '\\u2003// setDate();<br> dp.setDate(new Date(116, 0,1));' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre11.element, 'lang-java', true) , setStyleName(f_PrettyPre11.element, 'z-depth-1', true) , f_PrettyPre11), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre12 = new PrettyPre , $setHTML(f_PrettyPre12, (sb_2 = new StringBuilder , sb_2.string += '\\u2003// getDate();<br> dp.getDate();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre12.element, 'lang-java', true) , setStyleName(f_PrettyPre12.element, 'z-depth-1', true) , f_PrettyPre12), $get_0(this$static.domId13Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle13 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle13.header), 'Formats') , $setText_9(f_MaterialTitle13.paragraph, \"You can set the format of the date picker by adding format='FORMAT'\") , f_MaterialTitle13), $get_0(this$static.domId14Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (dpFormat = new MaterialDatePicker , dpFormat.placeholder = 'Custom Format' , dpFormat.initialized && $setText_7(dpFormat.lblName, 'Custom Format') , $setFormat(dpFormat) , this$static.owner.dpFormat = dpFormat , dpFormat), $get_0(this$static.domId15Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnSetFormat = new MaterialButton , btnSetFormat.span_1.setText('Set Date with custom format') , $add_13(btnSetFormat, btnSetFormat.span_1) , $addDomHandler(btnSetFormat, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_0)) , btnSetFormat), $get_0(this$static.domId16Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre14 = new PrettyPre , $setHTML(f_PrettyPre14, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialDatePicker ui:field=\"dpFormat\" placeholder=\"Custom Format\" format=\"yyyy mm dd\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , setStyleName(f_PrettyPre14.element, 'lang-xml', true) , setStyleName(f_PrettyPre14.element, 'z-depth-1', true) , f_PrettyPre14), $get_0(this$static.domId17Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle15 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle15.header), 'Date Limit') , $setText_9(f_MaterialTitle15.paragraph, 'You can limit the date by calling setDateLimit(Date min, Date max) method.') , f_MaterialTitle15), $get_0(this$static.domId18Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (dpLimit = new MaterialDatePicker , dpLimit.placeholder = 'With Limit' , dpLimit.initialized && $setText_7(dpLimit.lblName, 'With Limit') , this$static.owner.dpLimit = dpLimit , dpLimit), $get_0(this$static.domId19Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre16 = new PrettyPre , $setHTML(f_PrettyPre16, (sb_4 = new StringBuilder , sb_4.string += '\\u2003setDateLimit(Date dateMin, Date dateMax);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html) , setStyleName(f_PrettyPre16.element, 'lang-java', true) , setStyleName(f_PrettyPre16.element, 'z-depth-1', true) , f_PrettyPre16), $get_0(this$static.domId20Element));\n  return f_HTMLPanel1;\n}\n\nfunction PickersView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new PickersView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new PickersView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new PickersView_BinderImpl$Widgets$3(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId15 = $createUniqueId($doc);\n  this.domId16 = $createUniqueId($doc);\n  this.domId17 = $createUniqueId($doc);\n  this.domId18 = $createUniqueId($doc);\n  this.domId19 = $createUniqueId($doc);\n  this.domId20 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n  this.domId15Element = new LazyDomElement(this.domId15);\n  this.domId16Element = new LazyDomElement(this.domId16);\n  this.domId17Element = new LazyDomElement(this.domId17);\n  this.domId18Element = new LazyDomElement(this.domId18);\n  this.domId19Element = new LazyDomElement(this.domId19);\n  this.domId20Element = new LazyDomElement(this.domId20);\n}\n\ndefineClass(1168, 1, {}, PickersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets', 1168);\nfunction PickersView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1169, 1, $intern_63, PickersView_BinderImpl$Widgets$1);\n_.onClick = function onClick_141(event_0){\n  $setDate_0(this.this$11.owner.dp, new Date_1(116, 1));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets/1', 1169);\nfunction PickersView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1170, 1, $intern_63, PickersView_BinderImpl$Widgets$2);\n_.onClick = function onClick_142(event_0){\n  fireToast('' + $getPickerDate(this.this$11.owner.dp));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets/2', 1170);\nfunction PickersView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1171, 1, $intern_63, PickersView_BinderImpl$Widgets$3);\n_.onClick = function onClick_143(event_0){\n  $setDate_0(this.this$11.owner.dpFormat, new Date_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets/3', 1171);\nfunction $html7_4(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg14));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg15));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg16));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg17));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg18));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg19));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg20));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$) {\n    result = new PickersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$) {\n    result = new PickersView(new PickersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$;\n}\n\ndefineClass(577, 1, $intern_79);\n_.onSuccess_0 = function onSuccess_23(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction StackTraceElement(methodName, fileName, lineNumber){\n  this.className_0 = 'Unknown';\n  this.methodName = methodName;\n  this.fileName = fileName;\n  this.lineNumber = lineNumber;\n}\n\ndefineClass(172, 1, {8:1, 172:1}, StackTraceElement);\n_.equals$ = function equals_20(other){\n  var st;\n  if (instanceOf(other, 172)) {\n    st = dynamicCast(other, 172);\n    return this.lineNumber == st.lineNumber && equals_33(this.methodName, st.methodName) && equals_33(this.className_0, st.className_0) && equals_33(this.fileName, st.fileName);\n  }\n  return false;\n}\n;\n_.hashCode$ = function hashCode_22(){\n  return hashCode_28(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_5, 1, 3, [valueOf_1(this.lineNumber), this.className_0, this.methodName, this.fileName]));\n}\n;\n_.toString$ = function toString_22(){\n  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';\n}\n;\n_.lineNumber = 0;\nvar Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 172);\nfunction $lastIndexOf(this$static, str){\n  return this$static.lastIndexOf(str);\n}\n\nfunction $lastIndexOf_0(this$static, str, start_0){\n  return this$static.lastIndexOf(str, start_0);\n}\n\nfunction $compareTo_6(this$static, other){\n  return compare_6(fromDouble(this$static.jsdate.getTime()), fromDouble(other.jsdate.getTime()));\n}\n\nfunction $fixDaylightSavings(this$static){\n  var badHours, copy, day, hours, newTime, originalTimeInMillis, timeDiff, timeDiffHours, timeDiffMinutes;\n  hours = this$static.jsdate.getHours();\n  if (hours % 24 != 0) {\n    copy = create(this$static.jsdate.getTime());\n    $setDate(copy, copy.getDate() + 1);\n    timeDiff = this$static.jsdate.getTimezoneOffset() - copy.getTimezoneOffset();\n    if (timeDiff > 0) {\n      timeDiffHours = ~~(timeDiff / 60);\n      timeDiffMinutes = timeDiff % 60;\n      day = this$static.jsdate.getDate();\n      badHours = this$static.jsdate.getHours();\n      badHours + timeDiffHours >= 24 && ++day;\n      newTime = create_0(this$static.jsdate.getFullYear(), this$static.jsdate.getMonth(), day, timeDiffHours, this$static.jsdate.getMinutes() + timeDiffMinutes, this$static.jsdate.getSeconds(), this$static.jsdate.getMilliseconds());\n      $setTime(this$static.jsdate, newTime.getTime());\n    }\n    return;\n  }\n  originalTimeInMillis = this$static.jsdate.getTime();\n  $setTime(this$static.jsdate, originalTimeInMillis + 3600000);\n  hours != this$static.jsdate.getHours() && $setTime(this$static.jsdate, originalTimeInMillis);\n}\n\nfunction Date_0(){\n  this.jsdate = new Date;\n}\n\nfunction Date_1(year, date){\n  this.jsdate = new Date;\n  $setFullYear(this.jsdate, year + 1900, 0, date);\n  $setHours(this.jsdate, 0, 0, 0, 0);\n  $fixDaylightSavings(this);\n}\n\nfunction Date_2(date){\n  this.jsdate = create(toDouble(date));\n}\n\nfunction padTwo(number){\n  return number < 10?'0' + number:'' + number;\n}\n\ndefineClass(155, 1, {8:1, 30:1, 155:1}, Date_0, Date_1, Date_2);\n_.compareTo = function compareTo_7(other){\n  return $compareTo_6(this, dynamicCast(other, 155));\n}\n;\n_.equals$ = function equals_31(obj){\n  return instanceOf(obj, 155) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 155).jsdate.getTime()));\n}\n;\n_.hashCode$ = function hashCode_35(){\n  var time;\n  time = fromDouble(this.jsdate.getTime());\n  return toInt(xor(time, shru(time, 32)));\n}\n;\n_.toString$ = function toString_29(){\n  var hourOffset, minuteOffset, offset;\n  offset = -this.jsdate.getTimezoneOffset();\n  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);\n  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;\n  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();\n}\n;\nvar Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 155);\nfunction $clinit_Date$StringData(){\n  $clinit_Date$StringData = emptyMethod;\n  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_5, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);\n  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_5, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);\n}\n\nvar DAYS, MONTHS;\n$entry(onLoad_0)(24);\n\n//# sourceURL=gwtmaterialdemo-24.js\n")
