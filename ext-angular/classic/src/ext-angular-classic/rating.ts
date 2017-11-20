import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.rating.Picker
export class ratingMetaData {
	public static XTYPE: string = 'rating';
	public static INPUTNAMES: string[] = [
		'animate',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
		'disabled',
		'eventHandlers',
		'family',
		'focusCls',
		'glyphs',
		'height',
		'hidden',
		'hideMode',
		'instanceCls',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'limit',
		'listeners',
		'minimum',
		'name',
		'nameable',
		'overStyle',
		'plugins',
		'publishes',
		'reference',
		'renderTo',
		'ripple',
		'rounding',
		'scale',
		'selectedStyle',
		'session',
		'shareableName',
		'style',
		'tip',
		'tooltipText',
		'touchAction',
		'trackingValue',
		'trackOver',
		'twoWayBindable',
		'ui',
		'userCls',
		'value',
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
		{name:'blur',parameters:'rating,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'rating,event'},
		{name:'focusenter',parameters:'rating,event'},
		{name:'focusleave',parameters:'rating,event'},
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
  selector: ratingMetaData.XTYPE,
	inputs: ratingMetaData.INPUTNAMES,
	outputs: ratingMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => rating)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class rating extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,ratingMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,ratingMetaData);}
}
