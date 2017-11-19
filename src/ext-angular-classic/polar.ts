import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.chart.PolarChart
export class polarMetaData {
	public static XTYPE: string = 'polar';
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
		'animation',
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
		'axes',
		'background',
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
		'captions',
		'center',
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
		'colors',
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
		'downloadServerUrl',
		'draggable',
		'engine',
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
		'gradients',
		'header',
		'headerOverCls',
		'headerPosition',
		'height',
		'hidden',
		'hideCollapseTool',
		'hideMode',
		'highlightItem',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
		'id',
		'inactiveChildTabIndex',
		'innerPadding',
		'insetPadding',
		'interactions',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'lbar',
		'legend',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'mainRect',
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
		'previewAltText',
		'previewTitleText',
		'publishes',
		'radius',
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
		'resizeHandler',
		'resizeHandles',
		'saveDelay',
		'scrollable',
		'series',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'shrinkWrapDock',
		'simpleDrag',
		'sprites',
		'stateEvents',
		'stateful',
		'stateId',
		'store',
		'style',
		'surfaceZIndexes',
		'suspendLayout',
		'tabGuard',
		'tabIndex',
		'tbar',
		'theme',
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
		{name:'activate',parameters:'polar'},
		{name:'add',parameters:'polar,component,index'},
		{name:'added',parameters:'polar,container,pos'},
		{name:'afterlayout',parameters:'polar,layout'},
		{name:'afterlayoutanimation',parameters:'polar'},
		{name:'afterrender',parameters:'polar'},
		{name:'beforeactivate',parameters:'polar'},
		{name:'beforeadd',parameters:'polar,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'polar'},
		{name:'beforedestroy',parameters:'polar'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'polar'},
		{name:'beforerefresh',parameters:'polar'},
		{name:'beforeremove',parameters:'polar,component'},
		{name:'beforerender',parameters:'polar'},
		{name:'beforeshow',parameters:'polar'},
		{name:'beforestaterestore',parameters:'polar,state'},
		{name:'beforestatesave',parameters:'polar,state'},
		{name:'blur',parameters:'polar,event'},
		{name:'bodyresize',parameters:'size'},
		{name:'boxready',parameters:'polar,width,height'},
		{name:'childmove',parameters:'polar,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'polar'},
		{name:'destroy',parameters:'polar'},
		{name:'disable',parameters:'polar'},
		{name:'dockedadd',parameters:'polar,component,index'},
		{name:'dockedremove',parameters:'polar,component'},
		{name:'enable',parameters:'polar'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'polar,event'},
		{name:'focusenter',parameters:'polar,event'},
		{name:'focusleave',parameters:'polar,event'},
		{name:'glyphchange',parameters:'polar,newGlyph,oldGlyph'},
		{name:'hide',parameters:'polar'},
		{name:'iconchange',parameters:'p,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'p,newIconCls,oldIconCls'},
		{name:'itemclick',parameters:'chart,item,event'},
		{name:'itemdblclick',parameters:'chart,item,event'},
		{name:'itemhighlight',parameters:'polar,newItem,oldItem'},
		{name:'itemhighlightchange',parameters:'polar,newItem,oldItem'},
		{name:'itemmousedown',parameters:'chart,item,event'},
		{name:'itemmousemove',parameters:'chart,item,event'},
		{name:'itemmouseout',parameters:'chart,item,event'},
		{name:'itemmouseover',parameters:'chart,item,event'},
		{name:'itemmouseup',parameters:'chart,item,event'},
		{name:'itemtap',parameters:'chart,item,event'},
		{name:'layout',parameters:'polar'},
		{name:'move',parameters:'polar,x,y'},
		{name:'redraw',parameters:'polar'},
		{name:'refresh',parameters:'polar'},
		{name:'remove',parameters:'polar,component'},
		{name:'removed',parameters:'polar,ownerCt'},
		{name:'render',parameters:'polar'},
		{name:'resize',parameters:'polar,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'polar'},
		{name:'spriteclick',parameters:'sprite,event'},
		{name:'spritedblclick',parameters:'sprite,event'},
		{name:'spritemousedown',parameters:'sprite,event'},
		{name:'spritemousemove',parameters:'sprite,event'},
		{name:'spritemouseout',parameters:'sprite,event'},
		{name:'spritemouseover',parameters:'sprite,event'},
		{name:'spritemouseup',parameters:'sprite,event'},
		{name:'spritetap',parameters:'sprite,event'},
		{name:'staterestore',parameters:'polar,state'},
		{name:'statesave',parameters:'polar,state'},
		{name:'storechange',parameters:'chart,newStore,oldStore'},
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
		'beforerefresh',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'bodyresize',
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
		'itemclick',
		'itemdblclick',
		'itemhighlight',
		'itemhighlightchange',
		'itemmousedown',
		'itemmousemove',
		'itemmouseout',
		'itemmouseover',
		'itemmouseup',
		'itemtap',
		'layout',
		'move',
		'redraw',
		'refresh',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'spriteclick',
		'spritedblclick',
		'spritemousedown',
		'spritemousemove',
		'spritemouseout',
		'spritemouseover',
		'spritemouseup',
		'spritetap',
		'staterestore',
		'statesave',
		'storechange',
		'titlechange',
		'unfloat',
		'ready'
];
}
@Component({
  selector: polarMetaData.XTYPE,
	inputs: polarMetaData.INPUTNAMES,
	outputs: polarMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => polar)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class polar extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,polarMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,polarMetaData);}
}
