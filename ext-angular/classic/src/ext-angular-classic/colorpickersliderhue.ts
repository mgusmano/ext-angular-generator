import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.colorpick.SliderHue
export class colorpickersliderhueMetaData {
	public static XTYPE: string = 'colorpickersliderhue';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeItem',
		'alignOnScroll',
		'alignTarget',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'anchor',
		'anchorSize',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
		'autoEl',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'bind',
		'border',
		'bubbleEvents',
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
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'detachOnRemove',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'fixed',
		'flex',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'frame',
		'height',
		'hidden',
		'hideMode',
		'html',
		'id',
		'inactiveChildTabIndex',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
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
		'nameHolder',
		'overCls',
		'overflowX',
		'overflowY',
		'padding',
		'plugins',
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
		'style',
		'suspendLayout',
		'tabGuard',
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
		{name:'activate',parameters:'colorpickersliderhue'},
		{name:'add',parameters:'colorpickersliderhue,component,index'},
		{name:'added',parameters:'colorpickersliderhue,container,pos'},
		{name:'afterlayout',parameters:'colorpickersliderhue,layout'},
		{name:'afterlayoutanimation',parameters:'colorpickersliderhue'},
		{name:'afterrender',parameters:'colorpickersliderhue'},
		{name:'beforeactivate',parameters:'colorpickersliderhue'},
		{name:'beforeadd',parameters:'colorpickersliderhue,component,index'},
		{name:'beforedeactivate',parameters:'colorpickersliderhue'},
		{name:'beforedestroy',parameters:'colorpickersliderhue'},
		{name:'beforehide',parameters:'colorpickersliderhue'},
		{name:'beforeremove',parameters:'colorpickersliderhue,component'},
		{name:'beforerender',parameters:'colorpickersliderhue'},
		{name:'beforeshow',parameters:'colorpickersliderhue'},
		{name:'beforestaterestore',parameters:'colorpickersliderhue,state'},
		{name:'beforestatesave',parameters:'colorpickersliderhue,state'},
		{name:'blur',parameters:'colorpickersliderhue,event'},
		{name:'boxready',parameters:'colorpickersliderhue,width,height'},
		{name:'childmove',parameters:'colorpickersliderhue,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'colorpickersliderhue'},
		{name:'destroy',parameters:'colorpickersliderhue'},
		{name:'disable',parameters:'colorpickersliderhue'},
		{name:'enable',parameters:'colorpickersliderhue'},
		{name:'focus',parameters:'colorpickersliderhue,event'},
		{name:'focusenter',parameters:'colorpickersliderhue,event'},
		{name:'focusleave',parameters:'colorpickersliderhue,event'},
		{name:'hide',parameters:'colorpickersliderhue'},
		{name:'move',parameters:'colorpickersliderhue,x,y'},
		{name:'remove',parameters:'colorpickersliderhue,component'},
		{name:'removed',parameters:'colorpickersliderhue,ownerCt'},
		{name:'render',parameters:'colorpickersliderhue'},
		{name:'resize',parameters:'colorpickersliderhue,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'colorpickersliderhue'},
		{name:'staterestore',parameters:'colorpickersliderhue,state'},
		{name:'statesave',parameters:'colorpickersliderhue,state'},
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
		'childmove',
		'deactivate',
		'destroy',
		'disable',
		'enable',
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
		'ready'
];
}
@Component({
  selector: colorpickersliderhueMetaData.XTYPE,
	inputs: colorpickersliderhueMetaData.INPUTNAMES,
	outputs: colorpickersliderhueMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => colorpickersliderhue)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class colorpickersliderhue extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,colorpickersliderhueMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,colorpickersliderhueMetaData);}
}