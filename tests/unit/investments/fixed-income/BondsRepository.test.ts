import {assert} from 'chai';
import IFixedIncomeRepository from '@investments/fixed-income/repositories/interfaces/IFixedIncomeRepository';
import FixedIncomeRepository from '@investments/fixed-income/repositories/FixedIncomeRepository';
import { fixedIncomeFixture } from 'tests/fixture';

describe('Unit - FixedIncomeRepository Test', ():void=>{
	let fixedIncomeRepository: IFixedIncomeRepository;
	beforeEach(()=>{
		fixedIncomeRepository = new FixedIncomeRepository();
	});

	it('should use a fake repository to create a new fixed income and return the data created', ()=>{
		const fixturePayload = fixedIncomeFixture();
		const fixedIncome = fixedIncomeRepository.createFixedIncome(fixturePayload);
		assert.deepStrictEqual(fixedIncome,fixturePayload);
	});

	it('should find all fixed incomes', ()=>{
		const firstFixedIncomePayload = fixedIncomeFixture();
		const secondFixedIncomePayload = fixedIncomeFixture();
		fixedIncomeRepository.createFixedIncome(firstFixedIncomePayload);
		fixedIncomeRepository.createFixedIncome(secondFixedIncomePayload);

		const findResult = fixedIncomeRepository.getAllFixedIncome();
		const expectedResult = [firstFixedIncomePayload, secondFixedIncomePayload];
		assert.deepStrictEqual(findResult, expectedResult);
	});
});