import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.button.Split
export class splitbuttonMetaData {
	public static XTYPE: string = 'splitbutton';
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
		'arrowHandler',
		'arrowTooltip',
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
		{name:'activate',parameters:'splitbutton'},
		{name:'added',parameters:'splitbutton,container,pos'},
		{name:'afterlayoutanimation',parameters:'splitbutton'},
		{name:'afterrender',parameters:'splitbutton'},
		{name:'arrowclick',parameters:'splitbutton,e'},
		{name:'beforeactivate',parameters:'splitbutton'},
		{name:'beforedeactivate',parameters:'splitbutton'},
		{name:'beforedestroy',parameters:'splitbutton'},
		{name:'beforehide',parameters:'splitbutton'},
		{name:'beforerender',parameters:'splitbutton'},
		{name:'beforeshow',parameters:'splitbutton'},
		{name:'beforestaterestore',parameters:'splitbutton,state'},
		{name:'beforestatesave',parameters:'splitbutton,state'},
		{name:'beforetoggle',parameters:'splitbutton,pressed'},
		{name:'blur',parameters:'splitbutton,event'},
		{name:'boxready',parameters:'splitbutton,width,height'},
		{name:'click',parameters:'splitbutton,e'},
		{name:'deactivate',parameters:'splitbutton'},
		{name:'destroy',parameters:'splitbutton'},
		{name:'disable',parameters:'splitbutton'},
		{name:'enable',parameters:'splitbutton'},
		{name:'focus',parameters:'splitbutton,event'},
		{name:'focusenter',parameters:'splitbutton,event'},
		{name:'focusleave',parameters:'splitbutton,event'},
		{name:'glyphchange',parameters:'splitbutton,newGlyph,oldGlyph'},
		{name:'hide',parameters:'splitbutton'},
		{name:'iconchange',parameters:'splitbutton,oldIcon,newIcon'},
		{name:'menuhide',parameters:'splitbutton,menu'},
		{name:'menushow',parameters:'splitbutton,menu'},
		{name:'menutriggerout',parameters:'splitbutton,menu,e'},
		{name:'menutriggerover',parameters:'splitbutton,menu,e'},
		{name:'mouseout',parameters:'splitbutton,e'},
		{name:'mouseover',parameters:'splitbutton,e'},
		{name:'move',parameters:'splitbutton,x,y'},
		{name:'removed',parameters:'splitbutton,ownerCt'},
		{name:'render',parameters:'splitbutton'},
		{name:'resize',parameters:'splitbutton,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'splitbutton'},
		{name:'staterestore',parameters:'splitbutton,state'},
		{name:'statesave',parameters:'splitbutton,state'},
		{name:'textchange',parameters:'splitbutton,oldText,newText'},
		{name:'toggle',parameters:'splitbutton,pressed'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'arrowclick',
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
  selector: splitbuttonMetaData.XTYPE,
	inputs: splitbuttonMetaData.INPUTNAMES,
	outputs: splitbuttonMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => splitbutton)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class splitbutton extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,splitbuttonMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,splitbuttonMetaData);}
}