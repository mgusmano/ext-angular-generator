import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.list.TreeItem
export class treelistitemMetaData {
	public static XTYPE: string = 'treelistitem';
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
		'disabled',
		'eventHandlers',
		'expandable',
		'expanded',
		'floated',
		'focusCls',
		'height',
		'hidden',
		'hideMode',
		'iconCls',
		'iconClsProperty',
		'indent',
		'instanceCls',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'leaf',
		'listeners',
		'loading',
		'name',
		'nameable',
		'node',
		'over',
		'owner',
		'parentItem',
		'plugins',
		'publishes',
		'reference',
		'renderTo',
		'ripple',
		'rowCls',
		'rowClsProperty',
		'selected',
		'selectedParent',
		'session',
		'shareableName',
		'style',
		'text',
		'textProperty',
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
		{name:'blur',parameters:'treelistitem,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'treelistitem,event'},
		{name:'focusenter',parameters:'treelistitem,event'},
		{name:'focusleave',parameters:'treelistitem,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'itemclick',parameters:'sender,info'},
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
		'itemclick',
		'widthchange',
		'ready'
];
}
@Component({
  selector: treelistitemMetaData.XTYPE,
	inputs: treelistitemMetaData.INPUTNAMES,
	outputs: treelistitemMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => treelistitem)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class treelistitem extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,treelistitemMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,treelistitemMetaData);}
}
