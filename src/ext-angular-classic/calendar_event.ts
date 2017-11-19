import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.Event
export class calendar_eventMetaData {
	public static XTYPE: string = 'calendar-event';
	public static INPUTNAMES: string[] = [
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
		'defaultTitle',
		'disabled',
		'endDate',
		'eventHandlers',
		'focusCls',
		'height',
		'hidden',
		'hideMode',
		'instanceCls',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'listeners',
		'mode',
		'model',
		'name',
		'nameable',
		'palette',
		'plugins',
		'publishes',
		'reference',
		'renderTo',
		'resize',
		'ripple',
		'session',
		'shareableName',
		'startDate',
		'style',
		'timeFormat',
		'title',
		'touchAction',
		'twoWayBindable',
		'ui',
		'userCls',
		'view',
		'viewModel',
		'width',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-event,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'calendar-event,event'},
		{name:'focusenter',parameters:'calendar-event,event'},
		{name:'focusleave',parameters:'calendar-event,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforedisabledchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforewidthchange',
		'blur',
		'disabledchange',
		'focus',
		'focusenter',
		'focusleave',
		'heightchange',
		'hiddenchange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: calendar_eventMetaData.XTYPE,
	inputs: calendar_eventMetaData.INPUTNAMES,
	outputs: calendar_eventMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_event)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_event extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_eventMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_eventMetaData);}
}
