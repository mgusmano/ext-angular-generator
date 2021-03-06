import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.toolbar.TextItem
export class tbtextMetaData {
	public static XTYPE: string = 'tbtext';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'alignOnScroll',
		'alignTarget',
		'alwaysOnTop',
		'anchor',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoEl',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'bind',
		'border',
		'childEls',
		'cls',
		'columnWidth',
		'componentCls',
		'componentLayout',
		'constrain',
		'constraintInsets',
		'constrainTo',
		'contentEl',
		'controller',
		'data',
		'defaultAlign',
		'defaultListenerScope',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'fixed',
		'flex',
		'floating',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'frame',
		'height',
		'hidden',
		'hideMode',
		'html',
		'id',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'liquidLayout',
		'listeners',
		'liveDrag',
		'loader',
		'margin',
		'maskDefaults',
		'maskElement',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'nameable',
		'overCls',
		'overflowText',
		'overflowX',
		'overflowY',
		'padding',
		'plugins',
		'publishes',
		'reference',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scrollable',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'shrinkWrap',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'tabIndex',
		'text',
		'toFrontOnShow',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'viewModel',
		'weight',
		'width',
		'xtype',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'tbtext'},
		{name:'added',parameters:'tbtext,container,pos'},
		{name:'afterlayoutanimation',parameters:'tbtext'},
		{name:'afterrender',parameters:'tbtext'},
		{name:'beforeactivate',parameters:'tbtext'},
		{name:'beforedeactivate',parameters:'tbtext'},
		{name:'beforedestroy',parameters:'tbtext'},
		{name:'beforehide',parameters:'tbtext'},
		{name:'beforerender',parameters:'tbtext'},
		{name:'beforeshow',parameters:'tbtext'},
		{name:'beforestaterestore',parameters:'tbtext,state'},
		{name:'beforestatesave',parameters:'tbtext,state'},
		{name:'blur',parameters:'tbtext,event'},
		{name:'boxready',parameters:'tbtext,width,height'},
		{name:'deactivate',parameters:'tbtext'},
		{name:'destroy',parameters:'tbtext'},
		{name:'disable',parameters:'tbtext'},
		{name:'enable',parameters:'tbtext'},
		{name:'focus',parameters:'tbtext,event'},
		{name:'focusenter',parameters:'tbtext,event'},
		{name:'focusleave',parameters:'tbtext,event'},
		{name:'hide',parameters:'tbtext'},
		{name:'move',parameters:'tbtext,x,y'},
		{name:'removed',parameters:'tbtext,ownerCt'},
		{name:'render',parameters:'tbtext'},
		{name:'resize',parameters:'tbtext,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'tbtext'},
		{name:'staterestore',parameters:'tbtext,state'},
		{name:'statesave',parameters:'tbtext,state'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: tbtextMetaData.XTYPE,
	inputs: tbtextMetaData.INPUTNAMES,
	outputs: tbtextMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => tbtext)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class tbtext extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,tbtextMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,tbtextMetaData);}
}
