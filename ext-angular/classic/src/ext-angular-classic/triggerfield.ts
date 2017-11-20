import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.form.field.Trigger
export class triggerfieldMetaData {
	public static XTYPE: string = 'triggerfield';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'activeError',
		'activeErrorsTpl',
		'afterBodyEl',
		'afterLabelTextTpl',
		'afterLabelTpl',
		'afterSubTpl',
		'alignOnScroll',
		'alignTarget',
		'allowBlank',
		'allowOnlyWhitespace',
		'alwaysOnTop',
		'anchor',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaErrorText',
		'ariaHelp',
		'ariaLabel',
		'ariaLabelledBy',
		'autoEl',
		'autoFitErrors',
		'autoHideInputMask',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseBodyCls',
		'baseCls',
		'beforeBodyEl',
		'beforeLabelTextTpl',
		'beforeLabelTpl',
		'beforeSubTpl',
		'bind',
		'blankText',
		'border',
		'checkChangeBuffer',
		'checkChangeEvents',
		'childEls',
		'cls',
		'columnWidth',
		'componentCls',
		'componentLayout',
		'constrain',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
		'defaultAlign',
		'defaultListenerScope',
		'dirtyCls',
		'disabled',
		'disabledCls',
		'disableKeyFilter',
		'dock',
		'draggable',
		'editable',
		'emptyCls',
		'emptyText',
		'enableKeyEvents',
		'enforceMaxLength',
		'errorMsgCls',
		'fieldBodyCls',
		'fieldCls',
		'fieldLabel',
		'fieldStyle',
		'fieldSubTpl',
		'fixed',
		'flex',
		'floating',
		'focusCls',
		'focusOnToFront',
		'formatText',
		'formBind',
		'formItemCls',
		'frame',
		'grow',
		'growAppend',
		'growMax',
		'growMin',
		'height',
		'hidden',
		'hideEmptyLabel',
		'hideLabel',
		'hideMode',
		'hideTrigger',
		'html',
		'id',
		'inputAttrTpl',
		'inputId',
		'inputMask',
		'inputType',
		'inputWrapCls',
		'invalidCls',
		'invalidText',
		'isTextInput',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'labelableRenderTpl',
		'labelAlign',
		'labelAttrTpl',
		'labelCls',
		'labelClsExtra',
		'labelPad',
		'labelSeparator',
		'labelStyle',
		'labelWidth',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'margin',
		'maskDefaults',
		'maskElement',
		'maskRe',
		'maxHeight',
		'maxLength',
		'maxLengthText',
		'maxWidth',
		'minHeight',
		'minLength',
		'minLengthText',
		'minWidth',
		'modal',
		'modelValidation',
		'msgTarget',
		'name',
		'nameable',
		'overCls',
		'overflowX',
		'overflowY',
		'padding',
		'plugins',
		'preventMark',
		'publishes',
		'readOnly',
		'readOnlyCls',
		'reference',
		'regex',
		'regexText',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'repeatTriggerClick',
		'requiredCls',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scrollable',
		'selectOnFocus',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'size',
		'stateEvents',
		'stateful',
		'stateId',
		'stripCharsRe',
		'style',
		'submitValue',
		'tabIndex',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'triggerCls',
		'triggers',
		'triggerWrapCls',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'validateBlank',
		'validateOnBlur',
		'validateOnChange',
		'validation',
		'validationField',
		'validator',
		'value',
		'valuePublishEvent',
		'viewModel',
		'vtype',
		'vtypeText',
		'weight',
		'width',
		'xtype',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'triggerfield'},
		{name:'added',parameters:'triggerfield,container,pos'},
		{name:'afterlayoutanimation',parameters:'triggerfield'},
		{name:'afterrender',parameters:'triggerfield'},
		{name:'autosize',parameters:'triggerfield,width'},
		{name:'beforeactivate',parameters:'triggerfield'},
		{name:'beforedeactivate',parameters:'triggerfield'},
		{name:'beforedestroy',parameters:'triggerfield'},
		{name:'beforehide',parameters:'triggerfield'},
		{name:'beforerender',parameters:'triggerfield'},
		{name:'beforeshow',parameters:'triggerfield'},
		{name:'beforestaterestore',parameters:'triggerfield,state'},
		{name:'beforestatesave',parameters:'triggerfield,state'},
		{name:'blur',parameters:'triggerfield,event'},
		{name:'boxready',parameters:'triggerfield,width,height'},
		{name:'change',parameters:'triggerfield,newValue,oldValue'},
		{name:'deactivate',parameters:'triggerfield'},
		{name:'destroy',parameters:'triggerfield'},
		{name:'dirtychange',parameters:'triggerfield,isDirty'},
		{name:'disable',parameters:'triggerfield'},
		{name:'enable',parameters:'triggerfield'},
		{name:'errorchange',parameters:'triggerfield,error'},
		{name:'focus',parameters:'triggerfield,event'},
		{name:'focusenter',parameters:'triggerfield,event'},
		{name:'focusleave',parameters:'triggerfield,event'},
		{name:'hide',parameters:'triggerfield'},
		{name:'keydown',parameters:'triggerfield,e'},
		{name:'keypress',parameters:'triggerfield,e'},
		{name:'keyup',parameters:'triggerfield,e'},
		{name:'move',parameters:'triggerfield,x,y'},
		{name:'removed',parameters:'triggerfield,ownerCt'},
		{name:'render',parameters:'triggerfield'},
		{name:'resize',parameters:'triggerfield,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'triggerfield'},
		{name:'specialkey',parameters:'triggerfield,e'},
		{name:'staterestore',parameters:'triggerfield,state'},
		{name:'statesave',parameters:'triggerfield,state'},
		{name:'validitychange',parameters:'triggerfield,isValid'},
		{name:'writeablechange',parameters:'triggerfield,Read'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'autosize',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'change',
		'deactivate',
		'destroy',
		'dirtychange',
		'disable',
		'enable',
		'errorchange',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'keydown',
		'keypress',
		'keyup',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'specialkey',
		'staterestore',
		'statesave',
		'validitychange',
		'writeablechange',
		'ready'
];
}
@Component({
  selector: triggerfieldMetaData.XTYPE,
	inputs: triggerfieldMetaData.INPUTNAMES,
	outputs: triggerfieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => triggerfield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class triggerfield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,triggerfieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,triggerfieldMetaData);}
}
