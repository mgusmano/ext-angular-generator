import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.field.trigger.Menu
export class menutriggerMetaData {
	public static XTYPE: string = 'menutrigger';
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
		'destroyMenu',
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
		'menu',
		'menuAlign',
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
		{name:'beforetofront',parameters:'menutrigger'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'menutrigger,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'menutrigger,event'},
		{name:'focusenter',parameters:'menutrigger,event'},
		{name:'focusleave',parameters:'menutrigger,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'menutrigger'},
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
  selector: menutriggerMetaData.XTYPE,
	inputs: menutriggerMetaData.INPUTNAMES,
	outputs: menutriggerMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => menutrigger)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class menutrigger extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,menutriggerMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,menutriggerMetaData);}
}
