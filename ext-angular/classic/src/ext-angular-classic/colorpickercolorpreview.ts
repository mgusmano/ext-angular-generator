import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.colorpick.ColorPreview
export class colorpickercolorpreviewMetaData {
	public static XTYPE: string = 'colorpickercolorpreview';
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
		{name:'activate',parameters:'colorpickercolorpreview'},
		{name:'added',parameters:'colorpickercolorpreview,container,pos'},
		{name:'afterlayoutanimation',parameters:'colorpickercolorpreview'},
		{name:'afterrender',parameters:'colorpickercolorpreview'},
		{name:'beforeactivate',parameters:'colorpickercolorpreview'},
		{name:'beforedeactivate',parameters:'colorpickercolorpreview'},
		{name:'beforedestroy',parameters:'colorpickercolorpreview'},
		{name:'beforehide',parameters:'colorpickercolorpreview'},
		{name:'beforerender',parameters:'colorpickercolorpreview'},
		{name:'beforeshow',parameters:'colorpickercolorpreview'},
		{name:'beforestaterestore',parameters:'colorpickercolorpreview,state'},
		{name:'beforestatesave',parameters:'colorpickercolorpreview,state'},
		{name:'blur',parameters:'colorpickercolorpreview,event'},
		{name:'boxready',parameters:'colorpickercolorpreview,width,height'},
		{name:'deactivate',parameters:'colorpickercolorpreview'},
		{name:'destroy',parameters:'colorpickercolorpreview'},
		{name:'disable',parameters:'colorpickercolorpreview'},
		{name:'enable',parameters:'colorpickercolorpreview'},
		{name:'focus',parameters:'colorpickercolorpreview,event'},
		{name:'focusenter',parameters:'colorpickercolorpreview,event'},
		{name:'focusleave',parameters:'colorpickercolorpreview,event'},
		{name:'hide',parameters:'colorpickercolorpreview'},
		{name:'move',parameters:'colorpickercolorpreview,x,y'},
		{name:'removed',parameters:'colorpickercolorpreview,ownerCt'},
		{name:'render',parameters:'colorpickercolorpreview'},
		{name:'resize',parameters:'colorpickercolorpreview,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'colorpickercolorpreview'},
		{name:'staterestore',parameters:'colorpickercolorpreview,state'},
		{name:'statesave',parameters:'colorpickercolorpreview,state'},
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
  selector: colorpickercolorpreviewMetaData.XTYPE,
	inputs: colorpickercolorpreviewMetaData.INPUTNAMES,
	outputs: colorpickercolorpreviewMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => colorpickercolorpreview)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class colorpickercolorpreview extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,colorpickercolorpreviewMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,colorpickercolorpreviewMetaData);}
}
