import IFixedIncome from '@entities/IFixedIncome';

type ICreateFixedIncomeDTO = Omit<IFixedIncome,'_id'>

export default ICreateFixedIncomeDTO;