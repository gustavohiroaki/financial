import Chance from 'chance';
import IFixedIncome from '@entities/IFixedIncome';

type IFixedIncomeOptional = Partial<IFixedIncome>

const chance = new Chance();

function fixedIncomeFixture(fixedIncomePartialData?: IFixedIncomeOptional):IFixedIncome|Omit<IFixedIncome,'_id'>{
	return {
		value: fixedIncomePartialData?.value || chance.floating()
	};
}

export {
	fixedIncomeFixture
};