import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Days
export class calendar_daysMetaData {
	public static XTYPE: string = 'calendar-days';
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
		'view',
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
		{name:'activate',parameters:'calendar-days'},
		{name:'add',parameters:'calendar-days,component,index'},
		{name:'added',parameters:'calendar-days,container,pos'},
		{name:'afterlayout',parameters:'calendar-days,layout'},
		{name:'afterlayoutanimation',parameters:'calendar-days'},
		{name:'afterrender',parameters:'calendar-days'},
		{name:'beforeactivate',parameters:'calendar-days'},
		{name:'beforeadd',parameters:'calendar-days,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'calendar-days'},
		{name:'beforedestroy',parameters:'calendar-days'},
		{name:'beforeeventadd',parameters:'calendar-days,context'},
		{name:'beforeeventdragstart',parameters:'calendar-days,context'},
		{name:'beforeeventedit',parameters:'calendar-days,context'},
		{name:'beforeeventresizestart',parameters:'calendar-days,context'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'calendar-days'},
		{name:'beforeremove',parameters:'calendar-days,component'},
		{name:'beforerender',parameters:'calendar-days'},
		{name:'beforeshow',parameters:'calendar-days'},
		{name:'beforestaterestore',parameters:'calendar-days,state'},
		{name:'beforestatesave',parameters:'calendar-days,state'},
		{name:'blur',parameters:'calendar-days,event'},
		{name:'boxready',parameters:'calendar-days,width,height'},
		{name:'childmove',parameters:'calendar-days,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'calendar-days'},
		{name:'destroy',parameters:'calendar-days'},
		{name:'disable',parameters:'calendar-days'},
		{name:'dockedadd',parameters:'calendar-days,component,index'},
		{name:'dockedremove',parameters:'calendar-days,component'},
		{name:'enable',parameters:'calendar-days'},
		{name:'eventadd',parameters:'calendar-days,context'},
		{name:'eventdrop',parameters:'calendar-days,context'},
		{name:'eventedit',parameters:'calendar-days,context'},
		{name:'eventresize',parameters:'calendar-days,context'},
		{name:'eventtap',parameters:'calendar-days,context'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'calendar-days,event'},
		{name:'focusenter',parameters:'calendar-days,event'},
		{name:'focusleave',parameters:'calendar-days,event'},
		{name:'glyphchange',parameters:'calendar-days,newGlyph,oldGlyph'},
		{name:'hide',parameters:'calendar-days'},
		{name:'iconchange',parameters:'p,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'p,newIconCls,oldIconCls'},
		{name:'move',parameters:'calendar-days,x,y'},
		{name:'remove',parameters:'calendar-days,component'},
		{name:'removed',parameters:'calendar-days,ownerCt'},
		{name:'render',parameters:'calendar-days'},
		{name:'resize',parameters:'calendar-days,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'calendar-days'},
		{name:'staterestore',parameters:'calendar-days,state'},
		{name:'statesave',parameters:'calendar-days,state'},
		{name:'titlechange',parameters:'p,newTitle,oldTitle'},
		{name:'unfloat',parameters:''},
		{name:'validateeventadd',parameters:'calendar-days,context'},
		{name:'validateeventdrop',parameters:'calendar-days,context'},
		{name:'validateeventedit',parameters:'calendar-days,context'},
		{name:'validateeventresize',parameters:'calendar-days,context'},
		{name:'valuechange',parameters:'calendar-days,context'},
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
		'beforeeventresizestart',
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
		'eventresize',
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
		'validateeventresize',
		'valuechange',
		'ready'
];
}
@Component({
  selector: calendar_daysMetaData.XTYPE,
	inputs: calendar_daysMetaData.INPUTNAMES,
	outputs: calendar_daysMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_days)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_days extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_daysMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_daysMetaData);}
}
