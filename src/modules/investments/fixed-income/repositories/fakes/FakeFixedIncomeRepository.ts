import crypto from 'crypto';
import IFixedIncome from '@entities/IFixedIncome';
import IFixedIncomeRepository from '@modules/investments/fixed-income/repositories/interfaces/IFixedIncomeRepository';
import {ICreateFixedIncomeDTO} from '@modules/investments/fixed-income/repositories/dtos';

class FixedIncomeRepository implements IFixedIncomeRepository {
	db: Array<IFixedIncome>;
	constructor(){
		this.db = [];
	}

	create(payload:ICreateFixedIncomeDTO){
		const newFixedIncome = {
			_id: crypto.randomUUID(),
			...payload
		};

		this.db.push(newFixedIncome);

		return new Promise<IFixedIncome>((resolve)=>{
			resolve(newFixedIncome);
		});
	}
	async getAll(){
		return new Promise<Array<IFixedIncome>>((resolve)=>{
			resolve(this.db);
		});
	}
}

export default FixedIncomeRepository;
