import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.Img
export class imageMetaData {
	public static XTYPE: string = 'image';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'alignOnScroll',
		'alignTarget',
		'alt',
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
		'glyph',
		'glyph',
		'height',
		'hidden',
		'hideMode',
		'html',
		'id',
		'imgCls',
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
		'src',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'tabIndex',
		'title',
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
		{name:'activate',parameters:'image'},
		{name:'added',parameters:'image,container,pos'},
		{name:'afterlayoutanimation',parameters:'image'},
		{name:'afterrender',parameters:'image'},
		{name:'beforeactivate',parameters:'image'},
		{name:'beforedeactivate',parameters:'image'},
		{name:'beforedestroy',parameters:'image'},
		{name:'beforehide',parameters:'image'},
		{name:'beforerender',parameters:'image'},
		{name:'beforeshow',parameters:'image'},
		{name:'beforestaterestore',parameters:'image,state'},
		{name:'beforestatesave',parameters:'image,state'},
		{name:'blur',parameters:'image,event'},
		{name:'boxready',parameters:'image,width,height'},
		{name:'deactivate',parameters:'image'},
		{name:'destroy',parameters:'image'},
		{name:'disable',parameters:'image'},
		{name:'enable',parameters:'image'},
		{name:'focus',parameters:'image,event'},
		{name:'focusenter',parameters:'image,event'},
		{name:'focusleave',parameters:'image,event'},
		{name:'hide',parameters:'image'},
		{name:'move',parameters:'image,x,y'},
		{name:'removed',parameters:'image,ownerCt'},
		{name:'render',parameters:'image'},
		{name:'resize',parameters:'image,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'image'},
		{name:'staterestore',parameters:'image,state'},
		{name:'statesave',parameters:'image,state'},
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
  selector: imageMetaData.XTYPE,
	inputs: imageMetaData.INPUTNAMES,
	outputs: imageMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => image)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class image extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,imageMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,imageMetaData);}
}
