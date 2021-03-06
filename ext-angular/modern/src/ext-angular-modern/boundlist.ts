import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.dataview.BoundList
export class boundlistMetaData {
	public static XTYPE: string = 'boundlist';
	public static INPUTNAMES: string[] = [
		'activeChildTabIndex',
		'activeItem',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'associatedData',
		'autoDestroy',
		'autoSize',
		'axisLock',
		'bind',
		'border',
		'bottom',
		'bufferSize',
		'cardSwitchAnimation',
		'centered',
		'cls',
		'constrainAlign',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'deferEmptyText',
		'deselectOnContainerClick',
		'disabled',
		'disableSelection',
		'disclosureProperty',
		'displayed',
		'docked',
		'draggable',
		'emptyItemText',
		'emptyState',
		'emptyText',
		'emptyTextDefaults',
		'emptyTextProperty',
		'enableTextSelection',
		'enterAnimation',
		'eventHandlers',
		'exitAnimation',
		'flex',
		'floated',
		'focusableContainer',
		'focusCls',
		'fullscreen',
		'grouped',
		'groupFooter',
		'groupHeader',
		'height',
		'hidden',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'horizontalOverflow',
		'html',
		'id',
		'inactiveChildTabIndex',
		'indexBar',
		'infinite',
		'inline',
		'innerCls',
		'innerCtHeight',
		'innerWidth',
		'instanceCls',
		'itemCls',
		'itemConfig',
		'itemContentCls',
		'itemCount',
		'itemDataMap',
		'itemId',
		'itemInnerCls',
		'itemRipple',
		'items',
		'itemsFocusable',
		'itemTpl',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'left',
		'listeners',
		'loadingHeight',
		'loadingText',
		'maintainChildNodes',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxItemCache',
		'maxWidth',
		'minHeight',
		'minimumBufferDistance',
		'minWidth',
		'modal',
		'modelValidation',
		'name',
		'nameable',
		'nameHolder',
		'navigationModel',
		'onItemDisclosure',
		'padding',
		'pinFooters',
		'pinHeaders',
		'pinnedFooter',
		'pinnedFooterHeight',
		'pinnedHeader',
		'pinnedHeaderHeight',
		'plugins',
		'pressedDelay',
		'preventSelectionOnDisclose',
		'preventSelectionOnTool',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderTo',
		'resetFocusPosition',
		'right',
		'ripple',
		'rowLines',
		'scrollable',
		'scrollDock',
		'scrollToTopOnRefresh',
		'selectable',
		'selection',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'store',
		'storeEventListeners',
		'striped',
		'style',
		'tabIndex',
		'toFrontOnShow',
		'tooltip',
		'top',
		'topRenderedIndex',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'translationMethod',
		'triggerCtEvent',
		'triggerEvent',
		'twoWayBindable',
		'ui',
		'userCls',
		'useSimpleItems',
		'variableHeights',
		'verticalOverflow',
		'viewModel',
		'visibleHeight',
		'visibleLeft',
		'visibleTop',
		'visibleWidth',
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
		{name:'activate',parameters:'newActiveItem,boundlist,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:''},
		{name:'added',parameters:'boundlist,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'boundlist'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'boundlist'},
		{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforetofront',parameters:'boundlist'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'boundlist,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'childdoubletap',parameters:'boundlist,location'},
		{name:'childlongpress',parameters:'boundlist,location'},
		{name:'childmouseenter',parameters:'boundlist,location'},
		{name:'childmouseleave',parameters:'boundlist,location'},
		{name:'childsingletap',parameters:'boundlist,location'},
		{name:'childtap',parameters:'boundlist,location'},
		{name:'childtaphold',parameters:'boundlist,location'},
		{name:'childtouchcancel',parameters:'boundlist,location'},
		{name:'childtouchend',parameters:'boundlist,location'},
		{name:'childtouchmove',parameters:'boundlist,location'},
		{name:'childtouchstart',parameters:'boundlist,location'},
		{name:'deactivate',parameters:'oldActiveItem,boundlist,newActiveItem'},
		{name:'deselect',parameters:'boundlist,records'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'disclose',parameters:'list,record,target,index,event'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'boundlist'},
		{name:'floatingchange',parameters:'boundlist,positioned'},
		{name:'focus',parameters:'boundlist,event'},
		{name:'focusenter',parameters:'boundlist,event'},
		{name:'focusleave',parameters:'boundlist,event'},
		{name:'fullscreen',parameters:'boundlist'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'boundlist'},
		{name:'initialize',parameters:'boundlist'},
		{name:'itemaction',parameters:'boundlist,index,record,action'},
		{name:'itemdoubletap',parameters:'boundlist,index,target,record,e'},
		{name:'itemlongpress',parameters:'boundlist,index,target,record,e'},
		{name:'itemmouseenter',parameters:'boundlist,index,target,record,e'},
		{name:'itemmouseleave',parameters:'boundlist,index,target,record,e'},
		{name:'itemsingletap',parameters:'boundlist,index,target,record,e'},
		{name:'itemswipe',parameters:'boundlist,index,target,record,e'},
		{name:'itemtap',parameters:'boundlist,index,target,record,e'},
		{name:'itemtaphold',parameters:'boundlist,index,target,record,e'},
		{name:'itemtouchcancel',parameters:'boundlist,index,target,record,e'},
		{name:'itemtouchend',parameters:'boundlist,index,target,record,e'},
		{name:'itemtouchmove',parameters:'boundlist,index,target,record,e'},
		{name:'itemtouchstart',parameters:'boundlist,index,target,record,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'boundlist,container,toIndex,fromIndex'},
		{name:'navigate',parameters:'boundlist,to,from'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'boundlist,positioned'},
		{name:'refresh',parameters:'boundlist'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'boundlist,container,index'},
		{name:'renderedchange',parameters:'boundlist,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'boundlist,records'},
		{name:'show',parameters:'boundlist'},
		{name:'storechange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'boundlist'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'boundlist,newData'},
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
		'beforestorechange',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'childdoubletap',
		'childlongpress',
		'childmouseenter',
		'childmouseleave',
		'childsingletap',
		'childtap',
		'childtaphold',
		'childtouchcancel',
		'childtouchend',
		'childtouchmove',
		'childtouchstart',
		'deactivate',
		'deselect',
		'destroy',
		'disabledchange',
		'disclose',
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
		'itemaction',
		'itemdoubletap',
		'itemlongpress',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchcancel',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'navigate',
		'orientationchange',
		'painted',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'rightchange',
		'scrollablechange',
		'select',
		'show',
		'storechange',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: boundlistMetaData.XTYPE,
	inputs: boundlistMetaData.INPUTNAMES,
	outputs: boundlistMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => boundlist)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class boundlist extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,boundlistMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,boundlistMetaData);}
}
