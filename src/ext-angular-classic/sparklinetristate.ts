import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.sparkline.TriState
export class sparklinetristateMetaData {
	public static XTYPE: string = 'sparklinetristate';
	public static INPUTNAMES: string[] = [
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'barSpacing',
		'barWidth',
		'bind',
		'border',
		'cls',
		'colorMap',
		'controller',
		'defaultListenerScope',
		'defaultPixelsPerValue',
		'disabled',
		'disableInteraction',
		'disableTooltips',
		'enableTagOptions',
		'eventHandlers',
		'focusCls',
		'height',
		'hidden',
		'hideMode',
		'highlightColor',
		'highlightLighten',
		'instanceCls',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'lineColor',
		'listeners',
		'name',
		'nameable',
		'negBarColor',
		'plugins',
		'posBarColor',
		'publishes',
		'reference',
		'renderTo',
		'ripple',
		'session',
		'shareableName',
		'style',
		'tipTpl',
		'tooltipPrefix',
		'tooltipSkipNull',
		'tooltipSuffix',
		'touchAction',
		'twoWayBindable',
		'ui',
		'userCls',
		'values',
		'viewModel',
		'width',
		'zeroBarColor',
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
		{name:'blur',parameters:'sparklinetristate,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'sparklinetristate,event'},
		{name:'focusenter',parameters:'sparklinetristate,event'},
		{name:'focusleave',parameters:'sparklinetristate,event'},
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
  selector: sparklinetristateMetaData.XTYPE,
	inputs: sparklinetristateMetaData.INPUTNAMES,
	outputs: sparklinetristateMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => sparklinetristate)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class sparklinetristate extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,sparklinetristateMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,sparklinetristateMetaData);}
}
