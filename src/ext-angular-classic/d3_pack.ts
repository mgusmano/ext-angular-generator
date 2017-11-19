import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.hierarchy.Pack
export class d3_packMetaData {
	public static XTYPE: string = 'd3-pack';
	public static INPUTNAMES: string[] = [
		'clipScene',
		'clipText',
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
  selector: d3_packMetaData.XTYPE,
	inputs: d3_packMetaData.INPUTNAMES,
	outputs: d3_packMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_pack)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_pack extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_packMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_packMetaData);}
}
