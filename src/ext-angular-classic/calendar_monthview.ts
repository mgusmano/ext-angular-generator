import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.view.Month
export class calendar_monthviewMetaData {
	public static XTYPE: string = 'calendar-monthview';
	public static INPUTNAMES: string[] = [
		'addForm',
		'addOnSelect',
		'allowSelection',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'cls',
		'compact',
		'compactOptions',
		'controller',
		'controlStoreRange',
		'dayFormat',
		'defaultListenerScope',
		'disabled',
		'draggable',
		'droppable',
		'editForm',
		'eventDefaults',
		'eventHandlers',
		'firstDayOfWeek',
		'focusCls',
		'gestureNavigation',
		'header',
		'height',
		'hidden',
		'hideMode',
		'instanceCls',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'listeners',
		'name',
		'nameable',
		'overflowText',
		'plugins',
		'publishes',
		'reference',
		'renderTo',
		'ripple',
		'session',
		'shareableName',
		'showOverflow',
		'store',
		'style',
		'timezoneOffset',
		'touchAction',
		'twoWayBindable',
		'ui',
		'userCls',
		'value',
		'viewModel',
		'visibleDays',
		'visibleWeeks',
		'weekendDays',
		'width',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeeventadd',parameters:'calendar-monthview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-monthview,context'},
		{name:'beforeeventedit',parameters:'calendar-monthview,context'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-monthview,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'eventadd',parameters:'calendar-monthview,context'},
		{name:'eventdrop',parameters:'calendar-monthview,context'},
		{name:'eventedit',parameters:'calendar-monthview,context'},
		{name:'eventtap',parameters:'calendar-monthview,context'},
		{name:'focus',parameters:'calendar-monthview,event'},
		{name:'focusenter',parameters:'calendar-monthview,event'},
		{name:'focusleave',parameters:'calendar-monthview,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'calendar-monthview,context'},
		{name:'selectrange',parameters:'calendar-monthview,context'},
		{name:'validateeventadd',parameters:'calendar-monthview,context'},
		{name:'validateeventdrop',parameters:'calendar-monthview,context'},
		{name:'validateeventedit',parameters:'calendar-monthview,context'},
		{name:'valuechange',parameters:'calendar-monthview,context'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforedisabledchange',
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'beforeheightchange',
		'beforehiddenchange',
		'beforewidthchange',
		'blur',
		'disabledchange',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventtap',
		'focus',
		'focusenter',
		'focusleave',
		'heightchange',
		'hiddenchange',
		'select',
		'selectrange',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'valuechange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: calendar_monthviewMetaData.XTYPE,
	inputs: calendar_monthviewMetaData.INPUTNAMES,
	outputs: calendar_monthviewMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_monthview)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_monthview extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_monthviewMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_monthviewMetaData);}
}
