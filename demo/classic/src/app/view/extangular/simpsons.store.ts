import {ExtClass} from '../../../ext-angular-classic/ExtClass';
import {SimpsonsModel} from './simpsons.model';

export class SimpsonsStore extends ExtClass {

	constructor (createConfig: any) {
		let className: any = 'ext.simpsons.store';
		let extend: any = 'Ext.data.Store';
		//let model: any = new SimpsonsModel();
		let defineConfig: any = {
			model: new SimpsonsModel({}).extjsObject,
			data: [
				{ name: 'Lisa4', email: 'lisa@simpsons.com', phone: '555-111-1224' },
				{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
				{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
				{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
			]
		};
		super(className, extend, defineConfig, createConfig);
		return;
	}

}
