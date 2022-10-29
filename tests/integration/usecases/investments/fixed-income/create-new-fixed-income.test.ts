import {assert} from 'sinon';
import CreateNewFixedIncome from '@usecases/investments/fixed-income/create-new-fixed-income';
import FixedIncomeRepository from '@modules/investments/fixed-income/repositories/FixedIncomeRepository';
import { fixedIncomeFixture } from 'tests/fixture';

describe('[Integration] Use Case - Create new fixed income', ()=>{
	it('should create a new fixed income on database', async ()=>{
		const newFixedIncome = fixedIncomeFixture();
		const fixedIncomeRepository = new FixedIncomeRepository();
		const sut = new CreateNewFixedIncome(fixedIncomeRepository);
		const createdFixedIncome =  await sut.createFixedIncome(newFixedIncome);
		assert.match(createdFixedIncome,newFixedIncome);
	});
});