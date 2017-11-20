import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.field.DatePickerNative
export class datepickernativefieldMetaData {
	public static XTYPE: string = 'datepickernativefield';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'animateUnderline',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoCapitalize',
		'autoComplete',
		'autoCorrect',
		'autoFitErrors',
		'autoHideInputMask',
		'axisLock',
		'bind',
		'bodyAlign',
		'border',
		'bottom',
		'bubbleEvents',
		'centered',
		'clearable',
		'cls',
		'constrainAlign',
		'contentEl',
		'controller',
		'data',
		'dateFormat',
		'defaultListenerScope',
		'destroyPickerOnHide',
		'disabled',
		'displayed',
		'docked',
		'draggable',
		'edgePicker',
		'editable',
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
		'floatedPicker',
		'floatedPickerAlign',
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
		'inputCls',
		'inputMask',
		'inputType',
		'inputValue',
		'instanceCls',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'label',
		'labelAlign',
		'labelCls',
		'labelInPlaceholder',
		'labelMinWidth',
		'labelTextAlign',
		'labelWidth',
		'labelWrap',
		'left',
		'listeners',
		'margin',
		'matchFieldWidth',
		'maxDate',
		'maxHeight',
		'maxLength',
		'maxWidth',
		'minDate',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'name',
		'nameable',
		'padding',
		'pattern',
		'picker',
		'pickerSlotAlign',
		'placeholder',
		'placeHolder',
		'plugins',
		'publishes',
		'readOnly',
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
		'textAlign',
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
		'triggers',
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
		{name:'action',parameters:'datepickernativefield,e'},
		{name:'added',parameters:'datepickernativefield,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'datepickernativefield'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'datepickernativefield'},
		{name:'beforetofront',parameters:'datepickernativefield'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'datepickernativefield,e'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'change',parameters:'datepickernativefield,newDate,oldDate'},
		{name:'clearicontap',parameters:'datepickernativefield,input,e'},
		{name:'click',parameters:'e'},
		{name:'collapse',parameters:'field'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'datepickernativefield'},
		{name:'errorchange',parameters:'datepickernativefield,error'},
		{name:'expand',parameters:'field'},
		{name:'floatingchange',parameters:'datepickernativefield,positioned'},
		{name:'focus',parameters:'datepickernativefield,e'},
		{name:'focusenter',parameters:'datepickernativefield,event'},
		{name:'focusleave',parameters:'datepickernativefield,event'},
		{name:'fullscreen',parameters:'datepickernativefield'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'datepickernativefield'},
		{name:'initialize',parameters:'datepickernativefield'},
		{name:'keyup',parameters:'datepickernativefield,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'mousedown',parameters:'datepickernativefield,e'},
		{name:'moved',parameters:'datepickernativefield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'paste',parameters:'datepickernativefield,e'},
		{name:'positionedchange',parameters:'datepickernativefield,positioned'},
		{name:'removed',parameters:'datepickernativefield,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'datepickernativefield'},
		{name:'tofront',parameters:'datepickernativefield'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'datepickernativefield,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'action',
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
		'clearicontap',
		'click',
		'collapse',
		'destroy',
		'disabledchange',
		'dockedchange',
		'erased',
		'errorchange',
		'expand',
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
  selector: datepickernativefieldMetaData.XTYPE,
	inputs: datepickernativefieldMetaData.INPUTNAMES,
	outputs: datepickernativefieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => datepickernativefield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class datepickernativefield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,datepickernativefieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,datepickernativefieldMetaData);}
}
