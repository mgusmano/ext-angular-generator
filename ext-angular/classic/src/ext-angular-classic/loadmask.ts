import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.LoadMask
export class loadmaskMetaData {
	public static XTYPE: string = 'loadmask';
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
		'msg',
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
		'store',
		'style',
		'tabIndex',
		'target',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'useMsg',
		'userCls',
		'useTargetEl',
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
		{name:'activate',parameters:'loadmask'},
		{name:'added',parameters:'loadmask,container,pos'},
		{name:'afterlayoutanimation',parameters:'loadmask'},
		{name:'afterrender',parameters:'loadmask'},
		{name:'beforeactivate',parameters:'loadmask'},
		{name:'beforedeactivate',parameters:'loadmask'},
		{name:'beforedestroy',parameters:'loadmask'},
		{name:'beforehide',parameters:'loadmask'},
		{name:'beforerender',parameters:'loadmask'},
		{name:'beforeshow',parameters:'loadmask'},
		{name:'beforestaterestore',parameters:'loadmask,state'},
		{name:'beforestatesave',parameters:'loadmask,state'},
		{name:'blur',parameters:'loadmask,event'},
		{name:'boxready',parameters:'loadmask,width,height'},
		{name:'deactivate',parameters:'loadmask'},
		{name:'destroy',parameters:'loadmask'},
		{name:'disable',parameters:'loadmask'},
		{name:'enable',parameters:'loadmask'},
		{name:'focus',parameters:'loadmask,event'},
		{name:'focusenter',parameters:'loadmask,event'},
		{name:'focusleave',parameters:'loadmask,event'},
		{name:'hide',parameters:'loadmask'},
		{name:'move',parameters:'loadmask,x,y'},
		{name:'removed',parameters:'loadmask,ownerCt'},
		{name:'render',parameters:'loadmask'},
		{name:'resize',parameters:'loadmask,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'loadmask'},
		{name:'staterestore',parameters:'loadmask,state'},
		{name:'statesave',parameters:'loadmask,state'},
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
  selector: loadmaskMetaData.XTYPE,
	inputs: loadmaskMetaData.INPUTNAMES,
	outputs: loadmaskMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => loadmask)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class loadmask extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,loadmaskMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,loadmaskMetaData);}
}
