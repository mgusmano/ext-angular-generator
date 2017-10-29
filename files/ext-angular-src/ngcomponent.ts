import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
class ExtNgComponentMetaData {
	public static XTYPE: string = 'container';
	public static INPUTNAMES: string[] = ['selector','component','selectorParams'];
	public static OUTPUTS: any[] = [];
	public static OUTPUTNAMES: string[] = [];
}
@Component({
  selector: 'ngcomponent',
	inputs: ExtNgComponentMetaData.INPUTNAMES.concat('config'),
	outputs: ExtNgComponentMetaData.OUTPUTNAMES.concat('ready'),
	providers: [{provide: base, useExisting: forwardRef(() => ngcomponent)}],
	template: '<ng-template #dynamic></ng-template>'
})
export class ngcomponent extends base {
	//@ContentChildren(base,{read:ViewContainerRef}) extbaseRef: QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef: ViewContainerRef;
	constructor(myElement: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
		super(myElement, componentFactoryResolver, viewContainerRef, ExtNgComponentMetaData);
	}
	ngAfterContentInit() { this.AfterContentInit(this.extbaseRef); }
	ngOnInit() { this.OnInit(this.dynamicRef); }
}
