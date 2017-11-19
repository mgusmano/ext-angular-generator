import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Month
export class calendar_monthMetaData {
	public static XTYPE: string = 'calendar-month';
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
		'animCollapse',
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
		'bbar',
		'bind',
		'bodyBorder',
		'bodyCls',
		'bodyPadding',
		'bodyStyle',
		'border',
		'bubbleEvents',
		'buttonAlign',
		'buttons',
		'childEls',
		'closable',
		'closeAction',
		'closeToolText',
		'cls',
		'collapsed',
		'collapsedCls',
		'collapseDirection',
		'collapseFirst',
		'collapseMode',
		'collapseToolText',
		'collapsible',
		'columnWidth',
		'componentCls',
		'componentLayout',
		'configExtractor',
		'constrain',
		'constrainHeader',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
		'dayHeader',
		'defaultAlign',
		'defaultButton',
		'defaultButtonTarget',
		'defaultDockWeights',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'detachOnRemove',
		'disabled',
		'disabledCls',
		'dock',
		'dockedItems',
		'draggable',
		'eventRelayers',
		'expandToolText',
		'fbar',
		'fixed',
		'flex',
		'floatable',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'frame',
		'frameHeader',
		'glyph',
		'header',
		'headerOverCls',
		'headerPosition',
		'height',
		'hidden',
		'hideCollapseTool',
		'hideMode',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'inactiveChildTabIndex',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'lbar',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'manageHeight',
		'margin',
		'maskDefaults',
		'maskElement',
		'maxHeight',
		'maxWidth',
		'minButtonWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'nameable',
		'nameHolder',
		'overCls',
		'overflowX',
		'overflowY',
		'overlapHeader',
		'padding',
		'placeholder',
		'placeholderCollapseHideMode',
		'plugins',
		'preventHeader',
		'publishes',
		'rbar',
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
		'shrinkWrapDock',
		'simpleDrag',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'suspendLayout',
		'tabGuard',
		'tabIndex',
		'tbar',
		'title',
		'titleAlign',
		'titleCollapse',
		'titleRotation',
		'toFrontOnShow',
		'tools',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'value',
		'view',
		'viewModel',
		'visibleWeeks',
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
		{name:'activate',parameters:'calendar-month'},
		{name:'add',parameters:'calendar-month,component,index'},
		{name:'added',parameters:'calendar-month,container,pos'},
		{name:'afterlayout',parameters:'calendar-month,layout'},
		{name:'afterlayoutanimation',parameters:'calendar-month'},
		{name:'afterrender',parameters:'calendar-month'},
		{name:'beforeactivate',parameters:'calendar-month'},
		{name:'beforeadd',parameters:'calendar-month,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'calendar-month'},
		{name:'beforedestroy',parameters:'calendar-month'},
		{name:'beforeeventadd',parameters:'calendar-month,context'},
		{name:'beforeeventdragstart',parameters:'calendar-month,context'},
		{name:'beforeeventedit',parameters:'calendar-month,context'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'calendar-month'},
		{name:'beforeremove',parameters:'calendar-month,component'},
		{name:'beforerender',parameters:'calendar-month'},
		{name:'beforeshow',parameters:'calendar-month'},
		{name:'beforestaterestore',parameters:'calendar-month,state'},
		{name:'beforestatesave',parameters:'calendar-month,state'},
		{name:'blur',parameters:'calendar-month,event'},
		{name:'boxready',parameters:'calendar-month,width,height'},
		{name:'childmove',parameters:'calendar-month,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'calendar-month'},
		{name:'destroy',parameters:'calendar-month'},
		{name:'disable',parameters:'calendar-month'},
		{name:'dockedadd',parameters:'calendar-month,component,index'},
		{name:'dockedremove',parameters:'calendar-month,component'},
		{name:'enable',parameters:'calendar-month'},
		{name:'eventadd',parameters:'calendar-month,context'},
		{name:'eventdrop',parameters:'calendar-month,context'},
		{name:'eventedit',parameters:'calendar-month,context'},
		{name:'eventtap',parameters:'calendar-month,context'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'calendar-month,event'},
		{name:'focusenter',parameters:'calendar-month,event'},
		{name:'focusleave',parameters:'calendar-month,event'},
		{name:'glyphchange',parameters:'calendar-month,newGlyph,oldGlyph'},
		{name:'hide',parameters:'calendar-month'},
		{name:'iconchange',parameters:'p,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'p,newIconCls,oldIconCls'},
		{name:'move',parameters:'calendar-month,x,y'},
		{name:'remove',parameters:'calendar-month,component'},
		{name:'removed',parameters:'calendar-month,ownerCt'},
		{name:'render',parameters:'calendar-month'},
		{name:'resize',parameters:'calendar-month,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'calendar-month'},
		{name:'staterestore',parameters:'calendar-month,state'},
		{name:'statesave',parameters:'calendar-month,state'},
		{name:'titlechange',parameters:'p,newTitle,oldTitle'},
		{name:'unfloat',parameters:''},
		{name:'validateeventadd',parameters:'calendar-month,context'},
		{name:'validateeventdrop',parameters:'calendar-month,context'},
		{name:'validateeventedit',parameters:'calendar-month,context'},
		{name:'valuechange',parameters:'calendar-month,context'},
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
		'beforeclose',
		'beforecollapse',
		'beforedeactivate',
		'beforedestroy',
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'beforeexpand',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'childmove',
		'close',
		'collapse',
		'deactivate',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventtap',
		'expand',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconchange',
		'iconclschange',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'titlechange',
		'unfloat',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'valuechange',
		'ready'
];
}
@Component({
  selector: calendar_monthMetaData.XTYPE,
	inputs: calendar_monthMetaData.INPUTNAMES,
	outputs: calendar_monthMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_month)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_month extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_monthMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_monthMetaData);}
}
