import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.view.Weeks
export class calendar_weeksviewMetaData {
	public static XTYPE: string = 'calendar-weeksview';
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
		{name:'beforeeventadd',parameters:'calendar-weeksview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-weeksview,context'},
		{name:'beforeeventedit',parameters:'calendar-weeksview,context'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-weeksview,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'eventadd',parameters:'calendar-weeksview,context'},
		{name:'eventdrop',parameters:'calendar-weeksview,context'},
		{name:'eventedit',parameters:'calendar-weeksview,context'},
		{name:'eventtap',parameters:'calendar-weeksview,context'},
		{name:'focus',parameters:'calendar-weeksview,event'},
		{name:'focusenter',parameters:'calendar-weeksview,event'},
		{name:'focusleave',parameters:'calendar-weeksview,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'calendar-weeksview,context'},
		{name:'selectrange',parameters:'calendar-weeksview,context'},
		{name:'validateeventadd',parameters:'calendar-weeksview,context'},
		{name:'validateeventdrop',parameters:'calendar-weeksview,context'},
		{name:'validateeventedit',parameters:'calendar-weeksview,context'},
		{name:'valuechange',parameters:'calendar-weeksview,context'},
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
  selector: calendar_weeksviewMetaData.XTYPE,
	inputs: calendar_weeksviewMetaData.INPUTNAMES,
	outputs: calendar_weeksviewMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_weeksview)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_weeksview extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_weeksviewMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_weeksviewMetaData);}
}
