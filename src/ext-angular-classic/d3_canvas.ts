import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.canvas.Canvas
export class d3_canvasMetaData {
	public static XTYPE: string = 'd3-canvas';
	public static INPUTNAMES: string[] = [
		'componentCls',
		'hdpi',
		'interactions',
		'size',
		'store',
		'touchAction',
		'transitions',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'sceneresize',parameters:'component,canvas,size'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'sceneresize',
		'ready'
];
}
@Component({
  selector: d3_canvasMetaData.XTYPE,
	inputs: d3_canvasMetaData.INPUTNAMES,
	outputs: d3_canvasMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_canvas)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_canvas extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_canvasMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_canvasMetaData);}
}
