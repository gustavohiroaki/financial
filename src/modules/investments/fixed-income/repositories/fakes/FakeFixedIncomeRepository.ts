import IFixedIncome from '@investments/fixed-income/models/IFixedIncome';
import IFixedIncomeRepository from '@investments/fixed-income/repositories/interfaces/IFixedIncomeRepository';
import {ICreateFixedIncomeDTO} from '../dtos';

class FixedIncomeRepository implements IFixedIncomeRepository {
	db: Array<IFixedIncome>;
	constructor(){
		this.db = [];
	}

	create(payload:ICreateFixedIncomeDTO){
		this.db.push(payload);

		return new Promise<IFixedIncome>((resolve)=>{
			resolve(payload);
		});
	}
	async getAll(){
		return new Promise<Array<IFixedIncome>>((resolve)=>{
			resolve(this.db);
		});
	}
}

export default FixedIncomeRepository;
