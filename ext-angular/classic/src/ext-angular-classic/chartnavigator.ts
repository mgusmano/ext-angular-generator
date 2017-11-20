import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.chart.navigator.Container
export class chartnavigatorMetaData {
	public static XTYPE: string = 'chartnavigator';
	public static INPUTNAMES: string[] = [
		'chart',
		'layout',
		'navigator',
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
  selector: chartnavigatorMetaData.XTYPE,
	inputs: chartnavigatorMetaData.INPUTNAMES,
	outputs: chartnavigatorMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => chartnavigator)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class chartnavigator extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,chartnavigatorMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,chartnavigatorMetaData);}
}
