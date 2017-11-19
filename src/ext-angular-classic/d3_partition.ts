import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.hierarchy.partition.Partition
export class d3_partitionMetaData {
	public static XTYPE: string = 'd3-partition';
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
		'tooltip',
		'touchAction',
		'transitions',
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
  selector: d3_partitionMetaData.XTYPE,
	inputs: d3_partitionMetaData.INPUTNAMES,
	outputs: d3_partitionMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_partition)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_partition extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_partitionMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_partitionMetaData);}
}
