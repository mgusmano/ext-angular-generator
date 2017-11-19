import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.Widget
export class widgetMetaData {
	public static XTYPE: string = 'widget';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'cls',
		'constrainAlign',
		'controller',
		'defaultListenerScope',
		'disabled',
		'eventHandlers',
		'flex',
		'floated',
		'focusCls',
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
		{name:'beforetofront',parameters:'widget'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'widget,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'widget,event'},
		{name:'focusenter',parameters:'widget,event'},
		{name:'focusleave',parameters:'widget,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'widget'},
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
  selector: widgetMetaData.XTYPE,
	inputs: widgetMetaData.INPUTNAMES,
	outputs: widgetMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => widget)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class widget extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,widgetMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,widgetMetaData);}
}
