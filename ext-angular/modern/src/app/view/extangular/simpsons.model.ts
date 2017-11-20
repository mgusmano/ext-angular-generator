import {ExtClass} from '../../../ext-angular-modern/ExtClass';

export class SimpsonsModel extends ExtClass {

	constructor (createConfig: any) {
		let className: any = 'simpsons.model';
		let extend: any = 'Ext.data.Model';
		let defineConfig: any = {
			fields: [
				'name',
				'email',
				'phone'
			],
			changeName: function()
				{
					let oldName = this.get('name'),
							newName = oldName + ' The Barbarian';
					this.set('name', newName);
				}
		};
		super(className, extend, defineConfig, createConfig);
		return;
	}

	public changePhone() {
		let oldPhone = this.extjsObject.get('phone'),
				newPhone = oldPhone + ' EXT 123';
		this.extjsObject.set('phone', newPhone);
	}

}
