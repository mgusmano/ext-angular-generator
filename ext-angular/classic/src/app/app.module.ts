import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';

import { ExtAngularModule } from '../ext-angular-classic';

import { AgencyService } from './service/agency.service';

//in main
import { ActionsComponent } from './view/main/actions.component';
import { DetailComponent } from './view/main/detail.component';
import { FooterComponent } from './view/main/footer.component';
import { HeadingComponent } from './view/main/heading.component';
import { MainComponent } from './view/main/main.component';
import { MenuComponent } from './view/main/menu.component';
import { SideBarComponent } from './view/main/sidebar.component';
import { WelcomeComponent } from './view/main/welcome.component';

import { AgenciesComponent } from './view/agencies/agencies.component';
import { AnalyzeComponent } from './view/analyze/analyze.component';
import { BoilerplateComponent } from './view/boilerplate/boilerplate.component';
import { CandidateCalendarsComponent } from './view/candidatecalendars/candidatecalendars.component';
import { ConfiguratorComponent } from './view/configurator/configurator.component';
import { ChartComponent } from './view/chart/chart.component';
import { ContentChildrenComponent } from './view/contentchildren/contentchildren.component';
import { D3TreeListComponent } from './view/d3treelist/d3treelist.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DialogAnchorDirective } from './view/dialog/dialoganchor.directive';
import { DialogComponent } from './view/dialog/dialog.component';
import { DialogClientComponent } from './view/dialog/dialogclient.component';
import { ExtAngularComponent } from './view/extangular/extangular.component';
import { IntroComponent } from './view/intro/intro.component';
import { ItemsClientComponent } from './view/items/itemsclient.component';
import { ReportsComponent } from './view/reports/reports.component';
import { SimpleComponent } from './view/items/simple.component';
import { SimpleGridComponent } from './view/simplegrid/simplegrid.component';
import { SpendingDetailComponent } from './view/spendingdetail/spendingdetail.component';
import { TabsComponent } from './view/tabs/tabs.component';
import { TabComponent } from './view/tabs/tab.component';
import { TabsClientComponent } from './view/tabs/tabsclient.component';
import { TreeListComponent } from './view/treelist/treelist.component';
import { WidgetGridComponent } from './view/widgetgrid/widgetgrid.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/simplegrid', pathMatch: 'full' },
	{ path: 'itemsclient', component: ItemsClientComponent },
	{ path: 'contentchildren', component: ContentChildrenComponent },
	{ path: 'tabsclient', component: TabsClientComponent },
	{ path: 'dialogclient', component: DialogClientComponent },
	{ path: 'extangular', component: ExtAngularComponent },
	{ path: 'intro', component: IntroComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'agencies', component: AgenciesComponent },
	{ path: 'spendingdetail', component: SpendingDetailComponent },
	{ path: 'chart', component: ChartComponent },
	{ path: 'reports', component: ReportsComponent },
	{ path: 'candidatecalendars', component: CandidateCalendarsComponent },
	{ path: 'analyze', component: AnalyzeComponent },
	{ path: 'd3treelist', component: D3TreeListComponent },
	{ path: 'treelist', component: TreeListComponent },
	{ path: 'widgetgrid', component: WidgetGridComponent },
//	{ path: 'inheritclient', component: InheritClientComponent },
//	{ path: 'dynamicclient', component: DynamicClientComponent },
	{ path: 'simplegrid', component: SimpleGridComponent },
//	{ path: 'boilerplate', component: BoilerplateComponent },
	{ path: 'configurator', component: ConfiguratorComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
	imports: [
		BrowserModule,
//		xModule,
		ExtAngularModule,
//		ngcomponent,
		routing
	],
	exports: [
		//TabsClientComponent,
		//TabsComponent
	],
	declarations: [
		ActionsComponent,
		DetailComponent,
		FooterComponent,
		HeadingComponent,
		MainComponent,
		MenuComponent,
		SideBarComponent,
		WelcomeComponent,

		AgenciesComponent,
		AnalyzeComponent,
		BoilerplateComponent,
		CandidateCalendarsComponent,
		ChartComponent,
		ConfiguratorComponent,
		ContentChildrenComponent,
		D3TreeListComponent,
		DashboardComponent,
		DialogAnchorDirective,
		DialogComponent,
		DialogClientComponent,
		ExtAngularComponent,
		IntroComponent,
		ItemsClientComponent,
		ReportsComponent,
		SimpleComponent,
		SimpleGridComponent,
		SpendingDetailComponent,
		TabsComponent,
		TabComponent,
		TabsClientComponent,
		TreeListComponent,
		WidgetGridComponent
	],
	providers: [
		AgencyService,
		//TabsClientComponent
	],
	entryComponents: [
		TabsClientComponent, 
		SimpleComponent, 
		WelcomeComponent, 
		MenuComponent, 
		ActionsComponent, 
		SideBarComponent, 
		FooterComponent, 
		ChartComponent, 
		TabsComponent, 
		DialogComponent
		//OutletComponent
	],
	bootstrap: [MainComponent]
})
export class AppModule { }


