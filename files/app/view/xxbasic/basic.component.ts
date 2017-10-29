import { Component } from '@angular/core';
import { CompanyStore } from '../../store/company.store';
import { SalesStore } from '../../store/sales.store';

@Component({
	styles:  [``],
  selector: '',
	template: `
		<div style="height:100%;width:100%;">
			<extjs [xtype]='"button"'
				[config]='buttonConfig'
				(click)='onButtonClickHello($event);'
			></extjs>
			<extjs [xtype]='"list"' 
				[config]='listConfig' 
				(ready)="readyList($event)"
			></extjs>
		</div>
	`
})
export class BasicComponent { 

	buttonConfig: any = { 
		left: 10, top: 10, width: 100, height: 50,
		text: 'hello',
		ui: 'action',
	};
	onButtonClickHello(event) {
		console.log(event);
		event.stopPropagation();
	}

	listConfig: any = { 
		left: 10, top: 80, width: 400, height: 600,
		shadow: true,
		showAnimation: 'flip',
		rowLines: true,
		itemTpl: '{name} - {phone}',
		store: new CompanyStore({}).extjsObject
	};

	readyList(theList) {
		//console.log(theList);
	}

}
