import IFixedIncome from '@investments/fixed-income/models/IFixedIncome';
import {ICreateFixedIncomeDTO} from '../dtos';

interface IFixedIncomeRepository {
    db: Array<IFixedIncome>
    create(payload: ICreateFixedIncomeDTO): Promise<IFixedIncome>
    getAll():Promise<Array<IFixedIncome>>
}

export default IFixedIncomeRepository;