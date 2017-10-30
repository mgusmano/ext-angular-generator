import { NgModule } from "@angular/core";
import { button } from './button';
import { calendar_event } from './calendar_event';
import { calendar_form_add } from './calendar_form_add';
import { calendar_calendar_picker } from './calendar_calendar_picker';
import { calendar_form_edit } from './calendar_form_edit';
import { calendar_timefield } from './calendar_timefield';
import { calendar_daysheader } from './calendar_daysheader';
import { calendar_weeksheader } from './calendar_weeksheader';
import { calendar_list } from './calendar_list';
import { calendar_day } from './calendar_day';
import { calendar_days } from './calendar_days';
import { calendar_month } from './calendar_month';
import { calendar } from './calendar';
import { calendar_week } from './calendar_week';
import { calendar_weeks } from './calendar_weeks';
import { calendar_dayview } from './calendar_dayview';
import { calendar_daysview } from './calendar_daysview';
import { calendar_monthview } from './calendar_monthview';
import { calendar_multiview } from './calendar_multiview';
import { calendar_weekview } from './calendar_weekview';
import { calendar_weeksview } from './calendar_weeksview';
import { carousel } from './carousel';
import { cartesian } from './cartesian';
import { interaction } from './interaction';
import { chartnavigator } from './chartnavigator';
import { polar } from './polar';
import { spacefilling } from './spacefilling';
import { component } from './component';
import { container } from './container';
import { d3_canvas } from './d3_canvas';
import { d3_heatmap } from './d3_heatmap';
import { d3_pack } from './d3_pack';
import { d3_partition } from './d3_partition';
import { d3_sunburst } from './d3_sunburst';
import { d3_treemap } from './d3_treemap';
import { boundlist } from './boundlist';
import { componentdataview } from './componentdataview';
import { dataview } from './dataview';
import { emptytext } from './emptytext';
import { indexbar } from './indexbar';
import { list } from './list';
import { listswiperaccordion } from './listswiperaccordion';
import { listswiperstepper } from './listswiperstepper';
import { nestedlist } from './nestedlist';
import { pullrefreshbar } from './pullrefreshbar';
import { pullrefreshspinner } from './pullrefreshspinner';
import { draw } from './draw';
import { surface } from './surface';
import { editor } from './editor';
import { datepickernativefield } from './datepickernativefield';
import { emailfield } from './emailfield';
import { field } from './field';
import { filefield } from './filefield';
import { filebutton } from './filebutton';
import { hiddenfield } from './hiddenfield';
import { inputfield } from './inputfield';
import { numberfield } from './numberfield';
import { fieldpanel } from './fieldpanel';
import { passwordfield } from './passwordfield';
import { pickerfield } from './pickerfield';
import { searchfield } from './searchfield';
import { selectfield } from './selectfield';
import { singlesliderfield } from './singlesliderfield';
import { sliderfield } from './sliderfield';
import { spinnerfield } from './spinnerfield';
import { textfield } from './textfield';
import { textareafield } from './textareafield';
import { togglefield } from './togglefield';
import { urlfield } from './urlfield';
import { fieldset } from './fieldset';
import { formpanel } from './formpanel';
import { grid } from './grid';
import { headercontainer } from './headercontainer';
import { pagingtoolbar } from './pagingtoolbar';
import { indicator } from './indicator';
import { label } from './label';
import { treelist } from './treelist';
import { loadmask } from './loadmask';
import { mask } from './mask';
import { media } from './media';
import { menu } from './menu';
import { menuseparator } from './menuseparator';
import { messagebox } from './messagebox';
import { navigationview } from './navigationview';
import { panel } from './panel';
import { datepanel } from './datepanel';
import { datepanelview } from './datepanelview';
import { panelheader } from './panelheader';
import { paneltitle } from './paneltitle';
import { datepicker } from './datepicker';
import { picker } from './picker';
import { pickerslot } from './pickerslot';
import { tabletpicker } from './tabletpicker';
import { pivotd3container } from './pivotd3container';
import { pivotheatmap } from './pivotheatmap';
import { pivottreemap } from './pivottreemap';
import { pivotgrid } from './pivotgrid';
import { pivotsettings } from './pivotsettings';
import { pivotrangeeditor } from './pivotrangeeditor';
import { segmentedbutton } from './segmentedbutton';
import { sheet } from './sheet';
import { slider } from './slider';
import { thumb } from './thumb';
import { toggleslider } from './toggleslider';
import { spacer } from './spacer';
import { tabbar } from './tabbar';
import { tabpanel } from './tabpanel';
import { tab } from './tab';
import { tooltip } from './tooltip';
import { title } from './title';
import { titlebar } from './titlebar';
import { toolbar } from './toolbar';
import { gauge } from './gauge';
import { rating } from './rating';
import { video } from './video';
import { viewport } from './viewport';
import { widget } from './widget';

@NgModule({
	exports: [
		button,
		calendar_event,
		calendar_form_add,
		calendar_calendar_picker,
		calendar_form_edit,
		calendar_timefield,
		calendar_daysheader,
		calendar_weeksheader,
		calendar_list,
		calendar_day,
		calendar_days,
		calendar_month,
		calendar,
		calendar_week,
		calendar_weeks,
		calendar_dayview,
		calendar_daysview,
		calendar_monthview,
		calendar_multiview,
		calendar_weekview,
		calendar_weeksview,
		carousel,
		cartesian,
		interaction,
		chartnavigator,
		polar,
		spacefilling,
		component,
		container,
		d3_canvas,
		d3_heatmap,
		d3_pack,
		d3_partition,
		d3_sunburst,
		d3_treemap,
		boundlist,
		componentdataview,
		dataview,
		emptytext,
		indexbar,
		list,
		listswiperaccordion,
		listswiperstepper,
		nestedlist,
		pullrefreshbar,
		pullrefreshspinner,
		draw,
		surface,
		editor,
		datepickernativefield,
		emailfield,
		field,
		filefield,
		filebutton,
		hiddenfield,
		inputfield,
		numberfield,
		fieldpanel,
		passwordfield,
		pickerfield,
		searchfield,
		selectfield,
		singlesliderfield,
		sliderfield,
		spinnerfield,
		textfield,
		textareafield,
		togglefield,
		urlfield,
		fieldset,
		formpanel,
		grid,
		headercontainer,
		pagingtoolbar,
		indicator,
		label,
		treelist,
		loadmask,
		mask,
		media,
		menu,
		menuseparator,
		messagebox,
		navigationview,
		panel,
		datepanel,
		datepanelview,
		panelheader,
		paneltitle,
		datepicker,
		picker,
		pickerslot,
		tabletpicker,
		pivotd3container,
		pivotheatmap,
		pivottreemap,
		pivotgrid,
		pivotsettings,
		pivotrangeeditor,
		segmentedbutton,
		sheet,
		slider,
		thumb,
		toggleslider,
		spacer,
		tabbar,
		tabpanel,
		tab,
		tooltip,
		title,
		titlebar,
		toolbar,
		gauge,
		rating,
		video,
		viewport,
		widget
 ],
	declarations: [
		button,
		calendar_event,
		calendar_form_add,
		calendar_calendar_picker,
		calendar_form_edit,
		calendar_timefield,
		calendar_daysheader,
		calendar_weeksheader,
		calendar_list,
		calendar_day,
		calendar_days,
		calendar_month,
		calendar,
		calendar_week,
		calendar_weeks,
		calendar_dayview,
		calendar_daysview,
		calendar_monthview,
		calendar_multiview,
		calendar_weekview,
		calendar_weeksview,
		carousel,
		cartesian,
		interaction,
		chartnavigator,
		polar,
		spacefilling,
		component,
		container,
		d3_canvas,
		d3_heatmap,
		d3_pack,
		d3_partition,
		d3_sunburst,
		d3_treemap,
		boundlist,
		componentdataview,
		dataview,
		emptytext,
		indexbar,
		list,
		listswiperaccordion,
		listswiperstepper,
		nestedlist,
		pullrefreshbar,
		pullrefreshspinner,
		draw,
		surface,
		editor,
		datepickernativefield,
		emailfield,
		field,
		filefield,
		filebutton,
		hiddenfield,
		inputfield,
		numberfield,
		fieldpanel,
		passwordfield,
		pickerfield,
		searchfield,
		selectfield,
		singlesliderfield,
		sliderfield,
		spinnerfield,
		textfield,
		textareafield,
		togglefield,
		urlfield,
		fieldset,
		formpanel,
		grid,
		headercontainer,
		pagingtoolbar,
		indicator,
		label,
		treelist,
		loadmask,
		mask,
		media,
		menu,
		menuseparator,
		messagebox,
		navigationview,
		panel,
		datepanel,
		datepanelview,
		panelheader,
		paneltitle,
		datepicker,
		picker,
		pickerslot,
		tabletpicker,
		pivotd3container,
		pivotheatmap,
		pivottreemap,
		pivotgrid,
		pivotsettings,
		pivotrangeeditor,
		segmentedbutton,
		sheet,
		slider,
		thumb,
		toggleslider,
		spacer,
		tabbar,
		tabpanel,
		tab,
		tooltip,
		title,
		titlebar,
		toolbar,
		gauge,
		rating,
		video,
		viewport,
		widget
 ]
})
export class ExtAngularModule { }
