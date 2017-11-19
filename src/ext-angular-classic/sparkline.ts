import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.sparkline.Base
export class sparklineMetaData {
	public static XTYPE: string = 'sparkline';
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
		'plugins',
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
		{name:'blur',parameters:'sparkline,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'sparkline,event'},
		{name:'focusenter',parameters:'sparkline,event'},
		{name:'focusleave',parameters:'sparkline,event'},
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
  selector: sparklineMetaData.XTYPE,
	inputs: sparklineMetaData.INPUTNAMES,
	outputs: sparklineMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => sparkline)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class sparkline extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,sparklineMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,sparklineMetaData);}
}
