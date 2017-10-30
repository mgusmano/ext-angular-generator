import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.panel.DateView
export class datepanelviewMetaData {
	public static XTYPE: string = 'datepanelview';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'captionFormat',
		'cls',
		'constrainAlign',
		'controller',
		'defaultListenerScope',
		'disabled',
		'disabledDates',
		'eventHandlers',
		'flex',
		'floated',
		'focusCls',
		'focusedDate',
		'headerLength',
		'height',
		'hidden',
		'hideMode',
		'id',
		'instanceCls',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'listeners',
		'maxDate',
		'name',
		'nameable',
		'plugins',
		'publishes',
		'reference',
		'relative',
		'renderTo',
		'ripple',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'specialDates',
		'startDay',
		'style',
		'toFrontOnShow',
		'touchAction',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'userCls',
		'viewModel',
		'width',
		'x',
		'y',
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
		{name:'beforetofront',parameters:'datepanelview'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'datepanelview,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'datepanelview,event'},
		{name:'focusenter',parameters:'datepanelview,event'},
		{name:'focusleave',parameters:'datepanelview,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'datepanelview'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'beforedisabledchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforetofront',
		'beforewidthchange',
		'blur',
		'disabledchange',
		'focus',
		'focusenter',
		'focusleave',
		'heightchange',
		'hiddenchange',
		'tofront',
		'widthchange',
		'ready'
];
}
@Component({
  selector: datepanelviewMetaData.XTYPE,
	inputs: datepanelviewMetaData.INPUTNAMES,
	outputs: datepanelviewMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => datepanelview)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class datepanelview extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,datepanelviewMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,datepanelviewMetaData);}
}
