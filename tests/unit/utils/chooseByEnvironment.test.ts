import { assert } from 'chai';
import {chooseByEnvironment} from '@utils/chooseByEnvironment';

describe('Unit -  testing',()=>{
	it('should return fake item',()=>{
		assert.strictEqual(chooseByEnvironment<string>('fake', 'truthy'), 'fake');
	});	
});
