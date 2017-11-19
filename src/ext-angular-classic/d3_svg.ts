import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.d3.svg.Svg
export class d3_svgMetaData {
	public static XTYPE: string = 'd3-svg';
	public static INPUTNAMES: string[] = [
		'clipScene',
		'componentCls',
		'interactions',
		'padding',
		'size',
		'store',
		'touchAction',
		'transitions',
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
  selector: d3_svgMetaData.XTYPE,
	inputs: d3_svgMetaData.INPUTNAMES,
	outputs: d3_svgMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => d3_svg)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class d3_svg extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,d3_svgMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,d3_svgMetaData);}
}
