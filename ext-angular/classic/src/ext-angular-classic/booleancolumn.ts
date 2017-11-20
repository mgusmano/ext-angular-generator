import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.column.Boolean
export class booleancolumnMetaData {
	public static XTYPE: string = 'booleancolumn';
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
		'falseText',
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
		'trueText',
		'twoWayBindable',
		'ui',
		'uiCls',
		'undefinedText',
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
		{name:'activate',parameters:'booleancolumn'},
		{name:'add',parameters:'booleancolumn,component,index'},
		{name:'added',parameters:'booleancolumn,container,pos'},
		{name:'afterlayout',parameters:'booleancolumn,layout'},
		{name:'afterlayoutanimation',parameters:'booleancolumn'},
		{name:'afterrender',parameters:'booleancolumn'},
		{name:'beforeactivate',parameters:'booleancolumn'},
		{name:'beforeadd',parameters:'booleancolumn,component,index'},
		{name:'beforedeactivate',parameters:'booleancolumn'},
		{name:'beforedestroy',parameters:'booleancolumn'},
		{name:'beforehide',parameters:'booleancolumn'},
		{name:'beforeremove',parameters:'booleancolumn,component'},
		{name:'beforerender',parameters:'booleancolumn'},
		{name:'beforeshow',parameters:'booleancolumn'},
		{name:'beforestaterestore',parameters:'booleancolumn,state'},
		{name:'beforestatesave',parameters:'booleancolumn,state'},
		{name:'blur',parameters:'booleancolumn,event'},
		{name:'boxready',parameters:'booleancolumn,width,height'},
		{name:'childmove',parameters:'booleancolumn,component,prevIndex,newIndex'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'deactivate',parameters:'booleancolumn'},
		{name:'destroy',parameters:'booleancolumn'},
		{name:'disable',parameters:'booleancolumn'},
		{name:'enable',parameters:'booleancolumn'},
		{name:'focus',parameters:'booleancolumn,event'},
		{name:'focusenter',parameters:'booleancolumn,event'},
		{name:'focusleave',parameters:'booleancolumn,event'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'booleancolumn'},
		{name:'menucreate',parameters:'ct,menu'},
		{name:'move',parameters:'booleancolumn,x,y'},
		{name:'remove',parameters:'booleancolumn,component'},
		{name:'removed',parameters:'booleancolumn,ownerCt'},
		{name:'render',parameters:'booleancolumn'},
		{name:'resize',parameters:'booleancolumn,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'booleancolumn'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'booleancolumn,state'},
		{name:'statesave',parameters:'booleancolumn,state'},
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
  selector: booleancolumnMetaData.XTYPE,
	inputs: booleancolumnMetaData.INPUTNAMES,
	outputs: booleancolumnMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => booleancolumn)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class booleancolumn extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,booleancolumnMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,booleancolumnMetaData);}
}