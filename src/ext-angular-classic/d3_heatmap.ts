import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.HeatMap
export class d3_heatmapMetaData {
	public static XTYPE: string = 'd3-heatmap';
	public static INPUTNAMES: string[] = [
		'clipScene',
		'colorAxis',
		'componentCls',
		'interactions',
		'labels',
		'legend',
		'padding',
		'size',
		'store',
		'tiles',
		'tooltip',
		'touchAction',
		'transitions',
		'xAxis',
		'yAxis',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'sceneresize',parameters:'component,scene,size'},
		{name:'scenesetup',parameters:'component,scene'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'sceneresize',
		'scenesetup',
		'ready'
];
}
@Component({
  selector: d3_heatmapMetaData.XTYPE,
	inputs: d3_heatmapMetaData.INPUTNAMES,
	outputs: d3_heatmapMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_heatmap)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_heatmap extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_heatmapMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_heatmapMetaData);}
}
