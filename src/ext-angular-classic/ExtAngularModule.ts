import { NgModule } from "@angular/core";
import { button } from './button';
import { cycle } from './cycle';
import { segmentedbutton } from './segmentedbutton';
import { splitbutton } from './splitbutton';
import { calendar_event } from './calendar_event';
import { calendar_form_add } from './calendar_form_add';
import { calendar_calendar_picker } from './calendar_calendar_picker';
import { calendar_form_edit } from './calendar_form_edit';
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
import { axis } from './axis';
import { axis3d } from './axis3d';
import { cartesian } from './cartesian';
import { interaction } from './interaction';
import { legend } from './legend';
import { chartnavigator } from './chartnavigator';
import { polar } from './polar';
import { spacefilling } from './spacefilling';
import { component } from './component';
import { box } from './box';
import { buttongroup } from './buttongroup';
import { container } from './container';
import { viewport } from './viewport';
import { d3_canvas } from './d3_canvas';
import { d3_heatmap } from './d3_heatmap';
import { d3_pack } from './d3_pack';
import { d3_partition } from './d3_partition';
import { d3_sunburst } from './d3_sunburst';
import { d3_tree } from './d3_tree';
import { d3_horizontal_tree } from './d3_horizontal_tree';
import { d3_treemap } from './d3_treemap';
import { d3_svg } from './d3_svg';
import { d3 } from './d3';
import { dashboard_column } from './dashboard_column';
import { dashboard } from './dashboard';
import { dashboard_panel } from './dashboard_panel';
import { draw } from './draw';
import { surface } from './surface';
import { editor } from './editor';
import { flash } from './flash';
import { checkboxgroup } from './checkboxgroup';
import { field } from './field';
import { checkboxfield } from './checkboxfield';
import { checkbox } from './checkbox';
import { combobox } from './combobox';
import { combo } from './combo';
import { datefield } from './datefield';
import { displayfield } from './displayfield';
import { filefield } from './filefield';
import { fileuploadfield } from './fileuploadfield';
import { filebutton } from './filebutton';
import { hiddenfield } from './hiddenfield';
import { hidden } from './hidden';
import { htmleditor } from './htmleditor';
import { numberfield } from './numberfield';
import { pickerfield } from './pickerfield';
import { radiofield } from './radiofield';
import { radio } from './radio';
import { spinnerfield } from './spinnerfield';
import { tagfield } from './tagfield';
import { textfield } from './textfield';
import { textareafield } from './textareafield';
import { textarea } from './textarea';
import { timefield } from './timefield';
import { triggerfield } from './triggerfield';
import { trigger } from './trigger';
import { fieldcontainer } from './fieldcontainer';
import { fieldset } from './fieldset';
import { label } from './label';
import { form } from './form';
import { radiogroup } from './radiogroup';
import { actioncolumn } from './actioncolumn';
import { booleancolumn } from './booleancolumn';
import { checkcolumn } from './checkcolumn';
import { gridcolumn } from './gridcolumn';
import { datecolumn } from './datecolumn';
import { numbercolumn } from './numbercolumn';
import { rownumberer } from './rownumberer';
import { templatecolumn } from './templatecolumn';
import { widgetcolumn } from './widgetcolumn';
import { headercontainer } from './headercontainer';
import { gridpanel } from './gridpanel';
import { grid } from './grid';
import { propertygrid } from './propertygrid';
import { roweditor } from './roweditor';
import { roweditorbuttons } from './roweditorbuttons';
import { image } from './image';
import { imagecomponent } from './imagecomponent';
import { columnsplitter } from './columnsplitter';
import { treelist } from './treelist';
import { treelistitem } from './treelistitem';
import { loadmask } from './loadmask';
import { menubar } from './menubar';
import { menucheckitem } from './menucheckitem';
import { colormenu } from './colormenu';
import { datemenu } from './datemenu';
import { menuitem } from './menuitem';
import { menu } from './menu';
import { menuseparator } from './menuseparator';
import { header } from './header';
import { panel } from './panel';
import { tablepanel } from './tablepanel';
import { title } from './title';
import { tool } from './tool';
import { colorpicker } from './colorpicker';
import { datepicker } from './datepicker';
import { monthpicker } from './monthpicker';
import { timepicker } from './timepicker';
import { pivotd3container } from './pivotd3container';
import { pivotheatmap } from './pivotheatmap';
import { pivottreemap } from './pivottreemap';
import { pivotgrid } from './pivotgrid';
import { mzpivotgrid } from './mzpivotgrid';
import { pivotconfigfield } from './pivotconfigfield';
import { pivotconfigcontainer } from './pivotconfigcontainer';
import { pivotconfigpanel } from './pivotconfigpanel';
import { progress } from './progress';
import { progressbarwidget } from './progressbarwidget';
import { progressbar } from './progressbar';
import { bordersplitter } from './bordersplitter';
import { splitter } from './splitter';
import { multislider } from './multislider';
import { slider } from './slider';
import { sliderfield } from './sliderfield';
import { slidertip } from './slidertip';
import { sliderwidget } from './sliderwidget';
import { sparklinebar } from './sparklinebar';
import { sparkline } from './sparkline';
import { sparklinebox } from './sparklinebox';
import { sparklinebullet } from './sparklinebullet';
import { sparklinediscrete } from './sparklinediscrete';
import { sparklineline } from './sparklineline';
import { sparklinepie } from './sparklinepie';
import { sparklinetristate } from './sparklinetristate';
import { tabbar } from './tabbar';
import { tabpanel } from './tabpanel';
import { tab } from './tab';
import { quicktip } from './quicktip';
import { tip } from './tip';
import { tooltip } from './tooltip';
import { breadcrumb } from './breadcrumb';
import { tbfill } from './tbfill';
import { tbitem } from './tbitem';
import { pagingtoolbar } from './pagingtoolbar';
import { tbseparator } from './tbseparator';
import { tbspacer } from './tbspacer';
import { tbtext } from './tbtext';
import { toolbar } from './toolbar';
import { treecolumn } from './treecolumn';
import { treepanel } from './treepanel';
import { treeview } from './treeview';
import { colorbutton } from './colorbutton';
import { colorpickercolormap } from './colorpickercolormap';
import { colorpickercolorpreview } from './colorpickercolorpreview';
import { colorfield } from './colorfield';
import { colorselector } from './colorselector';
import { colorpickerslider } from './colorpickerslider';
import { colorpickerslideralpha } from './colorpickerslideralpha';
import { colorpickersliderhue } from './colorpickersliderhue';
import { colorpickerslidersaturation } from './colorpickerslidersaturation';
import { colorpickerslidervalue } from './colorpickerslidervalue';
import { desktop } from './desktop';
import { taskbar } from './taskbar';
import { trayclock } from './trayclock';
import { video } from './video';
import { wallpaper } from './wallpaper';
import { eventrecordermanager } from './eventrecordermanager';
import { explorer } from './explorer';
import { itemselectorfield } from './itemselectorfield';
import { itemselector } from './itemselector';
import { multiselectfield } from './multiselectfield';
import { multiselect } from './multiselect';
import { searchfield } from './searchfield';
import { gauge } from './gauge';
import { gmappanel } from './gmappanel';
import { uxiframe } from './uxiframe';
import { rating } from './rating';
import { statusbar } from './statusbar';
import { treepicker } from './treepicker';
import { boundlist } from './boundlist';
import { multiselector } from './multiselector';
import { multiselector_search } from './multiselector_search';
import { tableview } from './tableview';
import { gridview } from './gridview';
import { dataview } from './dataview';
import { widget } from './widget';
import { messagebox } from './messagebox';
import { toast } from './toast';
import { window } from './window';

@NgModule({
	exports: [
		button,
		cycle,
		segmentedbutton,
		splitbutton,
		calendar_event,
		calendar_form_add,
		calendar_calendar_picker,
		calendar_form_edit,
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
		axis,
		axis3d,
		cartesian,
		interaction,
		legend,
		chartnavigator,
		polar,
		spacefilling,
		component,
		box,
		buttongroup,
		container,
		viewport,
		d3_canvas,
		d3_heatmap,
		d3_pack,
		d3_partition,
		d3_sunburst,
		d3_tree,
		d3_horizontal_tree,
		d3_treemap,
		d3_svg,
		d3,
		dashboard_column,
		dashboard,
		dashboard_panel,
		draw,
		surface,
		editor,
		flash,
		checkboxgroup,
		field,
		checkboxfield,
		checkbox,
		combobox,
		combo,
		datefield,
		displayfield,
		filefield,
		fileuploadfield,
		filebutton,
		hiddenfield,
		hidden,
		htmleditor,
		numberfield,
		pickerfield,
		radiofield,
		radio,
		spinnerfield,
		tagfield,
		textfield,
		textareafield,
		textarea,
		timefield,
		triggerfield,
		trigger,
		fieldcontainer,
		fieldset,
		label,
		form,
		radiogroup,
		actioncolumn,
		booleancolumn,
		checkcolumn,
		gridcolumn,
		datecolumn,
		numbercolumn,
		rownumberer,
		templatecolumn,
		widgetcolumn,
		headercontainer,
		gridpanel,
		grid,
		propertygrid,
		roweditor,
		roweditorbuttons,
		image,
		imagecomponent,
		columnsplitter,
		treelist,
		treelistitem,
		loadmask,
		menubar,
		menucheckitem,
		colormenu,
		datemenu,
		menuitem,
		menu,
		menuseparator,
		header,
		panel,
		tablepanel,
		title,
		tool,
		colorpicker,
		datepicker,
		monthpicker,
		timepicker,
		pivotd3container,
		pivotheatmap,
		pivottreemap,
		pivotgrid,
		mzpivotgrid,
		pivotconfigfield,
		pivotconfigcontainer,
		pivotconfigpanel,
		progress,
		progressbarwidget,
		progressbar,
		bordersplitter,
		splitter,
		multislider,
		slider,
		sliderfield,
		slidertip,
		sliderwidget,
		sparklinebar,
		sparkline,
		sparklinebox,
		sparklinebullet,
		sparklinediscrete,
		sparklineline,
		sparklinepie,
		sparklinetristate,
		tabbar,
		tabpanel,
		tab,
		quicktip,
		tip,
		tooltip,
		breadcrumb,
		tbfill,
		tbitem,
		pagingtoolbar,
		tbseparator,
		tbspacer,
		tbtext,
		toolbar,
		treecolumn,
		treepanel,
		treeview,
		colorbutton,
		colorpickercolormap,
		colorpickercolorpreview,
		colorfield,
		colorselector,
		colorpickerslider,
		colorpickerslideralpha,
		colorpickersliderhue,
		colorpickerslidersaturation,
		colorpickerslidervalue,
		desktop,
		taskbar,
		trayclock,
		video,
		wallpaper,
		eventrecordermanager,
		explorer,
		itemselectorfield,
		itemselector,
		multiselectfield,
		multiselect,
		searchfield,
		gauge,
		gmappanel,
		uxiframe,
		rating,
		statusbar,
		treepicker,
		boundlist,
		multiselector,
		multiselector_search,
		tableview,
		gridview,
		dataview,
		widget,
		messagebox,
		toast,
		window
 ],
	declarations: [
		button,
		cycle,
		segmentedbutton,
		splitbutton,
		calendar_event,
		calendar_form_add,
		calendar_calendar_picker,
		calendar_form_edit,
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
		axis,
		axis3d,
		cartesian,
		interaction,
		legend,
		chartnavigator,
		polar,
		spacefilling,
		component,
		box,
		buttongroup,
		container,
		viewport,
		d3_canvas,
		d3_heatmap,
		d3_pack,
		d3_partition,
		d3_sunburst,
		d3_tree,
		d3_horizontal_tree,
		d3_treemap,
		d3_svg,
		d3,
		dashboard_column,
		dashboard,
		dashboard_panel,
		draw,
		surface,
		editor,
		flash,
		checkboxgroup,
		field,
		checkboxfield,
		checkbox,
		combobox,
		combo,
		datefield,
		displayfield,
		filefield,
		fileuploadfield,
		filebutton,
		hiddenfield,
		hidden,
		htmleditor,
		numberfield,
		pickerfield,
		radiofield,
		radio,
		spinnerfield,
		tagfield,
		textfield,
		textareafield,
		textarea,
		timefield,
		triggerfield,
		trigger,
		fieldcontainer,
		fieldset,
		label,
		form,
		radiogroup,
		actioncolumn,
		booleancolumn,
		checkcolumn,
		gridcolumn,
		datecolumn,
		numbercolumn,
		rownumberer,
		templatecolumn,
		widgetcolumn,
		headercontainer,
		gridpanel,
		grid,
		propertygrid,
		roweditor,
		roweditorbuttons,
		image,
		imagecomponent,
		columnsplitter,
		treelist,
		treelistitem,
		loadmask,
		menubar,
		menucheckitem,
		colormenu,
		datemenu,
		menuitem,
		menu,
		menuseparator,
		header,
		panel,
		tablepanel,
		title,
		tool,
		colorpicker,
		datepicker,
		monthpicker,
		timepicker,
		pivotd3container,
		pivotheatmap,
		pivottreemap,
		pivotgrid,
		mzpivotgrid,
		pivotconfigfield,
		pivotconfigcontainer,
		pivotconfigpanel,
		progress,
		progressbarwidget,
		progressbar,
		bordersplitter,
		splitter,
		multislider,
		slider,
		sliderfield,
		slidertip,
		sliderwidget,
		sparklinebar,
		sparkline,
		sparklinebox,
		sparklinebullet,
		sparklinediscrete,
		sparklineline,
		sparklinepie,
		sparklinetristate,
		tabbar,
		tabpanel,
		tab,
		quicktip,
		tip,
		tooltip,
		breadcrumb,
		tbfill,
		tbitem,
		pagingtoolbar,
		tbseparator,
		tbspacer,
		tbtext,
		toolbar,
		treecolumn,
		treepanel,
		treeview,
		colorbutton,
		colorpickercolormap,
		colorpickercolorpreview,
		colorfield,
		colorselector,
		colorpickerslider,
		colorpickerslideralpha,
		colorpickersliderhue,
		colorpickerslidersaturation,
		colorpickerslidervalue,
		desktop,
		taskbar,
		trayclock,
		video,
		wallpaper,
		eventrecordermanager,
		explorer,
		itemselectorfield,
		itemselector,
		multiselectfield,
		multiselect,
		searchfield,
		gauge,
		gmappanel,
		uxiframe,
		rating,
		statusbar,
		treepicker,
		boundlist,
		multiselector,
		multiselector_search,
		tableview,
		gridview,
		dataview,
		widget,
		messagebox,
		toast,
		window
 ]
})
export class ExtAngularModule { }
