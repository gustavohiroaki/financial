import IFixedIncome from '@investments/fixed-income/models/IFixedIncome';
import {ICreateFixedIncomeDTO} from '../dtos';

interface IFixedIncomeRepository {
    db: Array<IFixedIncome>
    createFixedIncome(payload: ICreateFixedIncomeDTO): IFixedIncome
    getAllFixedIncome():Array<IFixedIncome>
}

export default IFixedIncomeRepository;