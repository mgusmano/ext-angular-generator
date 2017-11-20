import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.view.Multi
export class calendar_multiviewMetaData {
	public static XTYPE: string = 'calendar-multiview';
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
		'compact',
		'compactOptions',
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
		'defaultView',
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
		'store',
		'style',
		'suspendLayout',
		'tabGuard',
		'tabIndex',
		'timezoneOffset',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'value',
		'viewModel',
		'views',
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
		{name:'activate',parameters:'calendar-multiview'},
		{name:'add',parameters:'calendar-multiview,component,index'},
		{name:'added',parameters:'calendar-multiview,container,pos'},
		{name:'afterlayout',parameters:'calendar-multiview,layout'},
		{name:'afterlayoutanimation',parameters:'calendar-multiview'},
		{name:'afterrender',parameters:'calendar-multiview'},
		{name:'beforeactivate',parameters:'calendar-multiview'},
		{name:'beforeadd',parameters:'calendar-multiview,component,index'},
		{name:'beforedeactivate',parameters:'calendar-multiview'},
		{name:'beforedestroy',parameters:'calendar-multiview'},
		{name:'beforehide',parameters:'calendar-multiview'},
		{name:'beforeremove',parameters:'calendar-multiview,component'},
		{name:'beforerender',parameters:'calendar-multiview'},
		{name:'beforeshow',parameters:'calendar-multiview'},
		{name:'beforestaterestore',parameters:'calendar-multiview,state'},
		{name:'beforestatesave',parameters:'calendar-multiview,state'},
		{name:'blur',parameters:'calendar-multiview,event'},
		{name:'boxready',parameters:'calendar-multiview,width,height'},
		{name:'childmove',parameters:'calendar-multiview,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'calendar-multiview'},
		{name:'destroy',parameters:'calendar-multiview'},
		{name:'disable',parameters:'calendar-multiview'},
		{name:'enable',parameters:'calendar-multiview'},
		{name:'focus',parameters:'calendar-multiview,event'},
		{name:'focusenter',parameters:'calendar-multiview,event'},
		{name:'focusleave',parameters:'calendar-multiview,event'},
		{name:'hide',parameters:'calendar-multiview'},
		{name:'move',parameters:'calendar-multiview,x,y'},
		{name:'remove',parameters:'calendar-multiview,component'},
		{name:'removed',parameters:'calendar-multiview,ownerCt'},
		{name:'render',parameters:'calendar-multiview'},
		{name:'resize',parameters:'calendar-multiview,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'calendar-multiview'},
		{name:'staterestore',parameters:'calendar-multiview,state'},
		{name:'statesave',parameters:'calendar-multiview,state'},
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
  selector: calendar_multiviewMetaData.XTYPE,
	inputs: calendar_multiviewMetaData.INPUTNAMES,
	outputs: calendar_multiviewMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_multiview)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_multiview extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_multiviewMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_multiviewMetaData);}
}
