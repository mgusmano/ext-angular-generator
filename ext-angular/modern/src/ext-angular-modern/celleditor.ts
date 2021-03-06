import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.CellEditor
export class celleditorMetaData {
	public static XTYPE: string = 'celleditor';
	public static INPUTNAMES: string[] = [
		'activeChildTabIndex',
		'activeItem',
		'alignment',
		'allowBlur',
		'allowFocusingDisabledChildren',
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoDestroy',
		'autoPin',
		'autoSize',
		'axisLock',
		'bind',
		'border',
		'bottom',
		'cancelOnClear',
		'cancelOnEsc',
		'cardSwitchAnimation',
		'centered',
		'cls',
		'completeOnEnter',
		'constrain',
		'constrainAlign',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultFocus',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'disabled',
		'displayed',
		'docked',
		'draggable',
		'enterAnimation',
		'eventHandlers',
		'exitAnimation',
		'field',
		'flex',
		'floated',
		'focusableContainer',
		'focusCls',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideEl',
		'hideMode',
		'hideOnMaskTap',
		'html',
		'id',
		'ignoreNoChange',
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
		'matchFont',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'name',
		'nameable',
		'nameHolder',
		'offset',
		'padding',
		'parentEl',
		'plugins',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderTo',
		'resetFocusPosition',
		'revertInvalid',
		'right',
		'ripple',
		'scrollable',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'style',
		'swallowKeys',
		'tabIndex',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'updateEl',
		'userCls',
		'value',
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
		{name:'activate',parameters:'newActiveItem,celleditor,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:'celleditor,item,index'},
		{name:'added',parameters:'celleditor,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecomplete',parameters:'celleditor,value,startValue'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'celleditor'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'celleditor'},
		{name:'beforestartedit',parameters:'celleditor,boundEl,value'},
		{name:'beforetofront',parameters:'celleditor'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'celleditor,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'canceledit',parameters:'celleditor,value,startValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'complete',parameters:'celleditor,value,startValue'},
		{name:'deactivate',parameters:'oldActiveItem,celleditor,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'celleditor'},
		{name:'floatingchange',parameters:'celleditor,positioned'},
		{name:'focus',parameters:'celleditor,event'},
		{name:'focusenter',parameters:'celleditor,event'},
		{name:'focusleave',parameters:'celleditor,event'},
		{name:'fullscreen',parameters:'celleditor'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'celleditor'},
		{name:'initialize',parameters:'celleditor'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:'celleditor,item,toIndex,fromIndex'},
		{name:'moved',parameters:'celleditor,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'celleditor,positioned'},
		{name:'remove',parameters:'celleditor,item,index'},
		{name:'removed',parameters:'celleditor,container,index'},
		{name:'renderedchange',parameters:'celleditor,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'celleditor'},
		{name:'specialkey',parameters:'celleditor,field,event'},
		{name:'startedit',parameters:'celleditor,boundEl,value'},
		{name:'tofront',parameters:'celleditor'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'celleditor,newData'},
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
		'beforecomplete',
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
		'beforestartedit',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'canceledit',
		'centeredchange',
		'complete',
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
		'specialkey',
		'startedit',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: celleditorMetaData.XTYPE,
	inputs: celleditorMetaData.INPUTNAMES,
	outputs: celleditorMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => celleditor)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class celleditor extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,celleditorMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,celleditorMetaData);}
}
