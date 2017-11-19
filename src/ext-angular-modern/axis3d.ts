import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.chart.axis.Axis3D
export class axis3dMetaData {
	public static XTYPE: string = 'axis3d';
	public static INPUTNAMES: string[] = [
		'adjustByMajorUnit',
		'background',
		'center',
		'chart',
		'depth',
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
  selector: axis3dMetaData.XTYPE,
	inputs: axis3dMetaData.INPUTNAMES,
	outputs: axis3dMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => axis3d)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class axis3d extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,axis3dMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,axis3dMetaData);}
}
