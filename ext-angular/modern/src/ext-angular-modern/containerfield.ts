import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.field.Container
export class containerfieldMetaData {
	public static XTYPE: string = 'containerfield';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoFitErrors',
		'autoSize',
		'axisLock',
		'bind',
		'bodyAlign',
		'border',
		'bottom',
		'centered',
		'cls',
		'constrainAlign',
		'container',
		'container',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'disabled',
		'displayed',
		'docked',
		'draggable',
		'enterAnimation',
		'error',
		'errorMessage',
		'errorTarget',
		'errorTip',
		'errorTpl',
		'eventHandlers',
		'exitAnimation',
		'flex',
		'floated',
		'focusCls',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'html',
		'id',
		'inline',
		'instanceCls',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'label',
		'labelAlign',
		'labelCls',
		'labelMinWidth',
		'labelTextAlign',
		'labelWidth',
		'labelWrap',
		'layout',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'name',
		'nameable',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderTo',
		'required',
		'requiredMessage',
		'right',
		'ripple',
		'scrollable',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'sideError',
		'style',
		'tabIndex',
		'tipError',
		'titleError',
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
		'underError',
		'userCls',
		'validateDisabled',
		'validationMessage',
		'validators',
		'value',
		'viewModel',
		'weight',
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
		{name:'added',parameters:'containerfield,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'containerfield'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'containerfield'},
		{name:'beforetofront',parameters:'containerfield'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'containerfield,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'change',parameters:'containerfield,newValue,oldValue'},
		{name:'click',parameters:'e'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'containerfield'},
		{name:'errorchange',parameters:'containerfield,error'},
		{name:'floatingchange',parameters:'containerfield,positioned'},
		{name:'focus',parameters:'containerfield,event'},
		{name:'focusenter',parameters:'containerfield,event'},
		{name:'focusleave',parameters:'containerfield,event'},
		{name:'fullscreen',parameters:'containerfield'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'containerfield'},
		{name:'initialize',parameters:'containerfield'},
		{name:'keyup',parameters:'e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'mousedown',parameters:'e'},
		{name:'moved',parameters:'containerfield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'e'},
		{name:'positionedchange',parameters:'containerfield,positioned'},
		{name:'removed',parameters:'containerfield,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'containerfield'},
		{name:'tofront',parameters:'containerfield'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'containerfield,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
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
		'change',
		'click',
		'destroy',
		'disabledchange',
		'dockedchange',
		'erased',
		'errorchange',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'keyup',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'mousedown',
		'moved',
		'orientationchange',
		'painted',
		'paste',
		'positionedchange',
		'removed',
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
  selector: containerfieldMetaData.XTYPE,
	inputs: containerfieldMetaData.INPUTNAMES,
	outputs: containerfieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => containerfield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class containerfield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,containerfieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,containerfieldMetaData);}
}
