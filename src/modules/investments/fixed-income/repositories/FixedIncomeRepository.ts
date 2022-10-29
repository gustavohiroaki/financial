import { chooseByEnvironment } from '@utils/chooseByEnvironment';
import FakeFixedIncomeRepository from './fakes/FakeFixedIncomeRepository';

export default chooseByEnvironment(FakeFixedIncomeRepository);