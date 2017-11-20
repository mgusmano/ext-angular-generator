import { Component, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
	styles:  [``],
  selector: 'tabx',
	template: `
		<div [hidden]="!active">
			<ng-content></ng-content>
		</div>
		`
})
export class TabComponent {
	@Input() tabTitle: string;
	public active: boolean;

	constructor(tabs: TabsComponent) {
		tabs.addTab(this);
	}
}
