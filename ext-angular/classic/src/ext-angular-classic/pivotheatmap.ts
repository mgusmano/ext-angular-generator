import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.pivot.d3.HeatMap
export class pivotheatmapMetaData {
	public static XTYPE: string = 'pivotheatmap';
	public static INPUTNAMES: string[] = [
		'clipScene',
		'colorAxis',
		'componentCls',
		'defaultFormatter',
		'interactions',
		'labels',
		'legend',
		'matrix',
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
  selector: pivotheatmapMetaData.XTYPE,
	inputs: pivotheatmapMetaData.INPUTNAMES,
	outputs: pivotheatmapMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => pivotheatmap)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class pivotheatmap extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,pivotheatmapMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,pivotheatmapMetaData);}
}
