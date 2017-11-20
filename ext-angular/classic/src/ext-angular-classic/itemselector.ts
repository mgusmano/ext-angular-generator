import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.form.ItemSelector
export class itemselectorMetaData {
	public static XTYPE: string = 'itemselector';
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
		'buttons',
		'buttonsText',
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
		'hideNavIcons',
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
		{name:'activate',parameters:'itemselectorfield'},
		{name:'add',parameters:'itemselectorfield,component,index'},
		{name:'added',parameters:'itemselectorfield,container,pos'},
		{name:'afterlayout',parameters:'itemselectorfield,layout'},
		{name:'afterlayoutanimation',parameters:'itemselectorfield'},
		{name:'afterrender',parameters:'itemselectorfield'},
		{name:'beforeactivate',parameters:'itemselectorfield'},
		{name:'beforeadd',parameters:'itemselectorfield,component,index'},
		{name:'beforedeactivate',parameters:'itemselectorfield'},
		{name:'beforedestroy',parameters:'itemselectorfield'},
		{name:'beforehide',parameters:'itemselectorfield'},
		{name:'beforeremove',parameters:'itemselectorfield,component'},
		{name:'beforerender',parameters:'itemselectorfield'},
		{name:'beforeshow',parameters:'itemselectorfield'},
		{name:'beforestaterestore',parameters:'itemselectorfield,state'},
		{name:'beforestatesave',parameters:'itemselectorfield,state'},
		{name:'blur',parameters:'itemselectorfield,event'},
		{name:'boxready',parameters:'itemselectorfield,width,height'},
		{name:'change',parameters:'itemselectorfield,newValue,oldValue'},
		{name:'childmove',parameters:'itemselectorfield,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'itemselectorfield'},
		{name:'destroy',parameters:'itemselectorfield'},
		{name:'dirtychange',parameters:'itemselectorfield,isDirty'},
		{name:'disable',parameters:'itemselectorfield'},
		{name:'enable',parameters:'itemselectorfield'},
		{name:'errorchange',parameters:'itemselectorfield,error'},
		{name:'fielderrorchange',parameters:'itemselectorfield,field,error'},
		{name:'fieldvaliditychange',parameters:'itemselectorfield,field,isValid'},
		{name:'focus',parameters:'itemselectorfield,event'},
		{name:'focusenter',parameters:'itemselectorfield,event'},
		{name:'focusleave',parameters:'itemselectorfield,event'},
		{name:'hide',parameters:'itemselectorfield'},
		{name:'move',parameters:'itemselectorfield,x,y'},
		{name:'remove',parameters:'itemselectorfield,component'},
		{name:'removed',parameters:'itemselectorfield,ownerCt'},
		{name:'render',parameters:'itemselectorfield'},
		{name:'resize',parameters:'itemselectorfield,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'itemselectorfield'},
		{name:'staterestore',parameters:'itemselectorfield,state'},
		{name:'statesave',parameters:'itemselectorfield,state'},
		{name:'validitychange',parameters:'itemselectorfield,isValid'},
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
  selector: itemselectorMetaData.XTYPE,
	inputs: itemselectorMetaData.INPUTNAMES,
	outputs: itemselectorMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => itemselector)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class itemselector extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,itemselectorMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,itemselectorMetaData);}
}
