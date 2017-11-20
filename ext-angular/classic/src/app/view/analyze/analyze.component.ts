declare var Ext: any;
import { Component } from '@angular/core';
import { SalesStore } from '../../store/sales.store';

@Component({
	selector: '',
	styles: [``],
	template: `
		<combobox
			[config]='comboConfig'
			(select)='onComboSelect($event)'>
		</combobox>	
		<pivotgrid
			[flex]="'1'"
			[title] ='pivotTitle'
			[config]='pivotgridConfig'
			(ready)="readyPivotGrid($event)"
			(pivotdone)="onPivotgridPivotDone($event)">
		</pivotgrid>
		<cartesian
			[flex]="'1'"
			[config]='cartesianConfig'
			(ready)="readyCartesian($event)">
		</cartesian>
 `
})
export class AnalyzeComponent {
	public header: any = '<div class="heading">Analyze</div>';
	public selectfieldOptions: any = [
		{ value: 'ByCountry', text: 'What are the order amounts of each salesperson in a specific country?' },
		{ value: 'ByYear', text: 'How did salespeople perform in a specific year?' },
		{ value: 'Total', text: 'What are the order amounts of each salesperson?' }
	]
	// public selectfieldConfig: any = {
	// 	label: 'Select report:',
	// 	labelWidth: 100,
	// 	usePicker: true,
	// 	margin: '15 0 0 10'
	// }
	public comboConfig: any = {
		fieldLabel: 'Select report:',
		width: '99%',
		store: this.selectfieldOptions,
		margin: '15 20 10 10'
	}
	public thePivotGrid; any;
	public pivotTitle: any;
	public pivotgridConfig: any;
	public theCartesian: any;
	public cartesianConfig: any;

	constructor() {
		this.cartesianInit();
		this.pivotgridInit();
	}

	pivotgridInit() {
		this.pivotTitle = 'By Country';
		this.pivotgridConfig= {
			plugins: {
        pivotdrilldown: true
    	},
			// plugins: [{
			// 	type: 'pivotdrilldown'
			// }],
			margin: '0 20 20 20',
			shadow: true,
			matrix: {
				type: 'local',
				viewLayoutType: 'outline',
				rowGrandTotalsPosition: 'none',
				columnGrandTotalsPosition: 'none',
				store: new SalesStore({}).extjsObject,
				leftAxis: [ { dataIndex: 'salesperson', direction: 'ASC', header: 'Salesperson', width: 150 } ],
				topAxis: [ { dataIndex: 'country', direction: 'ASC' } ],
				aggregate: [ { dataIndex: 'amount', header: 'Total', aggregator: 'sum', width: 150 } ]
			}
		};
	}

	cartesianInit() {
		this.cartesianConfig = {
			margin: '0 20 20 20',
			shadow: true,
			height: 500,
			legend: { type: 'sprite', docked: 'top' },
			series: [],
			axes: [
				{
					type: 'category',
					position: 'bottom'
				},
				{
					type: 'numeric',
					position: 'left',
					renderer: function (axis, label, layoutContext) {
						var value = layoutContext.renderer(label) / 1000;
						return value === 0 ? '$0' : Ext.util.Format.number(value, '$0K');
					},
					grid: {
						odd: { fillStyle: 'rgba(255, 255, 255, 0.06)' },
						even: { fillStyle: 'rgba(0, 0, 0, 0.03)' }
					}
				}
			]
		};
	}

	readyPivotGrid(thePivotGrid) {
		console.log('readyPivotGrid');
		this.thePivotGrid = thePivotGrid;
	}
	readyCartesian(theCartesian) {
		console.log('readyCartesian');
		this.theCartesian = theCartesian;
	}

	public onPivotgridPivotDone({matrix}) {
		console.log('onPivotgridPivotDone');
		var chart = this.theCartesian.x;
		var seriesXField = []; 
		var seriesYField = []; 
		var seriesTitle = [];
		var dataFields = [];
		matrix.columns.forEach(function(column) {
			if(column.leftAxis) {
				dataFields.push(column.dataIndex);
				seriesXField.push(column.dataIndex);
			}
			if(!column.leftAxis) {
				dataFields.push(column.dataIndex);
				seriesYField.push(column.dataIndex);
				seriesTitle.push(column.text);
			}
		});
		var data:any = [];
		matrix.pivotStore.data.items.forEach(function(arrayItem) {
				if (arrayItem.data.isRowGrandTotal == false) {
					data.push(arrayItem.data);
				}
		});
		chart.getAxes()[0].setFields(seriesXField[0]);
		var newSeries = Ext.create('Ext.chart.series.Bar',{
			id: '1',
			type: 'bar',
			xField: seriesXField[0],
			yField: seriesYField,
			title: seriesTitle,
			stacked: false
		});
		chart.removeSeries('1');
		chart.addSeries(newSeries);
		chart.setStore({
			fields: [dataFields],
			data: data
		});
	}


	//public onSelectfieldSelect({newValue}) {
	public onComboSelect({record}) {
		var newValue = record.data.value
		var reportspivotgrid = this.thePivotGrid.extjsObject;
		switch(newValue) {
			case 'ByCountry':
				reportspivotgrid.setTitle('By Country');
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'none',
					leftAxis: [ { dataIndex: 'salesperson', direction: 'ASC', header: 'Salesperson', width: 150 } ],
					topAxis: [ { dataIndex: 'country', direction: 'ASC' } ],
					aggregate: [ { dataIndex: 'amount', header: 'Total', aggregator: 'sum', width: 150 } ]
				});
				break;
			case 'ByYear':
				reportspivotgrid.setTitle('By Year');
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'last',
					leftAxis: [ { dataIndex: 'salesperson', direction: 'ASC', header: 'Salesperson', width: 150 } ],
					topAxis: [ { dataIndex: 'year', direction: 'ASC' } ],
					aggregate: [ { dataIndex: 'amount', header: 'Total', aggregator: 'sum', width: 150 } ]
				});
				break;
			case 'Total':
				reportspivotgrid.setTitle('Total');
				reportspivotgrid.reconfigurePivot({
					colGrandTotalsPosition: 'last',
					leftAxis: [ { dataIndex: 'salesperson', direction: 'ASC', header: 'Salesperson', width: 150 } ],
					topAxis: [],
					aggregate: [ { dataIndex: 'amount', header: 'Total', aggregator: 'sum', width: 150 } ]
				});
				break;
			default:
				break;
		}
	}

}
