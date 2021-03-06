import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.column.Date
export class datecolumnMetaData {
	public static XTYPE: string = 'datecolumn';
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
		'format',
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
		{name:'activate',parameters:'newActiveItem,datecolumn,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:'datecolumn,item,index'},
		{name:'added',parameters:'datecolumn,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'datecolumn'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'datecolumn'},
		{name:'beforetofront',parameters:'datecolumn'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'datecolumn,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'deactivate',parameters:'oldActiveItem,datecolumn,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'datecolumn'},
		{name:'floatingchange',parameters:'datecolumn,positioned'},
		{name:'focus',parameters:'datecolumn,event'},
		{name:'focusenter',parameters:'datecolumn,event'},
		{name:'focusleave',parameters:'datecolumn,event'},
		{name:'fullscreen',parameters:'datecolumn'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'datecolumn'},
		{name:'initialize',parameters:'datecolumn'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:'datecolumn,item,toIndex,fromIndex'},
		{name:'moved',parameters:'datecolumn,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'datecolumn,positioned'},
		{name:'remove',parameters:'datecolumn,item,index'},
		{name:'removed',parameters:'datecolumn,container,index'},
		{name:'renderedchange',parameters:'datecolumn,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'datecolumn'},
		{name:'tofront',parameters:'datecolumn'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'datecolumn,newData'},
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
  selector: datecolumnMetaData.XTYPE,
	inputs: datecolumnMetaData.INPUTNAMES,
	outputs: datecolumnMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => datecolumn)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class datecolumn extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,datecolumnMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,datecolumnMetaData);}
}
