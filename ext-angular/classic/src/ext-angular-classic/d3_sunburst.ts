import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.hierarchy.partition.Sunburst
export class d3_sunburstMetaData {
	public static XTYPE: string = 'd3-sunburst';
	public static INPUTNAMES: string[] = [
		'clipScene',
		'colorAxis',
		'componentCls',
		'expandEventName',
		'hierarchyCls',
		'interactions',
		'layout',
		'linkKey',
		'nodeChildren',
		'nodeClass',
		'nodeKey',
		'nodeText',
		'nodeTransform',
		'nodeValue',
		'noParentValue',
		'noSizeLayout',
		'padding',
		'partitionCls',
		'renderLinks',
		'rootVisible',
		'selectEventName',
		'selection',
		'size',
		'sorter',
		'store',
		'textPadding',
		'tooltip',
		'touchAction',
		'transitions',
		'zoomParentDotRadius',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'layout',parameters:'component'},
		{name:'sceneresize',parameters:'component,scene,size'},
		{name:'scenesetup',parameters:'component,scene'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'layout',
		'sceneresize',
		'scenesetup',
		'ready'
];
}
@Component({
  selector: d3_sunburstMetaData.XTYPE,
	inputs: d3_sunburstMetaData.INPUTNAMES,
	outputs: d3_sunburstMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_sunburst)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_sunburst extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_sunburstMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_sunburstMetaData);}
}
