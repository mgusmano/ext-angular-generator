import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.panel.Weeks
export class calendar_weeksMetaData {
	public static XTYPE: string = 'calendar-weeks';
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
		{name:'activate',parameters:'calendar-weeks'},
		{name:'add',parameters:'calendar-weeks,component,index'},
		{name:'added',parameters:'calendar-weeks,container,pos'},
		{name:'afterlayout',parameters:'calendar-weeks,layout'},
		{name:'afterlayoutanimation',parameters:'calendar-weeks'},
		{name:'afterrender',parameters:'calendar-weeks'},
		{name:'beforeactivate',parameters:'calendar-weeks'},
		{name:'beforeadd',parameters:'calendar-weeks,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'calendar-weeks'},
		{name:'beforedestroy',parameters:'calendar-weeks'},
		{name:'beforeeventadd',parameters:'calendar-weeks,context'},
		{name:'beforeeventdragstart',parameters:'calendar-weeks,context'},
		{name:'beforeeventedit',parameters:'calendar-weeks,context'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'calendar-weeks'},
		{name:'beforeremove',parameters:'calendar-weeks,component'},
		{name:'beforerender',parameters:'calendar-weeks'},
		{name:'beforeshow',parameters:'calendar-weeks'},
		{name:'beforestaterestore',parameters:'calendar-weeks,state'},
		{name:'beforestatesave',parameters:'calendar-weeks,state'},
		{name:'blur',parameters:'calendar-weeks,event'},
		{name:'boxready',parameters:'calendar-weeks,width,height'},
		{name:'childmove',parameters:'calendar-weeks,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'calendar-weeks'},
		{name:'destroy',parameters:'calendar-weeks'},
		{name:'disable',parameters:'calendar-weeks'},
		{name:'dockedadd',parameters:'calendar-weeks,component,index'},
		{name:'dockedremove',parameters:'calendar-weeks,component'},
		{name:'enable',parameters:'calendar-weeks'},
		{name:'eventadd',parameters:'calendar-weeks,context'},
		{name:'eventdrop',parameters:'calendar-weeks,context'},
		{name:'eventedit',parameters:'calendar-weeks,context'},
		{name:'eventtap',parameters:'calendar-weeks,context'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'calendar-weeks,event'},
		{name:'focusenter',parameters:'calendar-weeks,event'},
		{name:'focusleave',parameters:'calendar-weeks,event'},
		{name:'glyphchange',parameters:'calendar-weeks,newGlyph,oldGlyph'},
		{name:'hide',parameters:'calendar-weeks'},
		{name:'iconchange',parameters:'p,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'p,newIconCls,oldIconCls'},
		{name:'move',parameters:'calendar-weeks,x,y'},
		{name:'remove',parameters:'calendar-weeks,component'},
		{name:'removed',parameters:'calendar-weeks,ownerCt'},
		{name:'render',parameters:'calendar-weeks'},
		{name:'resize',parameters:'calendar-weeks,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'calendar-weeks'},
		{name:'staterestore',parameters:'calendar-weeks,state'},
		{name:'statesave',parameters:'calendar-weeks,state'},
		{name:'titlechange',parameters:'p,newTitle,oldTitle'},
		{name:'unfloat',parameters:''},
		{name:'validateeventadd',parameters:'calendar-weeks,context'},
		{name:'validateeventdrop',parameters:'calendar-weeks,context'},
		{name:'validateeventedit',parameters:'calendar-weeks,context'},
		{name:'valuechange',parameters:'calendar-weeks,context'},
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
  selector: calendar_weeksMetaData.XTYPE,
	inputs: calendar_weeksMetaData.INPUTNAMES,
	outputs: calendar_weeksMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_weeks)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_weeks extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_weeksMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_weeksMetaData);}
}
