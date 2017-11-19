import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.list.Tree
export class treelistMetaData {
	public static XTYPE: string = 'treelist';
	public static INPUTNAMES: string[] = [
		'animation',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'bind',
		'border',
		'cls',
		'controller',
		'defaultListenerScope',
		'defaults',
		'disabled',
		'eventHandlers',
		'expanderFirst',
		'expanderOnly',
		'focusCls',
		'height',
		'hidden',
		'hideMode',
		'highlightPath',
		'iconSize',
		'instanceCls',
		'itemRipple',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'listeners',
		'micro',
		'name',
		'nameable',
		'overItem',
		'plugins',
		'publishes',
		'reference',
		'renderTo',
		'ripple',
		'selection',
		'selectOnExpander',
		'session',
		'shareableName',
		'singleExpand',
		'store',
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
		{name:'blur',parameters:'treelist,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'treelist,event'},
		{name:'focusenter',parameters:'treelist,event'},
		{name:'focusleave',parameters:'treelist,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'selectionchange',parameters:'treelist,record'},
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
		'selectionchange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: treelistMetaData.XTYPE,
	inputs: treelistMetaData.INPUTNAMES,
	outputs: treelistMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => treelist)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class treelist extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,treelistMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,treelistMetaData);}
}
