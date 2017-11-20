import { Component } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
	styles:  [``],
  selector: 'tabsx',
	template: `
		<ul>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
        {{tab.tabTitle}} {{tab.active}}
      </li>
		</ul>
		<ng-content></ng-content>
	`
})
export class TabsComponent { 
	tabs: TabComponent[] = [];

	addTab(tab:TabComponent) {
		if (this.tabs.length === 0) {
			tab.active = true;
		}
		else {
			tab.active = false;
		}
		this.tabs.push(tab);
	}

	selectTab(tab:TabComponent) {
		this.tabs.forEach((tab) => {
			tab.active = false;
		});
		tab.active = true
	}
}
