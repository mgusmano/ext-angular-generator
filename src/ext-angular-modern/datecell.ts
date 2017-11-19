import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.grid.cell.Date
export class datecellMetaData {
	public static XTYPE: string = 'datecell';
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
		'format',
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
		{name:'beforetofront',parameters:'datecell'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'datecell,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'datecell,event'},
		{name:'focusenter',parameters:'datecell,event'},
		{name:'focusleave',parameters:'datecell,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'datecell'},
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
  selector: datecellMetaData.XTYPE,
	inputs: datecellMetaData.INPUTNAMES,
	outputs: datecellMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => datecell)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class datecell extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,datecellMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,datecellMetaData);}
}
