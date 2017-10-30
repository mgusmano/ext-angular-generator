import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.pivot.d3.Container
export class pivotd3containerMetaData {
	public static XTYPE: string = 'pivotd3container';
	public static INPUTNAMES: string[] = [
		'configurator',
		'drawing',
		'matrix',
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
  selector: pivotd3containerMetaData.XTYPE,
	inputs: pivotd3containerMetaData.INPUTNAMES,
	outputs: pivotd3containerMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => pivotd3container)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class pivotd3container extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,pivotd3containerMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,pivotd3containerMetaData);}
}
