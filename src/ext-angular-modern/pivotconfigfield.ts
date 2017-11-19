import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.pivot.plugin.configurator.Column
export class pivotconfigfieldMetaData {
	public static XTYPE: string = 'pivotconfigfield';
	public static INPUTNAMES: string[] = [
		'deleteCmp',
		'moveCmp',
		'sortCmp',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'ready'
];
}
@Component({
  selector: pivotconfigfieldMetaData.XTYPE,
	inputs: pivotconfigfieldMetaData.INPUTNAMES,
	outputs: pivotconfigfieldMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => pivotconfigfield)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class pivotconfigfield extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,pivotconfigfieldMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,pivotconfigfieldMetaData);}
}
