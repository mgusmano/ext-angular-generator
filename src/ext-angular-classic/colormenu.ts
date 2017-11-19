import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.menu.ColorPicker
export class colormenuMetaData {
	public static XTYPE: string = 'colormenu';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeItem',
		'alignOnScroll',
		'alignTarget',
		'allowFocusingDisabledChildren',
		'allowOtherMenus',
		'alwaysOnTop',
		'anchor',
		'anchorSize',
		'animateShadow',
		'animCollapse',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'ariaRole',
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
		'constrain',
		'constrainHeader',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
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
		'enableKeyNav',
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
		'hideOnClick',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'ignoreParentClicks',
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
		'mouseLeaveDelay',
		'nameable',
		'nameHolder',
		'overCls',
		'overflowX',
		'overflowY',
		'overlapHeader',
		'padding',
		'pickerId',
		'placeholder',
		'placeholderCollapseHideMode',
		'plain',
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
		'showSeparator',
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
		{name:'activate',parameters:'colormenu'},
		{name:'add',parameters:'colormenu,component,index'},
		{name:'added',parameters:'colormenu,container,pos'},
		{name:'afterlayout',parameters:'colormenu,layout'},
		{name:'afterlayoutanimation',parameters:'colormenu'},
		{name:'afterrender',parameters:'colormenu'},
		{name:'beforeactivate',parameters:'colormenu'},
		{name:'beforeadd',parameters:'colormenu,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'colormenu'},
		{name:'beforedestroy',parameters:'colormenu'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'colormenu'},
		{name:'beforeremove',parameters:'colormenu,component'},
		{name:'beforerender',parameters:'colormenu'},
		{name:'beforeshow',parameters:'colormenu'},
		{name:'beforestaterestore',parameters:'colormenu,state'},
		{name:'beforestatesave',parameters:'colormenu,state'},
		{name:'blur',parameters:'colormenu,event'},
		{name:'boxready',parameters:'colormenu,width,height'},
		{name:'childmove',parameters:'colormenu,component,prevIndex,newIndex'},
		{name:'click',parameters:''},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'colormenu'},
		{name:'destroy',parameters:'colormenu'},
		{name:'disable',parameters:'colormenu'},
		{name:'dockedadd',parameters:'colormenu,component,index'},
		{name:'dockedremove',parameters:'colormenu,component'},
		{name:'enable',parameters:'colormenu'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'colormenu,event'},
		{name:'focusenter',parameters:'colormenu,event'},
		{name:'focusleave',parameters:'colormenu,event'},
		{name:'glyphchange',parameters:'colormenu,newGlyph,oldGlyph'},
		{name:'hide',parameters:'colormenu'},
		{name:'iconchange',parameters:'p,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'p,newIconCls,oldIconCls'},
		{name:'mouseenter',parameters:'menu,e'},
		{name:'mouseleave',parameters:'menu,e'},
		{name:'mouseover',parameters:'menu,item,e'},
		{name:'move',parameters:'colormenu,x,y'},
		{name:'remove',parameters:'colormenu,component'},
		{name:'removed',parameters:'colormenu,ownerCt'},
		{name:'render',parameters:'colormenu'},
		{name:'resize',parameters:'colormenu,width,height,oldWidth,oldHeight'},
		{name:'select',parameters:'colormenu,color'},
		{name:'show',parameters:'colormenu'},
		{name:'staterestore',parameters:'colormenu,state'},
		{name:'statesave',parameters:'colormenu,state'},
		{name:'titlechange',parameters:'p,newTitle,oldTitle'},
		{name:'unfloat',parameters:''},
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
		'click',
		'close',
		'collapse',
		'deactivate',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'expand',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconchange',
		'iconclschange',
		'mouseenter',
		'mouseleave',
		'mouseover',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'select',
		'show',
		'staterestore',
		'statesave',
		'titlechange',
		'unfloat',
		'ready'
];
}
@Component({
  selector: colormenuMetaData.XTYPE,
	inputs: colormenuMetaData.INPUTNAMES,
	outputs: colormenuMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => colormenu)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class colormenu extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,colormenuMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,colormenuMetaData);}
}
