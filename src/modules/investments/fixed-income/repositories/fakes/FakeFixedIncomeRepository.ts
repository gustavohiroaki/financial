import IFixedIncome from '@investments/fixed-income/models/IFixedIncome';
import IFixedIncomeRepository from '@investments/fixed-income/repositories/interfaces/IFixedIncomeRepository';
import {ICreateFixedIncomeDTO} from '../dtos';

class FixedIncomeRepository implements IFixedIncomeRepository {
	db: Array<IFixedIncome>;
	constructor(){
		this.db = [];
	}

	create(payload:ICreateFixedIncomeDTO):IFixedIncome{
		this.db.push(payload);

		return payload;
	}
	getAll():Array<IFixedIncome>{
		return this.db;
	}
}

export default FixedIncomeRepository;
