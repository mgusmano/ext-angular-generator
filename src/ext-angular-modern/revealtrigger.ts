import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.field.trigger.Reveal
export class revealtriggerMetaData {
	public static XTYPE: string = 'revealtrigger';
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
		'field',
		'flex',
		'floated',
		'focusCls',
		'focusOnMouseDown',
		'group',
		'handler',
		'height',
		'hidden',
		'hideMode',
		'iconCls',
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
		'repeat',
		'ripple',
		'scope',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'side',
		'style',
		'toFrontOnShow',
		'touchAction',
		'translatable',
		'translationMethod',
		'triggers',
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
		{name:'beforetofront',parameters:'revealtrigger'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'revealtrigger,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'revealtrigger,event'},
		{name:'focusenter',parameters:'revealtrigger,event'},
		{name:'focusleave',parameters:'revealtrigger,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'revealtrigger'},
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
  selector: revealtriggerMetaData.XTYPE,
	inputs: revealtriggerMetaData.INPUTNAMES,
	outputs: revealtriggerMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => revealtrigger)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class revealtrigger extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,revealtriggerMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,revealtriggerMetaData);}
}
