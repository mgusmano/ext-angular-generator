import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.colorpick.SliderAlpha
export class colorpickerslideralphaMetaData {
	public static XTYPE: string = 'colorpickerslideralpha';
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
		{name:'activate',parameters:'colorpickerslideralpha'},
		{name:'add',parameters:'colorpickerslideralpha,component,index'},
		{name:'added',parameters:'colorpickerslideralpha,container,pos'},
		{name:'afterlayout',parameters:'colorpickerslideralpha,layout'},
		{name:'afterlayoutanimation',parameters:'colorpickerslideralpha'},
		{name:'afterrender',parameters:'colorpickerslideralpha'},
		{name:'beforeactivate',parameters:'colorpickerslideralpha'},
		{name:'beforeadd',parameters:'colorpickerslideralpha,component,index'},
		{name:'beforedeactivate',parameters:'colorpickerslideralpha'},
		{name:'beforedestroy',parameters:'colorpickerslideralpha'},
		{name:'beforehide',parameters:'colorpickerslideralpha'},
		{name:'beforeremove',parameters:'colorpickerslideralpha,component'},
		{name:'beforerender',parameters:'colorpickerslideralpha'},
		{name:'beforeshow',parameters:'colorpickerslideralpha'},
		{name:'beforestaterestore',parameters:'colorpickerslideralpha,state'},
		{name:'beforestatesave',parameters:'colorpickerslideralpha,state'},
		{name:'blur',parameters:'colorpickerslideralpha,event'},
		{name:'boxready',parameters:'colorpickerslideralpha,width,height'},
		{name:'childmove',parameters:'colorpickerslideralpha,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'colorpickerslideralpha'},
		{name:'destroy',parameters:'colorpickerslideralpha'},
		{name:'disable',parameters:'colorpickerslideralpha'},
		{name:'enable',parameters:'colorpickerslideralpha'},
		{name:'focus',parameters:'colorpickerslideralpha,event'},
		{name:'focusenter',parameters:'colorpickerslideralpha,event'},
		{name:'focusleave',parameters:'colorpickerslideralpha,event'},
		{name:'hide',parameters:'colorpickerslideralpha'},
		{name:'move',parameters:'colorpickerslideralpha,x,y'},
		{name:'remove',parameters:'colorpickerslideralpha,component'},
		{name:'removed',parameters:'colorpickerslideralpha,ownerCt'},
		{name:'render',parameters:'colorpickerslideralpha'},
		{name:'resize',parameters:'colorpickerslideralpha,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'colorpickerslideralpha'},
		{name:'staterestore',parameters:'colorpickerslideralpha,state'},
		{name:'statesave',parameters:'colorpickerslideralpha,state'},
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
  selector: colorpickerslideralphaMetaData.XTYPE,
	inputs: colorpickerslideralphaMetaData.INPUTNAMES,
	outputs: colorpickerslideralphaMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => colorpickerslideralpha)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class colorpickerslideralpha extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,colorpickerslideralphaMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,colorpickerslideralphaMetaData);}
}
