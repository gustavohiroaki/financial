import { assert } from 'chai';
import {chooseByEnvironment} from '@utils/chooseByEnvironment';

describe('[Unit] - Utils Testing',()=>{
	it('should return fake item',()=>{
		assert.strictEqual(chooseByEnvironment<string>('fake', 'truthy'), 'fake');
	});	
});
