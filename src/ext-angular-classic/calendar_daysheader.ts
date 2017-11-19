import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.calendar.header.Days
export class calendar_daysheaderMetaData {
	public static XTYPE: string = 'calendar-daysheader';
	public static INPUTNAMES: string[] = [
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'cellCls',
		'cls',
		'compact',
		'compactOptions',
		'controller',
		'defaultListenerScope',
		'disabled',
		'eventHandlers',
		'focusCls',
		'format',
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
		'plugins',
		'publishes',
		'reference',
		'renderTo',
		'ripple',
		'session',
		'shareableName',
		'style',
		'touchAction',
		'twoWayBindable',
		'ui',
		'userCls',
		'value',
		'viewModel',
		'visibleDays',
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
		{name:'blur',parameters:'calendar-daysheader,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'calendar-daysheader,event'},
		{name:'focusenter',parameters:'calendar-daysheader,event'},
		{name:'focusleave',parameters:'calendar-daysheader,event'},
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
  selector: calendar_daysheaderMetaData.XTYPE,
	inputs: calendar_daysheaderMetaData.INPUTNAMES,
	outputs: calendar_daysheaderMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => calendar_daysheader)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class calendar_daysheader extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,calendar_daysheaderMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,calendar_daysheaderMetaData);}
}
