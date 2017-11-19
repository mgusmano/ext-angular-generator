import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.sparkline.Bullet
export class sparklinebulletMetaData {
	public static XTYPE: string = 'sparklinebullet';
	public static INPUTNAMES: string[] = [
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'base',
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
		'performanceColor',
		'plugins',
		'publishes',
		'rangeColors',
		'reference',
		'renderTo',
		'ripple',
		'session',
		'shareableName',
		'style',
		'targetColor',
		'targetWidth',
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
		{name:'blur',parameters:'sparklinebullet,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'sparklinebullet,event'},
		{name:'focusenter',parameters:'sparklinebullet,event'},
		{name:'focusleave',parameters:'sparklinebullet,event'},
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
  selector: sparklinebulletMetaData.XTYPE,
	inputs: sparklinebulletMetaData.INPUTNAMES,
	outputs: sparklinebulletMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => sparklinebullet)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class sparklinebullet extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,sparklinebulletMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,sparklinebulletMetaData);}
}
