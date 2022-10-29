import IFixedIncome from '@investments/fixed-income/models/IFixedIncome';
import {ICreateFixedIncomeDTO} from '../dtos';

interface IFixedIncomeRepository {
    db: Array<IFixedIncome>
    create(payload: ICreateFixedIncomeDTO): IFixedIncome
    getAll():Array<IFixedIncome>
}

export default IFixedIncomeRepository;