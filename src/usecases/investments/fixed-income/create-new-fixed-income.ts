import IFixedIncome from '@entities/IFixedIncome';
import IFixedIncomeRepository from '@modules/investments/fixed-income/repositories/interfaces/IFixedIncomeRepository';
import ICreateNewFixedIncome from '@usecases/investments/fixed-income/interfaces/ICreateNewFixedIncome';

class CreateNewFixedIncome implements ICreateNewFixedIncome {
	fixedIncomeRepository: IFixedIncomeRepository;
	constructor(fixedIncomeRepository:IFixedIncomeRepository ){
		this.fixedIncomeRepository = fixedIncomeRepository;
	}
	async createFixedIncome(payload: Omit<IFixedIncome, '_id'>){
		const newFixedIncome = await this.fixedIncomeRepository.create(payload);
		return newFixedIncome;
	}
}

export default CreateNewFixedIncome;