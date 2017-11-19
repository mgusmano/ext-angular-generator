import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.pivot.cell.Group
export class pivotgridgroupcellMetaData {
	public static XTYPE: string = 'pivotgridgroupcell';
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
		'eventCell',
		'eventHandlers',
		'flex',
		'floated',
		'focusCls',
		'formatter',
		'height',
		'hidden',
		'hideMode',
		'id',
		'innerGroupStyle',
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
		'renderer',
		'renderTo',
		'ripple',
		'scope',
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
		'tpl',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'userCls',
		'userGroupStyle',
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
		{name:'beforetofront',parameters:'pivotgridgroupcell'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'pivotgridgroupcell,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'pivotgridgroupcell,event'},
		{name:'focusenter',parameters:'pivotgridgroupcell,event'},
		{name:'focusleave',parameters:'pivotgridgroupcell,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'pivotgridgroupcell'},
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
  selector: pivotgridgroupcellMetaData.XTYPE,
	inputs: pivotgridgroupcellMetaData.INPUTNAMES,
	outputs: pivotgridgroupcellMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => pivotgridgroupcell)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class pivotgridgroupcell extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,pivotgridgroupcellMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,pivotgridgroupcellMetaData);}
}
