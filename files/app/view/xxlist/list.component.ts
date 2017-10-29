import { Component } from '@angular/core';
import { AgencyStore } from '../../store/agency.store';

@Component({
	styles:  [``],
  selector: '',
	template: `
		<x-list
			[config]='listConfig' 
			(ready)="readyList($event)"
			(select)="selectList($event)"
		></x-list>
	`
})
export class ListComponent { 
	//private border:any = 20;
	//private size: any = 'calc(100% - ' + (this.border * 2) + 'px)';

	listConfig: any = { 
		//left: this.border, top: this.border,
		//style: { width: this.size, height: this.size },
		//shadow: true,

		store: new AgencyStore().extjsObject,
		itemTpl: '{agencyCode} - {agencyName} ({agencyAbbreviation})',
	};

	selectList(o) {
		console.log(o.record);
	}

	readyList(theList) {
		//console.log(theList);
	}
}
