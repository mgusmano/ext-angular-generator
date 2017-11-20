import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.hierarchy.tree.HorizontalTree
export class d3_treeMetaData {
	public static XTYPE: string = 'd3-tree';
	public static INPUTNAMES: string[] = [
		'clipScene',
		'colorAxis',
		'componentCls',
		'depth',
		'expandEventName',
		'hierarchyCls',
		'interactions',
		'layout',
		'linkKey',
		'nodeChildren',
		'nodeClass',
		'nodeKey',
		'nodeRadius',
		'nodeSize',
		'nodeText',
		'nodeTransform',
		'nodeTransition',
		'nodeValue',
		'noParentValue',
		'noSizeLayout',
		'padding',
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
		'treeCls',
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
  selector: d3_treeMetaData.XTYPE,
	inputs: d3_treeMetaData.INPUTNAMES,
	outputs: d3_treeMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_tree)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_tree extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_treeMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_treeMetaData);}
}
