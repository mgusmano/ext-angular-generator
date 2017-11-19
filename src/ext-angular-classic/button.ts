import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.button.Button
export class buttonMetaData {
	public static XTYPE: string = 'button';
	public static INPUTNAMES: string[] = [
		'activeCounter',
		'alignOnScroll',
		'alignTarget',
		'allowDepress',
		'alwaysOnTop',
		'anchor',
		'animateShadow',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'arrowAlign',
		'arrowCls',
		'arrowVisible',
		'autoEl',
		'autoRender',
		'autoScroll',
		'autoShow',
		'baseCls',
		'baseParams',
		'bind',
		'border',
		'childEls',
		'clickEvent',
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
		'destroyMenu',
		'disabled',
		'disabledCls',
		'dock',
		'draggable',
		'enableToggle',
		'fixed',
		'flex',
		'floating',
		'focusCls',
		'focusOnToFront',
		'formBind',
		'frame',
		'glyph',
		'handleMouseEvents',
		'handler',
		'height',
		'hidden',
		'hideMode',
		'href',
		'hrefTarget',
		'html',
		'icon',
		'iconAlign',
		'iconCls',
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
		'menu',
		'menuAlign',
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
		'params',
		'plugins',
		'pressed',
		'preventDefault',
		'publishes',
		'reference',
		'region',
		'renderConfig',
		'renderData',
		'renderSelectors',
		'renderTo',
		'renderTpl',
		'repeat',
		'resizable',
		'resizeHandles',
		'saveDelay',
		'scale',
		'scope',
		'scrollable',
		'session',
		'shadow',
		'shadowOffset',
		'shareableName',
		'shim',
		'showEmptyMenu',
		'shrinkWrap',
		'stateEvents',
		'stateful',
		'stateId',
		'style',
		'tabIndex',
		'text',
		'textAlign',
		'toFrontOnShow',
		'toggleGroup',
		'toggleHandler',
		'tooltip',
		'tooltipType',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'twoWayBindable',
		'ui',
		'uiCls',
		'userCls',
		'value',
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
		{name:'activate',parameters:'button'},
		{name:'added',parameters:'button,container,pos'},
		{name:'afterlayoutanimation',parameters:'button'},
		{name:'afterrender',parameters:'button'},
		{name:'beforeactivate',parameters:'button'},
		{name:'beforedeactivate',parameters:'button'},
		{name:'beforedestroy',parameters:'button'},
		{name:'beforehide',parameters:'button'},
		{name:'beforerender',parameters:'button'},
		{name:'beforeshow',parameters:'button'},
		{name:'beforestaterestore',parameters:'button,state'},
		{name:'beforestatesave',parameters:'button,state'},
		{name:'beforetoggle',parameters:'button,pressed'},
		{name:'blur',parameters:'button,event'},
		{name:'boxready',parameters:'button,width,height'},
		{name:'click',parameters:'button,e'},
		{name:'deactivate',parameters:'button'},
		{name:'destroy',parameters:'button'},
		{name:'disable',parameters:'button'},
		{name:'enable',parameters:'button'},
		{name:'focus',parameters:'button,event'},
		{name:'focusenter',parameters:'button,event'},
		{name:'focusleave',parameters:'button,event'},
		{name:'glyphchange',parameters:'button,newGlyph,oldGlyph'},
		{name:'hide',parameters:'button'},
		{name:'iconchange',parameters:'button,oldIcon,newIcon'},
		{name:'menuhide',parameters:'button,menu'},
		{name:'menushow',parameters:'button,menu'},
		{name:'menutriggerout',parameters:'button,menu,e'},
		{name:'menutriggerover',parameters:'button,menu,e'},
		{name:'mouseout',parameters:'button,e'},
		{name:'mouseover',parameters:'button,e'},
		{name:'move',parameters:'button,x,y'},
		{name:'removed',parameters:'button,ownerCt'},
		{name:'render',parameters:'button'},
		{name:'resize',parameters:'button,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'button'},
		{name:'staterestore',parameters:'button,state'},
		{name:'statesave',parameters:'button,state'},
		{name:'textchange',parameters:'button,oldText,newText'},
		{name:'toggle',parameters:'button,pressed'},
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
		'beforetoggle',
		'blur',
		'boxready',
		'click',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconchange',
		'menuhide',
		'menushow',
		'menutriggerout',
		'menutriggerover',
		'mouseout',
		'mouseover',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'textchange',
		'toggle',
		'ready'
];
}
@Component({
  selector: buttonMetaData.XTYPE,
	inputs: buttonMetaData.INPUTNAMES,
	outputs: buttonMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => button)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class button extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,buttonMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,buttonMetaData);}
}
