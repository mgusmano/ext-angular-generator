import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.chart.interactions.Abstract
export class interactionMetaData {
	public static XTYPE: string = 'interaction';
	public static INPUTNAMES: string[] = [
		'chart',
		'enabled',
		'gesture',
		'listeners',
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
  selector: interactionMetaData.XTYPE,
	inputs: interactionMetaData.INPUTNAMES,
	outputs: interactionMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => interaction)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class interaction extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,interactionMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,interactionMetaData);}
}
