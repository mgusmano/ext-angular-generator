import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.pivot.d3.TreeMap
export class pivottreemapMetaData {
	public static XTYPE: string = 'pivottreemap';
	public static INPUTNAMES: string[] = [
		'autoExpand',
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
		'matrix',
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
  selector: pivottreemapMetaData.XTYPE,
	inputs: pivottreemapMetaData.INPUTNAMES,
	outputs: pivottreemapMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => pivottreemap)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class pivottreemap extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,pivottreemapMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,pivottreemapMetaData);}
}
