import { Component } from '@angular/core';

@Component({
	styles:  [``],
  selector: '',
	template: `
		<container [config]="containerConfig">
				<button [config]="button1Config"></button>
				<button [config]="button2Config"></button>
		</container>
	`
})
export class ContentChildrenComponent { 
	button1Config = { text:'1', ui: 'action' };
	button2Config = { text:'2', ui: 'action' };
	public containerConfig:any = {};
	constructor() {
		this.containerConfig = {
			html: 'hi',
			layout: 'vbox'
		}
	}
}
