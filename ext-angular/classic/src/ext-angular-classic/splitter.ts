import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.resizer.Splitter
export class splitterMetaData {
	public static XTYPE: string = 'splitter';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'alignOnScroll',
		'alignTarget',
		'alwaysOnTop',
		'anchor',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoEl',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'bind',
		'border',
		'childEls',
		'cls',
		'collapsedCls',
		'collapseOnDblClick',
		'collapseTarget',
		'collapsible',
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
		'defaultSplitMax',
		'defaultSplitMin',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'fixed',
		'flex',
		'floating',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'frame',
		'height',
		'hidden',
		'hideMode',
		'html',
		'id',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
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
		'nameable',
		'overCls',
		'overflowX',
		'overflowY',
		'padding',
		'performCollapse',
		'plugins',
		'publishes',
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
		'size',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'tabIndex',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'tracker',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
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
		{name:'activate',parameters:'splitter'},
		{name:'added',parameters:'splitter,container,pos'},
		{name:'afterlayoutanimation',parameters:'splitter'},
		{name:'afterrender',parameters:'splitter'},
		{name:'beforeactivate',parameters:'splitter'},
		{name:'beforedeactivate',parameters:'splitter'},
		{name:'beforedestroy',parameters:'splitter'},
		{name:'beforehide',parameters:'splitter'},
		{name:'beforerender',parameters:'splitter'},
		{name:'beforeshow',parameters:'splitter'},
		{name:'beforestaterestore',parameters:'splitter,state'},
		{name:'beforestatesave',parameters:'splitter,state'},
		{name:'blur',parameters:'splitter,event'},
		{name:'boxready',parameters:'splitter,width,height'},
		{name:'deactivate',parameters:'splitter'},
		{name:'destroy',parameters:'splitter'},
		{name:'disable',parameters:'splitter'},
		{name:'enable',parameters:'splitter'},
		{name:'focus',parameters:'splitter,event'},
		{name:'focusenter',parameters:'splitter,event'},
		{name:'focusleave',parameters:'splitter,event'},
		{name:'hide',parameters:'splitter'},
		{name:'move',parameters:'splitter,x,y'},
		{name:'removed',parameters:'splitter,ownerCt'},
		{name:'render',parameters:'splitter'},
		{name:'resize',parameters:'splitter,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'splitter'},
		{name:'staterestore',parameters:'splitter,state'},
		{name:'statesave',parameters:'splitter,state'},
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
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: splitterMetaData.XTYPE,
	inputs: splitterMetaData.INPUTNAMES,
	outputs: splitterMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => splitter)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class splitter extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,splitterMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,splitterMetaData);}
}