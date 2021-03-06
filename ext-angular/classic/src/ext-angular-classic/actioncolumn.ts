import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.column.Action
export class actioncolumnMetaData {
	public static XTYPE: string = 'actioncolumn';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeItem',
		'align',
		'alignOnScroll',
		'alignTarget',
		'allowFocusingDisabledChildren',
		'altText',
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
		'cellFocusable',
		'cellWrap',
		'childEls',
		'cls',
		'columns',
		'columnsText',
		'columnWidth',
		'componentCls',
		'componentLayout',
		'constrain',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
		'dataIndex',
		'defaultAlign',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'defaultWidth',
		'detachOnRemove',
		'dirtyText',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'editor',
		'editRenderer',
		'emptyCellText',
		'enableColumnHide',
		'enableTextSelection',
		'exportRenderer',
		'exportStyle',
		'exportSummaryRenderer',
		'field',
		'fixed',
		'flex',
		'floating',
		'focusableContainer',
		'focusCls',
		'focusOnToFront',
		'formatter',
		'formBind',
		'frame',
		'getClass',
		'getTip',
		'glyph',
		'groupable',
		'handler',
		'header',
		'headerWrap',
		'height',
		'hidden',
		'hideable',
		'hideMode',
		'html',
		'icon',
		'iconCls',
		'id',
		'ignoreExport',
		'inactiveChildTabIndex',
		'isActionDisabled',
		'isDisabled',
		'itemAriaRole',
		'itemId',
		'items',
		'itemTabIndex',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'lockable',
		'locked',
		'margin',
		'maskDefaults',
		'maskElement',
		'maxHeight',
		'maxWidth',
		'menuDisabled',
		'menuText',
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
		'producesHTML',
		'publishes',
		'reference',
		'referenceHolder',
		'region',
		'renderConfig',
		'renderData',
		'renderer',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'resetFocusPosition',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scope',
		'scrollable',
		'sealed',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'sortable',
		'sortAscText',
		'sortClearText',
		'sortDescText',
		'sorter',
		'stateEvents',
		'stateful',
		'stateId',
		'stopSelection',
		'style',
		'summaryRenderer',
		'suspendLayout',
		'tabGuard',
		'tabIndex',
		'tdCls',
		'text',
		'toFrontOnShow',
		'tooltip',
		'tooltipType',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'triggerVisible',
		'twoWayBindable',
		'ui',
		'uiCls',
		'updater',
		'userCls',
		'variableRowHeight',
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
		{name:'activate',parameters:'actioncolumn'},
		{name:'add',parameters:'actioncolumn,component,index'},
		{name:'added',parameters:'actioncolumn,container,pos'},
		{name:'afterlayout',parameters:'actioncolumn,layout'},
		{name:'afterlayoutanimation',parameters:'actioncolumn'},
		{name:'afterrender',parameters:'actioncolumn'},
		{name:'beforeactivate',parameters:'actioncolumn'},
		{name:'beforeadd',parameters:'actioncolumn,component,index'},
		{name:'beforedeactivate',parameters:'actioncolumn'},
		{name:'beforedestroy',parameters:'actioncolumn'},
		{name:'beforehide',parameters:'actioncolumn'},
		{name:'beforeremove',parameters:'actioncolumn,component'},
		{name:'beforerender',parameters:'actioncolumn'},
		{name:'beforeshow',parameters:'actioncolumn'},
		{name:'beforestaterestore',parameters:'actioncolumn,state'},
		{name:'beforestatesave',parameters:'actioncolumn,state'},
		{name:'blur',parameters:'actioncolumn,event'},
		{name:'boxready',parameters:'actioncolumn,width,height'},
		{name:'childmove',parameters:'actioncolumn,component,prevIndex,newIndex'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'deactivate',parameters:'actioncolumn'},
		{name:'destroy',parameters:'actioncolumn'},
		{name:'disable',parameters:'actioncolumn'},
		{name:'enable',parameters:'actioncolumn'},
		{name:'focus',parameters:'actioncolumn,event'},
		{name:'focusenter',parameters:'actioncolumn,event'},
		{name:'focusleave',parameters:'actioncolumn,event'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'actioncolumn'},
		{name:'menucreate',parameters:'ct,menu'},
		{name:'move',parameters:'actioncolumn,x,y'},
		{name:'remove',parameters:'actioncolumn,component'},
		{name:'removed',parameters:'actioncolumn,ownerCt'},
		{name:'render',parameters:'actioncolumn'},
		{name:'resize',parameters:'actioncolumn,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'actioncolumn'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'actioncolumn,state'},
		{name:'statesave',parameters:'actioncolumn,state'},
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
		'columnhide',
		'columnmove',
		'columnresize',
		'columnschanged',
		'columnshow',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'headerclick',
		'headercontextmenu',
		'headertriggerclick',
		'hide',
		'menucreate',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'sortchange',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: actioncolumnMetaData.XTYPE,
	inputs: actioncolumnMetaData.INPUTNAMES,
	outputs: actioncolumnMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => actioncolumn)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class actioncolumn extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,actioncolumnMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,actioncolumnMetaData);}
}
