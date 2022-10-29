import Chance from 'chance';
import IFixedIncome from '@investments/fixed-income/models/IFixedIncome';

type IFixedIncomeOptional = Partial<IFixedIncome>

const chance = new Chance();

function fixedIncomeFixture(fixedIncomePartialData?: IFixedIncomeOptional):IFixedIncome{
	return {
		_id: fixedIncomePartialData?._id || chance.word(),
		value: fixedIncomePartialData?.value || chance.floating()
	};
}

export {
	fixedIncomeFixture
};