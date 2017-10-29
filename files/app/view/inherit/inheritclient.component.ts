// import { Component, ViewChildren, ViewChild, ViewContainerRef, QueryList, AfterViewInit } from '@angular/core';
// import { ExtBase } from './ext.base';
// //import { ExtGrid } from './ext.grid';
// //import { ExtCartesian } from './ext.cartesian';

// @Component({
//   selector: 'inheritclient',
// 	template: `
// 	<ext2></ext2>
// 	<x-cartesian2></x-cartesian2>
// 	<x-grid2></x-grid2>
// 	<x-ngcomponent2 [selector]="'tabs'" [selectorParams]="tabsParams"></x-ngcomponent2>
// 	`
// })
// export class InheritClientComponent implements AfterViewInit { 
// 	@ViewChildren(ExtBase, { read: ViewContainerRef }) ExtBaseRef: QueryList<ViewContainerRef>;
// 	//@ViewChildren(ExtGrid) extGrid: QueryList<ExtGrid>;
// 	//@ViewChildren(ExtCartesian) extCartesian: QueryList<ExtCartesian>;
// 	tabsParams: any = '{}';

// 	ngAfterViewInit() {
// 		console.log(this.ExtBaseRef.length);
// 		//console.log(this.extGrid.length);
// 		//console.log(this.extCartesian.length);
// 	}

// }
