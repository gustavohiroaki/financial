import IFixedIncome from '@entities/IFixedIncome';
import {ICreateFixedIncomeDTO} from '@modules/investments/fixed-income/repositories/dtos';

interface IFixedIncomeRepository {
    db: Array<IFixedIncome>
    create(payload: ICreateFixedIncomeDTO): Promise<IFixedIncome>
    getAll():Promise<Array<IFixedIncome>>
}

export default IFixedIncomeRepository;