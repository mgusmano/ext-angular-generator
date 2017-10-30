import {ExtClass} from '../../../ext-angular-src/ExtClass';
import {ForumModel} from './forum.model';


export class ForumStore extends ExtClass {

	constructor (createConfig: any) {
		let className: any = 'Grids.store.ForumThreadsStore';
		let extend: any = 'Ext.data.BufferedStore';
		let model: any = new ForumModel({});
		let defineConfig: any = {
			model: model.extjsObject,

			pageSize: 75,
			leadingBufferZone: 300,

			remoteFilter: true,
			autoLoad: true,

			proxy: {
				type: 'jsonp',
				noCache: false,
				url: 'http://www.sencha.com/forum/remote_topics/index.php',
				reader: {
					rootProperty: 'topics',
					totalProperty: 'totalCount'
				},
				simpleSortMode: true,
				filterParam: 'query'
			}
		};
		super(className, extend, defineConfig, createConfig);
		return;
	}
}
