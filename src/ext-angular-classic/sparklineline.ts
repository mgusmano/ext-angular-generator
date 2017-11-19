import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.sparkline.Line
export class sparklinelineMetaData {
	public static XTYPE: string = 'sparklineline';
	public static INPUTNAMES: string[] = [
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'chartRangeMax',
		'chartRangeMaxX',
		'chartRangeMin',
		'chartRangeMinX',
		'cls',
		'controller',
		'defaultListenerScope',
		'defaultPixelsPerValue',
		'disabled',
		'disableInteraction',
		'disableTooltips',
		'drawNormalOnTop',
		'enableTagOptions',
		'eventHandlers',
		'fillColor',
		'focusCls',
		'height',
		'hidden',
		'hideMode',
		'highlightColor',
		'highlightLighten',
		'highlightLineColor',
		'highlightSpotColor',
		'instanceCls',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'lineColor',
		'lineWidth',
		'listeners',
		'maxSpotColor',
		'minSpotColor',
		'name',
		'nameable',
		'normalRangeColor',
		'normalRangeMax',
		'normalRangeMin',
		'plugins',
		'publishes',
		'reference',
		'renderTo',
		'ripple',
		'session',
		'shareableName',
		'spotColor',
		'spotRadius',
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
		'valueSpots',
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
		{name:'blur',parameters:'sparklineline,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'sparklineline,event'},
		{name:'focusenter',parameters:'sparklineline,event'},
		{name:'focusleave',parameters:'sparklineline,event'},
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
  selector: sparklinelineMetaData.XTYPE,
	inputs: sparklinelineMetaData.INPUTNAMES,
	outputs: sparklinelineMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => sparklineline)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class sparklineline extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,sparklinelineMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,sparklinelineMetaData);}
}
