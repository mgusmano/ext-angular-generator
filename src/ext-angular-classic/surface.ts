import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.draw.Surface
export class surfaceMetaData {
	public static XTYPE: string = 'surface';
	public static INPUTNAMES: string[] = [
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'background',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
		'dirty',
		'disabled',
		'eventHandlers',
		'flipRtlText',
		'focusCls',
		'height',
		'hidden',
		'hideMode',
		'instanceCls',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'listeners',
		'name',
		'nameable',
		'plugins',
		'publishes',
		'rect',
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
		{name:'blur',parameters:'surface,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'surface,event'},
		{name:'focusenter',parameters:'surface,event'},
		{name:'focusleave',parameters:'surface,event'},
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
  selector: surfaceMetaData.XTYPE,
	inputs: surfaceMetaData.INPUTNAMES,
	outputs: surfaceMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => surface)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class surface extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,surfaceMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,surfaceMetaData);}
}
