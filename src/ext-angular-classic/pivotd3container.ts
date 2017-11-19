import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.pivot.d3.Container
export class pivotd3containerMetaData {
	public static XTYPE: string = 'pivotd3container';
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
		'configurator',
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
		'drawing',
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
		'matrix',
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
		{name:'activate',parameters:'pivotd3container'},
		{name:'add',parameters:'pivotd3container,component,index'},
		{name:'added',parameters:'pivotd3container,container,pos'},
		{name:'afterlayout',parameters:'pivotd3container,layout'},
		{name:'afterlayoutanimation',parameters:'pivotd3container'},
		{name:'afterrender',parameters:'pivotd3container'},
		{name:'beforeactivate',parameters:'pivotd3container'},
		{name:'beforeadd',parameters:'pivotd3container,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'pivotd3container'},
		{name:'beforedestroy',parameters:'pivotd3container'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'pivotd3container'},
		{name:'beforeremove',parameters:'pivotd3container,component'},
		{name:'beforerender',parameters:'pivotd3container'},
		{name:'beforeshow',parameters:'pivotd3container'},
		{name:'beforestaterestore',parameters:'pivotd3container,state'},
		{name:'beforestatesave',parameters:'pivotd3container,state'},
		{name:'blur',parameters:'pivotd3container,event'},
		{name:'boxready',parameters:'pivotd3container,width,height'},
		{name:'childmove',parameters:'pivotd3container,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'pivotd3container'},
		{name:'destroy',parameters:'pivotd3container'},
		{name:'disable',parameters:'pivotd3container'},
		{name:'dockedadd',parameters:'pivotd3container,component,index'},
		{name:'dockedremove',parameters:'pivotd3container,component'},
		{name:'enable',parameters:'pivotd3container'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'pivotd3container,event'},
		{name:'focusenter',parameters:'pivotd3container,event'},
		{name:'focusleave',parameters:'pivotd3container,event'},
		{name:'glyphchange',parameters:'pivotd3container,newGlyph,oldGlyph'},
		{name:'hide',parameters:'pivotd3container'},
		{name:'iconchange',parameters:'p,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'p,newIconCls,oldIconCls'},
		{name:'move',parameters:'pivotd3container,x,y'},
		{name:'remove',parameters:'pivotd3container,component'},
		{name:'removed',parameters:'pivotd3container,ownerCt'},
		{name:'render',parameters:'pivotd3container'},
		{name:'resize',parameters:'pivotd3container,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'pivotd3container'},
		{name:'staterestore',parameters:'pivotd3container,state'},
		{name:'statesave',parameters:'pivotd3container,state'},
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
		'ready'
];
}
@Component({
  selector: pivotd3containerMetaData.XTYPE,
	inputs: pivotd3containerMetaData.INPUTNAMES,
	outputs: pivotd3containerMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => pivotd3container)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class pivotd3container extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,pivotd3containerMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,pivotd3containerMetaData);}
}
