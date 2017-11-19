import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.toolbar.Fill
export class tbfillMetaData {
	public static XTYPE: string = 'tbfill';
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
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'tabIndex',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
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
		{name:'activate',parameters:'tbfill'},
		{name:'added',parameters:'tbfill,container,pos'},
		{name:'afterlayoutanimation',parameters:'tbfill'},
		{name:'afterrender',parameters:'tbfill'},
		{name:'beforeactivate',parameters:'tbfill'},
		{name:'beforedeactivate',parameters:'tbfill'},
		{name:'beforedestroy',parameters:'tbfill'},
		{name:'beforehide',parameters:'tbfill'},
		{name:'beforerender',parameters:'tbfill'},
		{name:'beforeshow',parameters:'tbfill'},
		{name:'beforestaterestore',parameters:'tbfill,state'},
		{name:'beforestatesave',parameters:'tbfill,state'},
		{name:'blur',parameters:'tbfill,event'},
		{name:'boxready',parameters:'tbfill,width,height'},
		{name:'deactivate',parameters:'tbfill'},
		{name:'destroy',parameters:'tbfill'},
		{name:'disable',parameters:'tbfill'},
		{name:'enable',parameters:'tbfill'},
		{name:'focus',parameters:'tbfill,event'},
		{name:'focusenter',parameters:'tbfill,event'},
		{name:'focusleave',parameters:'tbfill,event'},
		{name:'hide',parameters:'tbfill'},
		{name:'move',parameters:'tbfill,x,y'},
		{name:'removed',parameters:'tbfill,ownerCt'},
		{name:'render',parameters:'tbfill'},
		{name:'resize',parameters:'tbfill,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'tbfill'},
		{name:'staterestore',parameters:'tbfill,state'},
		{name:'statesave',parameters:'tbfill,state'},
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
  selector: tbfillMetaData.XTYPE,
	inputs: tbfillMetaData.INPUTNAMES,
	outputs: tbfillMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => tbfill)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class tbfill extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,tbfillMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,tbfillMetaData);}
}
