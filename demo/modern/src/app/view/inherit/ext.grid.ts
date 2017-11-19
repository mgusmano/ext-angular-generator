// import { Component, forwardRef, ViewContainerRef, ContentChildren, QueryList } from '@angular/core';
// import { ExtBase } from './ext.base';
// @Component({
//   selector: 'ext-grid2',
//   template: '<div>ext-grid2</div>',
//   providers: [
// 		{ provide: ExtBase, useExisting: forwardRef(() => ExtGrid2) }
// 	]
// })
// export class ExtGrid2 extends ExtBase {
// 	@ContentChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
// 	constructor(viewContainerRef: ViewContainerRef) {
// 		super(viewContainerRef);
// 	}

// 	ngAfterContentInit() {
// 		//debugger;
// 		console.log(this.ExtBaseRef.length);
// 		//console.log(this.ExtGrid2Ref);
// 		//var extBaseComponentRef : ViewContainerRef = this.ExtBaseRef.first;
// 	}

// }

