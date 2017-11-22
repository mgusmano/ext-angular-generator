import { Component } from '@angular/core';
import { WidgetStore } from '../../store/widget.store';

@Component({
	styles:  [``],
  selector: '',
	template: `
		<grid fitToParent=true
			[config]='gridConfig' 
			(ready)="readyGrid($event)"
			(select)="selectGrid($event)"
		></grid>
	`
})
export class WidgetGridComponent { 

	selectGrid(o) {
		console.log(o.record);
	}

	readyGrid(theGrid) {
		console.log(theGrid);
	}

	public border:any = 0;
	public size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	public gridConfig:any;
	constructor() {
		this.gridConfig = { 
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			//shadow: true, 
			store: new WidgetStore({}).extjsObject,

			viewConfig: {
				stripeRows: true,
				enableTextSelection: false,
				markDirty: false
			},
			trackMouseOver: false,
			//disableSelection: true,
			columns: [
				{
					text: 'sparkline Data',
					width: 400,
					dataIndex: 's2'
				},
				{
					text: 'Sparkline',
					//width: 400,
					flex: 1,
					xtype: 'widgetcolumn',
					dataIndex: 's2',
					widget: {
							xtype: 'sparklineline',
							bind: '{record.s2}',
							tipTpl: 'Value: {y:number("0.00")}'
					}
				}
			]
		};
	}
}
