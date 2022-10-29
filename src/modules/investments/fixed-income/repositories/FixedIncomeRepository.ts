import { chooseByEnvironment } from '@utils/chooseByEnvironment';
import FakeFixedIncomeRepository from '@modules/investments/fixed-income/repositories/fakes/FakeFixedIncomeRepository';

export default chooseByEnvironment(FakeFixedIncomeRepository);