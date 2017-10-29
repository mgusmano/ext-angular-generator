import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - Ext.Video
export class videoMetaData {
	public static XTYPE: string = 'video';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'ariaAttributes',
		'ariaDescribedBy',
		'ariaLabel',
		'ariaLabelledBy',
		'autoPause',
		'autoResume',
		'axisLock',
		'bind',
		'border',
		'bottom',
		'centered',
		'cls',
		'constrainAlign',
		'contentEl',
		'controller',
		'controls',
		'data',
		'defaultListenerScope',
		'disabled',
		'displayed',
		'docked',
		'draggable',
		'enableControls',
		'enterAnimation',
		'eventHandlers',
		'exitAnimation',
		'flex',
		'floated',
		'focusCls',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideMode',
		'hideOnMaskTap',
		'html',
		'id',
		'instanceCls',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'left',
		'listeners',
		'loop',
		'margin',
		'maxHeight',
		'maxWidth',
		'media',
		'minHeight',
		'minWidth',
		'modal',
		'modelValidation',
		'muted',
		'name',
		'nameable',
		'padding',
		'plugins',
		'posterUrl',
		'preload',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderTo',
		'right',
		'ripple',
		'scrollable',
		'session',
		'shadow',
		'shareableName',
		'shim',
		'showAnimation',
		'showPosterOnPause',
		'style',
		'tabIndex',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'translationMethod',
		'twoWayBindable',
		'ui',
		'url',
		'userCls',
		'viewModel',
		'volume',
		'weight',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'flex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'video,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'video'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'video'},
		{name:'beforetofront',parameters:'video'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'video,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'ended',parameters:'video,time'},
		{name:'erased',parameters:'video'},
		{name:'floatingchange',parameters:'video,positioned'},
		{name:'focus',parameters:'video,event'},
		{name:'focusenter',parameters:'video,event'},
		{name:'focusleave',parameters:'video,event'},
		{name:'fullscreen',parameters:'video'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'video'},
		{name:'initialize',parameters:'video'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'moved',parameters:'video,container,toIndex,fromIndex'},
		{name:'mutedchange',parameters:'video,muted'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'pause',parameters:'video,time'},
		{name:'play',parameters:'video'},
		{name:'positionedchange',parameters:'video,positioned'},
		{name:'removed',parameters:'video,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'video'},
		{name:'stop',parameters:'video'},
		{name:'timeupdate',parameters:'video,time'},
		{name:'tofront',parameters:'video'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'video,newData'},
		{name:'volumechange',parameters:'video,volume'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'destroy',
		'disabledchange',
		'dockedchange',
		'ended',
		'erased',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'moved',
		'mutedchange',
		'orientationchange',
		'painted',
		'pause',
		'play',
		'positionedchange',
		'removed',
		'resize',
		'rightchange',
		'scrollablechange',
		'show',
		'stop',
		'timeupdate',
		'tofront',
		'topchange',
		'updatedata',
		'volumechange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: videoMetaData.XTYPE,
	inputs: videoMetaData.INPUTNAMES,
	outputs: videoMetaData.OUTPUTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => video)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class video extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,videoMetaData);
	}
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,videoMetaData);}
}