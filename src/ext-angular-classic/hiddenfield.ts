import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.form.field.Hidden
export class hiddenfieldMetaData {
	public static XTYPE: string = 'hiddenfield';
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
		'dock',
		'draggable',
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
		'height',
		'hidden',
		'hideEmptyLabel',
		'hideLabel',
		'hideMode',
		'html',
		'id',
		'inputAttrTpl',
		'inputId',
		'inputType',
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
		'maxHeight',
		'maxWidth',
		'minHeight',
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
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scrollable',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'submitValue',
		'tabIndex',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'validateOnBlur',
		'validateOnChange',
		'validation',
		'validationField',
		'value',
		'valuePublishEvent',
		'viewModel',
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
		{name:'activate',parameters:'hiddenfield'},
		{name:'added',parameters:'hiddenfield,container,pos'},
		{name:'afterlayoutanimation',parameters:'hiddenfield'},
		{name:'afterrender',parameters:'hiddenfield'},
		{name:'beforeactivate',parameters:'hiddenfield'},
		{name:'beforedeactivate',parameters:'hiddenfield'},
		{name:'beforedestroy',parameters:'hiddenfield'},
		{name:'beforehide',parameters:'hiddenfield'},
		{name:'beforerender',parameters:'hiddenfield'},
		{name:'beforeshow',parameters:'hiddenfield'},
		{name:'beforestaterestore',parameters:'hiddenfield,state'},
		{name:'beforestatesave',parameters:'hiddenfield,state'},
		{name:'blur',parameters:'hiddenfield,event'},
		{name:'boxready',parameters:'hiddenfield,width,height'},
		{name:'change',parameters:'hiddenfield,newValue,oldValue'},
		{name:'deactivate',parameters:'hiddenfield'},
		{name:'destroy',parameters:'hiddenfield'},
		{name:'dirtychange',parameters:'hiddenfield,isDirty'},
		{name:'disable',parameters:'hiddenfield'},
		{name:'enable',parameters:'hiddenfield'},
		{name:'errorchange',parameters:'hiddenfield,error'},
		{name:'focus',parameters:'hiddenfield,event'},
		{name:'focusenter',parameters:'hiddenfield,event'},
		{name:'focusleave',parameters:'hiddenfield,event'},
		{name:'hide',parameters:'hiddenfield'},
		{name:'move',parameters:'hiddenfield,x,y'},
		{name:'removed',parameters:'hiddenfield,ownerCt'},
		{name:'render',parameters:'hiddenfield'},
		{name:'resize',parameters:'hiddenfield,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'hiddenfield'},
		{name:'specialkey',parameters:'hiddenfield,e'},
		{name:'staterestore',parameters:'hiddenfield,state'},
		{name:'statesave',parameters:'hiddenfield,state'},
		{name:'validitychange',parameters:'hiddenfield,isValid'},
		{name:'writeablechange',parameters:'hiddenfield,Read'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
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
  selector: hiddenfieldMetaData.XTYPE,
	inputs: hiddenfieldMetaData.INPUTNAMES,
	outputs: hiddenfieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => hiddenfield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class hiddenfield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,hiddenfieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,hiddenfieldMetaData);}
}
