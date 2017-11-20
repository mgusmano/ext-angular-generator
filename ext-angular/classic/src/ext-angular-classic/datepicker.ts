import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.picker.Date
export class datepickerMetaData {
	public static XTYPE: string = 'datepicker';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'alignOnScroll',
		'alignTarget',
		'alwaysOnTop',
		'anchor',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaDisabledDatesText',
		'ariaDisabledDaysText',
		'ariaLabel',
		'ariaLabelledBy',
		'ariaMaxText',
		'ariaMinText',
		'ariaTitle',
		'ariaTitleDateFormat',
		'autoEl',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'bind',
		'border',
		'childEls',
		'cls',
		'columnWidth',
		'componentCls',
		'componentLayout',
		'constrain',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
		'dayNames',
		'defaultAlign',
		'defaultListenerScope',
		'disableAnim',
		'disabled',
		'disabledCellCls',
		'disabledCls',
		'disabledDates',
		'disabledDatesRE',
		'disabledDatesText',
		'disabledDays',
		'disabledDaysText',
		'dock',
		'draggable',
		'fixed',
		'flex',
		'floating',
		'focusCls',
		'focusOnToFront',
		'footerButtonUI',
		'format',
		'formBind',
		'frame',
		'handler',
		'height',
		'hidden',
		'hideMode',
		'html',
		'id',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'keyNavConfig',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'longDayFormat',
		'margin',
		'maskDefaults',
		'maskElement',
		'maxDate',
		'maxHeight',
		'maxText',
		'maxWidth',
		'minDate',
		'minHeight',
		'minText',
		'minWidth',
		'modal',
		'modelValidation',
		'monthNames',
		'monthYearFormat',
		'monthYearText',
		'nameable',
		'nextText',
		'overCls',
		'overflowX',
		'overflowY',
		'padding',
		'plugins',
		'prevText',
		'publishes',
		'reference',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scope',
		'scrollable',
		'selectedCls',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'showToday',
		'shrinkWrap',
		'startDay',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'tabIndex',
		'todayText',
		'todayTip',
		'toFrontOnShow',
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
		{name:'activate',parameters:'datepicker'},
		{name:'added',parameters:'datepicker,container,pos'},
		{name:'afterlayoutanimation',parameters:'datepicker'},
		{name:'afterrender',parameters:'datepicker'},
		{name:'beforeactivate',parameters:'datepicker'},
		{name:'beforedeactivate',parameters:'datepicker'},
		{name:'beforedestroy',parameters:'datepicker'},
		{name:'beforehide',parameters:'datepicker'},
		{name:'beforerender',parameters:'datepicker'},
		{name:'beforeshow',parameters:'datepicker'},
		{name:'beforestaterestore',parameters:'datepicker,state'},
		{name:'beforestatesave',parameters:'datepicker,state'},
		{name:'blur',parameters:'datepicker,event'},
		{name:'boxready',parameters:'datepicker,width,height'},
		{name:'deactivate',parameters:'datepicker'},
		{name:'destroy',parameters:'datepicker'},
		{name:'disable',parameters:'datepicker'},
		{name:'enable',parameters:'datepicker'},
		{name:'focus',parameters:'datepicker,event'},
		{name:'focusenter',parameters:'datepicker,event'},
		{name:'focusleave',parameters:'datepicker,event'},
		{name:'hide',parameters:'datepicker'},
		{name:'move',parameters:'datepicker,x,y'},
		{name:'removed',parameters:'datepicker,ownerCt'},
		{name:'render',parameters:'datepicker'},
		{name:'resize',parameters:'datepicker,width,height,oldWidth,oldHeight'},
		{name:'select',parameters:'datepicker,date'},
		{name:'show',parameters:'datepicker'},
		{name:'staterestore',parameters:'datepicker,state'},
		{name:'statesave',parameters:'datepicker,state'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'removed',
		'render',
		'resize',
		'select',
		'show',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: datepickerMetaData.XTYPE,
	inputs: datepickerMetaData.INPUTNAMES,
	outputs: datepickerMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => datepicker)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class datepicker extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,datepickerMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,datepickerMetaData);}
}
