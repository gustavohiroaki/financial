import IFixedIncomeRepository from '@modules/investments/fixed-income/repositories/interfaces/IFixedIncomeRepository';
import IFixedIncome from 'src/entities/IFixedIncome';

interface ICreateFixedIncome {
    fixedIncomeRepository: IFixedIncomeRepository
    createFixedIncome(payload: Omit<IFixedIncome,'_id'>):Promise<IFixedIncome>
}

export default ICreateFixedIncome;