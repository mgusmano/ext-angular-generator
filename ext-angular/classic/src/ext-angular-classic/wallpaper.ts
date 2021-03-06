import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.desktop.Wallpaper
export class wallpaperMetaData {
	public static XTYPE: string = 'wallpaper';
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
		{name:'activate',parameters:'wallpaper'},
		{name:'added',parameters:'wallpaper,container,pos'},
		{name:'afterlayoutanimation',parameters:'wallpaper'},
		{name:'afterrender',parameters:'wallpaper'},
		{name:'beforeactivate',parameters:'wallpaper'},
		{name:'beforedeactivate',parameters:'wallpaper'},
		{name:'beforedestroy',parameters:'wallpaper'},
		{name:'beforehide',parameters:'wallpaper'},
		{name:'beforerender',parameters:'wallpaper'},
		{name:'beforeshow',parameters:'wallpaper'},
		{name:'beforestaterestore',parameters:'wallpaper,state'},
		{name:'beforestatesave',parameters:'wallpaper,state'},
		{name:'blur',parameters:'wallpaper,event'},
		{name:'boxready',parameters:'wallpaper,width,height'},
		{name:'deactivate',parameters:'wallpaper'},
		{name:'destroy',parameters:'wallpaper'},
		{name:'disable',parameters:'wallpaper'},
		{name:'enable',parameters:'wallpaper'},
		{name:'focus',parameters:'wallpaper,event'},
		{name:'focusenter',parameters:'wallpaper,event'},
		{name:'focusleave',parameters:'wallpaper,event'},
		{name:'hide',parameters:'wallpaper'},
		{name:'move',parameters:'wallpaper,x,y'},
		{name:'removed',parameters:'wallpaper,ownerCt'},
		{name:'render',parameters:'wallpaper'},
		{name:'resize',parameters:'wallpaper,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'wallpaper'},
		{name:'staterestore',parameters:'wallpaper,state'},
		{name:'statesave',parameters:'wallpaper,state'},
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
  selector: wallpaperMetaData.XTYPE,
	inputs: wallpaperMetaData.INPUTNAMES,
	outputs: wallpaperMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => wallpaper)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class wallpaper extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,wallpaperMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,wallpaperMetaData);}
}
