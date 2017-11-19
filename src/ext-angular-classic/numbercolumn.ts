import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.column.Number
export class numbercolumnMetaData {
	public static XTYPE: string = 'numbercolumn';
	public static INPUTNAMES: string[] = [
		'actions',
		'activeChildTabIndex',
		'activeCounter',
		'activeItem',
		'align',
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
		'format',
		'formatter',
		'formBind',
		'frame',
		'groupable',
		'header',
		'headerWrap',
		'height',
		'hidden',
		'hideable',
		'hideMode',
		'html',
		'id',
		'ignoreExport',
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
		{name:'activate',parameters:'numbercolumn'},
		{name:'add',parameters:'numbercolumn,component,index'},
		{name:'added',parameters:'numbercolumn,container,pos'},
		{name:'afterlayout',parameters:'numbercolumn,layout'},
		{name:'afterlayoutanimation',parameters:'numbercolumn'},
		{name:'afterrender',parameters:'numbercolumn'},
		{name:'beforeactivate',parameters:'numbercolumn'},
		{name:'beforeadd',parameters:'numbercolumn,component,index'},
		{name:'beforedeactivate',parameters:'numbercolumn'},
		{name:'beforedestroy',parameters:'numbercolumn'},
		{name:'beforehide',parameters:'numbercolumn'},
		{name:'beforeremove',parameters:'numbercolumn,component'},
		{name:'beforerender',parameters:'numbercolumn'},
		{name:'beforeshow',parameters:'numbercolumn'},
		{name:'beforestaterestore',parameters:'numbercolumn,state'},
		{name:'beforestatesave',parameters:'numbercolumn,state'},
		{name:'blur',parameters:'numbercolumn,event'},
		{name:'boxready',parameters:'numbercolumn,width,height'},
		{name:'childmove',parameters:'numbercolumn,component,prevIndex,newIndex'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'deactivate',parameters:'numbercolumn'},
		{name:'destroy',parameters:'numbercolumn'},
		{name:'disable',parameters:'numbercolumn'},
		{name:'enable',parameters:'numbercolumn'},
		{name:'focus',parameters:'numbercolumn,event'},
		{name:'focusenter',parameters:'numbercolumn,event'},
		{name:'focusleave',parameters:'numbercolumn,event'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'numbercolumn'},
		{name:'menucreate',parameters:'ct,menu'},
		{name:'move',parameters:'numbercolumn,x,y'},
		{name:'remove',parameters:'numbercolumn,component'},
		{name:'removed',parameters:'numbercolumn,ownerCt'},
		{name:'render',parameters:'numbercolumn'},
		{name:'resize',parameters:'numbercolumn,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'numbercolumn'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'numbercolumn,state'},
		{name:'statesave',parameters:'numbercolumn,state'},
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
  selector: numbercolumnMetaData.XTYPE,
	inputs: numbercolumnMetaData.INPUTNAMES,
	outputs: numbercolumnMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => numbercolumn)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class numbercolumn extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,numbercolumnMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,numbercolumnMetaData);}
}