import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.form.MultiSelect
export class multiselectfieldMetaData {
	public static XTYPE: string = 'multiselectfield';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeError',
		'activeErrorsTpl',
		'activeItem',
		'afterBodyEl',
		'afterLabelTextTpl',
		'afterLabelTpl',
		'afterSubTpl',
		'alignOnScroll',
		'alignTarget',
		'allowBlank',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'anchor',
		'anchorSize',
		'animateShadow',
		'appendOnly',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaErrorText',
		'ariaHelp',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
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
		'blankText',
		'border',
		'bubbleEvents',
		'childEls',
		'cls',
		'columnWidth',
		'combineErrors',
		'combineLabels',
		'componentCls',
		'componentLayout',
		'constrain',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
		'ddReorder',
		'defaultAlign',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'delimiter',
		'detachOnRemove',
		'disabled',
		'disabledCls',
		'displayField',
		'dock',
		'draggable',
		'dragGroup',
		'dragText',
		'dropGroup',
		'errorMsgCls',
		'fieldBodyCls',
		'fieldDefaults',
		'fieldLabel',
		'fixed',
		'flex',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
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
		'inactiveChildTabIndex',
		'invalidCls',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'labelableRenderTpl',
		'labelAlign',
		'labelAttrTpl',
		'labelCls',
		'labelClsExtra',
		'labelConnector',
		'labelPad',
		'labelSeparator',
		'labelStyle',
		'labelWidth',
		'layout',
		'liquidLayout',
		'listConfig',
		'listeners',
		'liveDrag',
		'loader',
		'margin',
		'maskDefaults',
		'maskElement',
		'maxHeight',
		'maxSelections',
		'maxSelectionsText',
		'maxWidth',
		'minHeight',
		'minSelections',
		'minSelectionsText',
		'minWidth',
		'modal',
		'modelValidation',
		'msgTarget',
		'name',
		'nameable',
		'nameHolder',
		'overCls',
		'overflowX',
		'overflowY',
		'padding',
		'pageSize',
		'plugins',
		'preventMark',
		'publishes',
		'reference',
		'referenceHolder',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'resetFocusPosition',
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
		'store',
		'style',
		'submitValue',
		'suspendLayout',
		'tabGuard',
		'tabIndex',
		'tbar',
		'title',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'validateOnChange',
		'validation',
		'validationField',
		'value',
		'valueField',
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
		{name:'activate',parameters:'multiselectfield'},
		{name:'add',parameters:'multiselectfield,component,index'},
		{name:'added',parameters:'multiselectfield,container,pos'},
		{name:'afterlayout',parameters:'multiselectfield,layout'},
		{name:'afterlayoutanimation',parameters:'multiselectfield'},
		{name:'afterrender',parameters:'multiselectfield'},
		{name:'beforeactivate',parameters:'multiselectfield'},
		{name:'beforeadd',parameters:'multiselectfield,component,index'},
		{name:'beforedeactivate',parameters:'multiselectfield'},
		{name:'beforedestroy',parameters:'multiselectfield'},
		{name:'beforehide',parameters:'multiselectfield'},
		{name:'beforeremove',parameters:'multiselectfield,component'},
		{name:'beforerender',parameters:'multiselectfield'},
		{name:'beforeshow',parameters:'multiselectfield'},
		{name:'beforestaterestore',parameters:'multiselectfield,state'},
		{name:'beforestatesave',parameters:'multiselectfield,state'},
		{name:'blur',parameters:'multiselectfield,event'},
		{name:'boxready',parameters:'multiselectfield,width,height'},
		{name:'change',parameters:'multiselectfield,newValue,oldValue'},
		{name:'childmove',parameters:'multiselectfield,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'multiselectfield'},
		{name:'destroy',parameters:'multiselectfield'},
		{name:'dirtychange',parameters:'multiselectfield,isDirty'},
		{name:'disable',parameters:'multiselectfield'},
		{name:'enable',parameters:'multiselectfield'},
		{name:'errorchange',parameters:'multiselectfield,error'},
		{name:'fielderrorchange',parameters:'multiselectfield,field,error'},
		{name:'fieldvaliditychange',parameters:'multiselectfield,field,isValid'},
		{name:'focus',parameters:'multiselectfield,event'},
		{name:'focusenter',parameters:'multiselectfield,event'},
		{name:'focusleave',parameters:'multiselectfield,event'},
		{name:'hide',parameters:'multiselectfield'},
		{name:'move',parameters:'multiselectfield,x,y'},
		{name:'remove',parameters:'multiselectfield,component'},
		{name:'removed',parameters:'multiselectfield,ownerCt'},
		{name:'render',parameters:'multiselectfield'},
		{name:'resize',parameters:'multiselectfield,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'multiselectfield'},
		{name:'staterestore',parameters:'multiselectfield,state'},
		{name:'statesave',parameters:'multiselectfield,state'},
		{name:'validitychange',parameters:'multiselectfield,isValid'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'afterlayout',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforeadd',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'change',
		'childmove',
		'deactivate',
		'destroy',
		'dirtychange',
		'disable',
		'enable',
		'errorchange',
		'fielderrorchange',
		'fieldvaliditychange',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'validitychange',
		'ready'
];
}
@Component({
  selector: multiselectfieldMetaData.XTYPE,
	inputs: multiselectfieldMetaData.INPUTNAMES,
	outputs: multiselectfieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => multiselectfield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class multiselectfield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,multiselectfieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,multiselectfieldMetaData);}
}
