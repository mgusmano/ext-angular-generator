import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.column.Column
export class templatecolumnMetaData {
	public static XTYPE: string = 'templatecolumn';
	public static INPUTNAMES: string[] = [
		'activeChildTabIndex',
		'activeItem',
		'align',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
		'autoSize',
		'axisLock',
		'bind',
		'border',
		'bottom',
		'cardSwitchAnimation',
		'cell',
		'centered',
		'cls',
		'columns',
		'computedWidth',
		'constrainAlign',
		'contentEl',
		'control',
		'controller',
		'data',
		'dataIndex',
		'defaultColumnUI',
		'defaultEditor',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultToolWeights',
		'defaultType',
		'defaultWidth',
		'disabled',
		'displayed',
		'docked',
		'draggable',
		'editable',
		'editor',
		'emptyText',
		'enterAnimation',
		'eventHandlers',
		'exitAnimation',
		'exportRenderer',
		'exportStyle',
		'exportSummaryRenderer',
		'flex',
		'floated',
		'focusableContainer',
		'focusCls',
		'formatter',
		'fullscreen',
		'grid',
		'groupable',
		'grouper',
		'groupHeaderTpl',
		'height',
		'hidden',
		'hideable',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'hideShowMenuItem',
		'html',
		'id',
		'ignore',
		'ignoreExport',
		'inactiveChildTabIndex',
		'innerCls',
		'instanceCls',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'left',
		'listeners',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxWidth',
		'menu',
		'menuDisabled',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'name',
		'nameable',
		'nameHolder',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderer',
		'renderTo',
		'reserveScrollbar',
		'resetFocusPosition',
		'resizable',
		'right',
		'ripple',
		'scope',
		'scratchCell',
		'scrollable',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'sortable',
		'sorter',
		'style',
		'summary',
		'summaryCell',
		'summaryDataIndex',
		'summaryFormatter',
		'summaryRenderer',
		'summaryType',
		'tabIndex',
		'text',
		'toFrontOnShow',
		'toolDefaults',
		'tools',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'userCls',
		'verticalOverflow',
		'viewModel',
		'weight',
		'weighted',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,gridcolumn,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:'gridcolumn,item,index'},
		{name:'added',parameters:'gridcolumn,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'gridcolumn'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'gridcolumn'},
		{name:'beforetofront',parameters:'gridcolumn'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'gridcolumn,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'deactivate',parameters:'oldActiveItem,gridcolumn,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'gridcolumn'},
		{name:'floatingchange',parameters:'gridcolumn,positioned'},
		{name:'focus',parameters:'gridcolumn,event'},
		{name:'focusenter',parameters:'gridcolumn,event'},
		{name:'focusleave',parameters:'gridcolumn,event'},
		{name:'fullscreen',parameters:'gridcolumn'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'gridcolumn'},
		{name:'initialize',parameters:'gridcolumn'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:'gridcolumn,item,toIndex,fromIndex'},
		{name:'moved',parameters:'gridcolumn,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'gridcolumn,positioned'},
		{name:'remove',parameters:'gridcolumn,item,index'},
		{name:'removed',parameters:'gridcolumn,container,index'},
		{name:'renderedchange',parameters:'gridcolumn,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'gridcolumn'},
		{name:'tofront',parameters:'gridcolumn'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'gridcolumn,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'deactivate',
		'destroy',
		'disabledchange',
		'dockedchange',
		'erased',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'rightchange',
		'scrollablechange',
		'show',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: templatecolumnMetaData.XTYPE,
	inputs: templatecolumnMetaData.INPUTNAMES,
	outputs: templatecolumnMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => templatecolumn)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class templatecolumn extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,templatecolumnMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,templatecolumnMetaData);}
}