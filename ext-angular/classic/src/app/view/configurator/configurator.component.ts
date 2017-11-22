import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';

@Component({
	styles:  [``],
	template: `
<pivotgrid fitToParent = true
	[config]='configuratorConfig'
></pivotgrid>
	`
})
export class ConfiguratorComponent {
	public thePivotGrid; any;
	public configuratorConfig:any;

	constructor(public agencyService: AgencyService) {
		this.configuratorConfig = { 
			matrix: {
				type: 'local',
				viewLayoutType: 'outline',
				store: agencyService.getAgencyPortfolioStore(),
				enableLocking: true,
				colGrandTotalsPosition: 'none',
				leftAxis: [],
				topAxis: [],
				aggretate: []
			},
			 plugins: {
				pivotconfigurator: {
					width: 500,
					fields: [
						{
							dataIndex:  'totalITspendingCYB',
							header:     'Total IT Spending',
							aggregator: 'sum',
							formatter: 'number("$0,000.00")',
							settings: {
								allowed: ['aggregate']
								//style: { fontWeight: 'bold' }
							}
						}, 
						{
								dataIndex:  'agencyName',
								header:     'Agency',
								settings: {
										aggregators: ['count']
								}
						}, 
						{
								dataIndex:  'bureauName',
								header:     'Bureau',
								settings: {
										aggregators: ['count']
								}
						}, 
						{
								dataIndex:  'feaBRMservicesPrimaryServiceArea',
								header:     'Primary Service Area',
								settings: {
										aggregators: ['count']
								}
						},
						{
								dataIndex:  'partOfITPortfolio',
								header:     'IT Portfolio',
								settings: {
										aggregators: ['count']
								}
						},
						{
								dataIndex:  'typeOfInvestment',
								header:     'Type Of Investment',
								settings: {
										aggregators: ['count']
								}
						} 
					]
				}
			}
		}
	}
}
