import { Component, Input, OnInit } from '@angular/core';
//import { DialogAnchorDirective } from '../../extangular/dialoganchor.directive';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	styles:  [``],
	selector: 'simple',
	inputs: [ 'buttontext' ],

	template: `
		<div style="background:pink;width:150px;padding:5px;">
			<div>Angular2 component {{time}}</div>
			<button [config]="buttonConfig" (tapit)="onButtonTap($event)"></button>
		</div>
	`
})
export class SimpleComponent { 
	time: any;
	//@Input() buttontext: any;
	buttontext: any;
	buttonConfig: any;

	//constructor(private router: Router) {}

	ngOnInit() {
	this.buttonConfig = {
		text: this.buttontext,
		ui: 'action'
	}



		// router.events.subscribe(value => {
		// 	if (value instanceof NavigationEnd) {
		// 		if (this.router.routerState.snapshot.url == '/agenciesNN') {
		// 				this.detail = 'center-detail'
		// 			} else {
		// 				this.detail = '';
		// 			}
 		// 	}
		//});
	}

	onButtonTap(event) {
		//this.router.navigate(['/reports'])
		alert(event);
		debugger;
		var today = new Date();
		this.time = today.getTime();
	}
}
