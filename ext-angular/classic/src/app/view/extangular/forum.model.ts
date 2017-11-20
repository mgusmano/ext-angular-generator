import {ExtClass} from '../../../ext-angular-classic/ExtClass';

export class ForumModel extends ExtClass {

	constructor (CreateConfig: any) {
		let className: any = 'Grids.model.ForumThreadModel';
		let extend: any = 'Ext.data.Model';
		let defineConfig: any = {
			fields: [
				{ name: 'title', mapping: 'topic_title' },
				{ name: 'forumtitle', mapping: 'forum_title' },
				{ name: 'forumid', type: 'int' },
				{ name: 'username', mapping: 'author' },
				{ name: 'replycount', mapping: 'reply_count', type: 'int' },
				{ name: 'lastpost', mapping: 'post_time', type: 'date', dateFormat: 'timestamp' },
				'lastposter',
				'excerpt',
				'topic_id'
			],
			idProperty: 'post_id'
		};
		super(className, extend, defineConfig, CreateConfig);
		return;
	}

}
