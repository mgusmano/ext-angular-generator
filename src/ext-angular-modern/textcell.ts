import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.cell.Text
export class textcellMetaData {
	public static XTYPE: string = 'textcell';
	public static INPUTNAMES: string[] = [
		'align',
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'bodyCls',
		'bodyStyle',
		'border',
		'cellCls',
		'cls',
		'column',
		'constrainAlign',
		'controller',
		'defaultListenerScope',
		'defaultToolWeights',
		'disabled',
		'encodeHtml',
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
		'rawValue',
		'record',
		'reference',
		'relative',
		'renderTo',
		'ripple',
		'selectable',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'style',
		'toFrontOnShow',
		'toolDefaults',
		'tools',
		'touchAction',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'userCls',
		'value',
		'viewModel',
		'width',
		'x',
		'y',
		'zeroValue',
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
		{name:'beforetofront',parameters:'textcell'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'textcell,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'textcell,event'},
		{name:'focusenter',parameters:'textcell,event'},
		{name:'focusleave',parameters:'textcell,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'textcell'},
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
  selector: textcellMetaData.XTYPE,
	inputs: textcellMetaData.INPUTNAMES,
	outputs: textcellMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => textcell)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class textcell extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,textcellMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,textcellMetaData);}
}
