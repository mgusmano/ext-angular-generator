import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.slider.Widget
export class sliderwidgetMetaData {
	public static XTYPE: string = 'sliderwidget';
	public static INPUTNAMES: string[] = [
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'clickToChange',
		'cls',
		'controller',
		'defaultListenerScope',
		'disabled',
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
		'maxValue',
		'minValue',
		'name',
		'nameable',
		'plugins',
		'publishes',
		'publishOnComplete',
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
		'vertical',
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
		{name:'blur',parameters:'sliderwidget,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'sliderwidget,event'},
		{name:'focusenter',parameters:'sliderwidget,event'},
		{name:'focusleave',parameters:'sliderwidget,event'},
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
  selector: sliderwidgetMetaData.XTYPE,
	inputs: sliderwidgetMetaData.INPUTNAMES,
	outputs: sliderwidgetMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => sliderwidget)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class sliderwidget extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,sliderwidgetMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,sliderwidgetMetaData);}
}
