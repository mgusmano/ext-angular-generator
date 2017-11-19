import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.IFrame
export class uxiframeMetaData {
	public static XTYPE: string = 'uxiframe';
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
		{name:'activate',parameters:'uxiframe'},
		{name:'added',parameters:'uxiframe,container,pos'},
		{name:'afterlayoutanimation',parameters:'uxiframe'},
		{name:'afterrender',parameters:'uxiframe'},
		{name:'beforeactivate',parameters:'uxiframe'},
		{name:'beforedeactivate',parameters:'uxiframe'},
		{name:'beforedestroy',parameters:'uxiframe'},
		{name:'beforehide',parameters:'uxiframe'},
		{name:'beforerender',parameters:'uxiframe'},
		{name:'beforeshow',parameters:'uxiframe'},
		{name:'beforestaterestore',parameters:'uxiframe,state'},
		{name:'beforestatesave',parameters:'uxiframe,state'},
		{name:'blur',parameters:'uxiframe,event'},
		{name:'boxready',parameters:'uxiframe,width,height'},
		{name:'deactivate',parameters:'uxiframe'},
		{name:'destroy',parameters:'uxiframe'},
		{name:'disable',parameters:'uxiframe'},
		{name:'enable',parameters:'uxiframe'},
		{name:'focus',parameters:'uxiframe,event'},
		{name:'focusenter',parameters:'uxiframe,event'},
		{name:'focusleave',parameters:'uxiframe,event'},
		{name:'hide',parameters:'uxiframe'},
		{name:'move',parameters:'uxiframe,x,y'},
		{name:'removed',parameters:'uxiframe,ownerCt'},
		{name:'render',parameters:'uxiframe'},
		{name:'resize',parameters:'uxiframe,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'uxiframe'},
		{name:'staterestore',parameters:'uxiframe,state'},
		{name:'statesave',parameters:'uxiframe,state'},
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
  selector: uxiframeMetaData.XTYPE,
	inputs: uxiframeMetaData.INPUTNAMES,
	outputs: uxiframeMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => uxiframe)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class uxiframe extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,uxiframeMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,uxiframeMetaData);}
}
