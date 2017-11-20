import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.hierarchy.TreeMap
export class d3_treemapMetaData {
	public static XTYPE: string = 'd3-treemap';
	public static INPUTNAMES: string[] = [
		'busyLayoutText',
		'clipScene',
		'colorAxis',
		'componentCls',
		'expandEventName',
		'hierarchyCls',
		'interactions',
		'layout',
		'leafTile',
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
		'parentTile',
		'renderLinks',
		'rootVisible',
		'scaleLabels',
		'selectEventName',
		'selection',
		'size',
		'sorter',
		'store',
		'tiling',
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
  selector: d3_treemapMetaData.XTYPE,
	inputs: d3_treemapMetaData.INPUTNAMES,
	outputs: d3_treemapMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_treemap)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_treemap extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_treemapMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_treemapMetaData);}
}
