import { Component, Type } from '@angular/core';

import { SimpleComponent } from '../items/simple.component';
import { FooterComponent } from '../main/footer.component';
import { TabsClientComponent } from '../tabs/tabsclient.component';
//import { OutletComponent } from '../main/outlet.component';
import { SideBarComponent } from '../main/sidebar.component';
import { WelcomeComponent } from '../main/welcome.component';
import { MenuComponent } from '../main/menu.component';
import { ActionsComponent } from '../main/actions.component';


@Component({
	styles:  [``],
	selector: '',
	template: ``
	//template2: `
		// <container [layout]="'fit'" [config]="panelConfig">
		// 	<container [docked]="'left'" [config]="leftConfig">
		// 		<ngcomponent [component]="sidebar"></ngcomponent>
		// 	</container>
		// 	<toolbar [docked]="'top'" [config]="topConfig">
		// 		<button [text]="'hi'" [ui]="'action'" [width]="'100'"></button>
		// 		<button [config]="button3Config"></button>
		// 	</toolbar>
		// 	<container [docked]="'bottom'" [config]="bottomConfig">
		// 		<ngcomponent [component]="footer" ></ngcomponent>
		// 	</container>
		// 	<container [config]="centerConfig"></container>
		// 	<container [docked]="'right'" [config]="rightConfig">
		// 		<ngcomponent [component]="tabs" ></ngcomponent>
		// 	</container>
		// </container>
	//`
})
export class ItemsClientComponent {
	tabs: Type<TabsClientComponent> = TabsClientComponent;
	sidebar: Type<SideBarComponent> = SideBarComponent;
	public panelConfig: any = { style: { background: 'lightyellow'}, top: 10, left:10, width: 1000, height: 900 }
	public leftConfig: any = { xhtml: 'left', width: 200, style: { background: 'lightgray'}}
	public topConfig: any = { style: { background: 'lightgreen'}, height: 50, padding: 0	}
		public button1Config: any = { text: 'hello1', ui: 'action', margin: 2 }
		public button2Config: any = { text: 'hello2', ui: 'action', margin: 2 }
		public button3Config: any = { text: 'hello3', ui: 'action', margin: 2 }
	public bottomConfig: any = { xhtml: 'bottom', width: 500, height:40,  style: { background: 'lightgreen'}}
	public centerConfig: any = { html: 'center', flex: 1, style: { background: 'lightyellow'}}
	//public centerConfig: any = { component: 'outlet', item: 'a03', html: '<div id="a03"></div>'}
	public rightConfig: any = { xid: 'theRight', html: 'right', width: 200, style: { background: 'lightblue'}}

	//public welcomeConfig: any = { html: 'welcome', height: 50, style: { backgroundColor: 'lightblue'}}

	// onSelectionChange(event) {
	// 	alert(event.node.data.xtype);
	// }

	// public menuConfig: any = {
	// 	xtype: 'treelist',
	// 	flex: 1,
	// 	expanderFirst: false,
	// 	expanderOnly: false,
	// 	store: {
	// 		root: {
	// 			expanded: true,
	// 			children: [
	// 				{ iconCls: 'fa fa-cog', text: 'page01', xxclass: 'AppCamp.view.Page01View', xtype: 'page01view', leaf: true },
	// 				{ iconCls: 'fa fa-cog', text: 'page02', xxclass: 'AppCamp.view.Page02View', xtype: 'page02view', leaf: true },
	// 				{ iconCls: 'fa fa-cog', text: 'page03', xxclass: 'AppCamp.view.page03.Page03View', xtype: 'page03view', leaf: true },
	// 				{ iconCls: 'fa fa-cog', text: 'page04', xxclass: 'AppCamp.view.Page04View', xtype: 'page04view', leaf: true }
	// 			]
	// 		}
	// 	}
	// }
}
