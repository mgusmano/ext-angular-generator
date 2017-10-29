import {Component} from '@angular/core';

@Component({
	selector: 'treelistx',
	template: `
	<treelist
		ui="nav"
		(ready)="onTreeReady($event)"
	></treelist>
	`
})
export class TreeListComponent {

	private onTreeReady(theTree) {
		var treeliststore = {
			data: {
				root: {
					expanded: true,
					children: [
						{ text: 'President', iconCls: 'x-fa fa-institution', xtype: 'dashboardview', leaf: true }
					]
				}
			}
		};
		theTree.extjsObject.setStore(treeliststore);


		//theTree.extjsObject.setStore(Ext.create("Ext.tree.Store",treeliststore));
	}


}
