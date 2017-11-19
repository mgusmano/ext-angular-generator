import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.chart.axis.Axis
export class axisMetaData {
	public static XTYPE: string = 'axis';
	public static INPUTNAMES: string[] = [
		'adjustByMajorUnit',
		'background',
		'center',
		'chart',
		'fields',
		'floating',
		'grid',
		'hidden',
		'id',
		'increment',
		'label',
		'labelInSpan',
		'layout',
		'length',
		'limits',
		'linkedTo',
		'listeners',
		'majorTickSteps',
		'margin',
		'maximum',
		'maxZoom',
		'minimum',
		'minorTickSteps',
		'minZoom',
		'needHighPrecision',
		'position',
		'radius',
		'reconcileRange',
		'renderer',
		'rotation',
		'segmenter',
		'style',
		'title',
		'titleMargin',
		'totalAngle',
		'visibleRange',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'rangechange',parameters:'axis,range,oldRange'},
		{name:'visiblerangechange',parameters:'axis,visibleRange'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'rangechange',
		'visiblerangechange',
		'ready'
];
}
@Component({
  selector: axisMetaData.XTYPE,
	inputs: axisMetaData.INPUTNAMES,
	outputs: axisMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => axis)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class axis extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,axisMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,axisMetaData);}
}
