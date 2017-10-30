declare var Ext: any;
/* tslint:disable:member-ordering */
import {Component, ChangeDetectionStrategy} from '@angular/core';
//import {ExtJS} from '../../extangular/extjs';
import {SalesStore} from '../../store/sales.store';
import {SimpsonsStore} from './simpsons.store';
import {ForumStore} from './forum.store';
import {SimpsonsModel} from './simpsons.model';

@Component({
//	directives: [ ExtJSButton, ExtJSGrid, ExtJSPivotGrid ],
	selector: 'extangular',
	template: `

				<h3>ExtJS Sales Grid</h3> 
				<grid #theGridSales
					[(title)]="titleSales"
					[columns]= "columnsSales" 
					[store]="storeSales"
					[config]="configSales"
					(select)="onGridSelectSales($event)"
					(selectionchange)="onGridSelectionChangeSales($event)"
				></grid>

				<h3>ExtJS Simpsons Grid</h3>
				<grid #theGridSimpsons
					[(title)]="titleSimpsons"
					[columns]= "columnsSimpsons" 
					[store]="storeSimpsons"
					[config]="configSimpsons"
					(select)="onGridSelectSimpsons($event)"
					(selectionchange)="onGridSelectionChangeSimpsons($event)"
					(beforecellclick)="onGridBeforeCellClickSimpsons($event)"
					(enable)="onGridEnableSimpsons($event)"
					(headerclick)="onGridGenericSimpsons($event)"
				></grid>

				<br/>Selected email: {{email}}

				<br/><br/>
				<button
					[config]="buttonConfigHello"
					[text]="'hello'"
					(click)="onButtonClickHello($event)" 
				></button>
				<br/>{{n}}
				<br/>{{s}}
				<br/>{{p}}

				<h3>ExtJS Forum Grid</h3> 

				<grid #theGridForum
					[(title)]="titleForum"
					[columns]= "columnsForum" 
					[store]="storeForum"
					(select)="onGridSelectForum($event)"
					(selectionchange)="onGridSelectionChangeForum($event)"
				></grid>

	

	`
})

				// <br/><br/>
				// <pivotgrid #thePivotGrid [nofit]=true
				// 	[(title)]="titlePivotGrid"
				// 	[leftAxis]="leftAxisPivotGrid" 
				// 	[topAxis]="topAxisPivotGrid" 
				// 	[aggregate]="aggregatePivotGrid"
				// 	[store]="storePivotGrid"
				// 	(pivotdone)="onPivotDone($event)"
				// ></pivotgrid>


export class ExtAngularComponent {
	public email: string;
	public n: number = 1;
	public s;
	public p;

	constructor () {
		this.gridSimpsonsConstruct();
		//this.gridForumConstruct();
		this.gridSalesConstruct();
		//this.pivotGridConstruct();
	}

	//**********************************************
	public titlePivotGrid: string;
	public leftAxisPivotGrid: any;
	public topAxisPivotGrid: any;
	public aggregatePivotGrid: any;
	public storePivotGrid: any;
	public configPivotGrid: any;
	public pivotGridConstruct() {
		this.titlePivotGrid = 'Pivot Grid';
		this.topAxisPivotGrid = [{	dataIndex: 'country', direction: 'ASC' }];
		this.leftAxisPivotGrid = [
			{
				width:      120,
				id:         'salesperson',
				dataIndex:  'salesperson',
				header:     'Sales person'
			}
		];
		this.aggregatePivotGrid = [
			{
				measure:    'amount',
				header:     'Grand total',
				dataIndex:  'amount',
				aggregator: 'sum',
				align:      'right',
				width:      135,
				renderer:   Ext.util.Format.numberRenderer('0,000.00')
			}
		], 
		this.storePivotGrid= new SalesStore({}).extjsObject;
		this.configPivotGrid = {
			style: { border: '1px solid #e9e9e9' },
			plugins: [{ ptype: 'pivotdrilldown' }],
			rowGrandTotalsPosition: 'none'
		};
	}
	public onPivotDone(event) {
		console.log('pivotdone', event);
	}
	//**********************************************

	//**********************************************
	public titleSimpsons: string;
	public columnsSimpsons: any;
	public selModelSimpsons: any;
	public storeSimpsons: any;
	public configSimpsons: any;
	public gridSimpsonsConstruct() {
		this.titleSimpsons = 'Simpsons';
		this.columnsSimpsons = [
			{ text: 'Name', width: 100, sortable: false, hideable: false, dataIndex: 'name' },
			{ text: 'Email Address', flex: 1, dataIndex: 'email', renderer: function(value: any) {
				return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value); }
			},
			{ text: 'Phone Number', width: 150, dataIndex: 'phone' }
		];
		this.selModelSimpsons = {};
		this.storeSimpsons = new SimpsonsStore({}).extjsObject;
		this.configSimpsons = { width: '100%', height: '300px' };
	}
	public onGridSelectSimpsons(event) {
		console.log('select', event);
		this.email = event.record.data.email;
	}
	public onGridSelectionChangeSimpsons(event) {
		console.log('selectionchange', event);
	}
	public onGridBeforeCellClickSimpsons(event) {
		console.log('beforecellclick', event);
	}
	public onGridEnableSimpsons(event) {
		console.log('enable', event);
	}
	public onGridGenericSimpsons(event) {
		console.log('generic', event);
	}
	//**********************************************

	//**********************************************
	public buttonConfigHello: any = { width: 200 };
	public onButtonClickHello(event) {
		this.titleSimpsons = 'ya';
		let user = new SimpsonsModel({
			name : 'Conan',
			email  : 'a@a.com',
			phone: '555-555-5555'
		});
		user.extjsObject.changeName();
		this.s = user.extjsObject.get('name');
		user.changePhone();
		this.p = user.extjsObject.get('phone');
		console.log(user);
		this.n = this.n + 100;
		event.stopPropagation();
	}
	//**********************************************

	//**********************************************
	public titleForum: string;
	public columnsForum: any;
	public selModelForum: any;
	public storeForum: any;
	public configForum: any;
	public gridForumConstruct() {
		this.titleForum = 'Forum Threads - Buffered Store and Renderer';
		this.columnsForum = [
			// {
			// 	xtype: 'rownumberer',
			// 	width: 50,
			// 	sortable: false
			// },
			{
				tdCls: 'grid-cell-topic',
				text: 'Topic',
				dataIndex: 'title',
				flex: 1,
				renderer: function(value, p, record) {
					return Ext.String.format(
						'<a href="http://sencha.com/forum/showthread.php?p={1}" target="_blank">{0}</a>',
						value,
						record.getId()
					);
				},
				sortable: false
			},
			{
				text: 'Author',
				dataIndex: 'username',
				width: 100,
				hidden: true,
				sortable: false
			},
			{
				text: 'Replies',
				dataIndex: 'replycount',
				align: 'center',
				width: 70,
				sortable: false
			},
			{
				//id: 'last',
				text: 'Last Post',
				dataIndex: 'lastpost',
				width: 130,
				renderer: Ext.util.Format.dateRenderer('n/j/Y g:i A'),
				sortable: false
			}
		];
		this.selModelForum = {
			pruneRemoved: false,
			type: 'spreadsheet',
			//columnSelect: true,
			rowSelect: true
		};
		this.storeForum = new ForumStore({}).extjsObject;
		this.configForum = {
			margin: '0 0 5 0',
			height: 400,
			loadMask: true,
			multiSelect: true,
			viewConfig: {
				trackOver: false,
				emptyText: '<h1 style="margin:20px">No matching results</h1>'
			}
		};
	}
	public onGridSelectForum(event) {
		console.log(event);
		this.email = event.record.data.email;
	}
	public onGridSelectionChangeForum(event) {
		console.log(event);
	}
	//**********************************************
	
	//**********************************************
	public titleSales: string;
	public columnsSales: any;
	public selModelSales: any;
	public storeSales: any;
	public configSales: any;
	public gridSalesConstruct() {
		this.titleSales = 'Sales';
		this.columnsSales = [
			{
					text: 'Orderid',
					dataIndex: 'orderid'
			},
			{
					text: 'Salesperson',
					width: 125,
					dataIndex: 'salesperson'
			},
			{
					text: 'Amount',
					dataIndex: 'amount'
			},
			{
					text: 'Country',
					width: 125,
					dataIndex: 'country'
			},
			{
					text: 'Orderdate',
					width: 300,
					dataIndex: 'orderdate'
			},
			{
					text: 'Person - range',
					width: 150,
					dataIndex: 'person-range'
			},
			{
					text: 'Year',
					flex: 1,
					dataIndex: 'year'
			}
		];
		this.selModelSales = {
			//pruneRemoved: false,
			//type: 'spreadsheet',
			//columnSelect: true,
			//rowSelect: true
		};
		this.storeSales = new SalesStore({}).extjsObject;
		this.configSales = {
			width: '70%', height: '300px',
			//margin: '0 0 5 0',
			//height: 400,
			loadMask: true,
			multiSelect: true,
			viewConfig: {
				trackOver: false,
				emptyText: '<h1 style="margin:20px">No matching results</h1>'
			}
		};
	}
	public onGridSelectSales(event) {
		console.log(event);
		this.email = event.record.data.email;
	}
	public onGridSelectionChangeSales(event) {
		console.log(event);
	}
	//**********************************************
}


		// this.selModelSimpsons = {
		// 	type: 'spreadsheet',
		// 	rowSelect: true,
		// 	columnSelect: true,
		// 	cellSelect: true, 
		// 	extensible: true
		// };

    // setTimeout(function() {
    //   console.log(that.n);
    //   that.n = that.n + 10;
		// 	console.log(that.n);
    // }, 1000);
  //}


	// public store:any = {
	// 	xtype: 'store',
	// 	fields: [ 'name', 'email', 'phone' ],
	// 	data: [
	// 		{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
	// 		{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
	// 		{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
	// 		{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
	// 	]
	// };
