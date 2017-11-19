import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.ux.Gauge
export class gaugeMetaData {
	public static XTYPE: string = 'gauge';
	public static INPUTNAMES: string[] = [
		'angleOffset',
		'animation',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'clockwise',
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
		'padding',
		'plugins',
		'publishes',
		'reference',
		'renderTo',
		'ripple',
		'session',
		'shareableName',
		'style',
		'textAlign',
		'textTpl',
		'touchAction',
		'trackLength',
		'trackStart',
		'trackStyle',
		'twoWayBindable',
		'ui',
		'userCls',
		'value',
		'valueStyle',
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
		{name:'blur',parameters:'gauge,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'gauge,event'},
		{name:'focusenter',parameters:'gauge,event'},
		{name:'focusleave',parameters:'gauge,event'},
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
  selector: gaugeMetaData.XTYPE,
	inputs: gaugeMetaData.INPUTNAMES,
	outputs: gaugeMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => gauge)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class gauge extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,gaugeMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,gaugeMetaData);}
}
