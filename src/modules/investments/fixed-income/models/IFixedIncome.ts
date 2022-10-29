import {ObjectId} from 'mongodb';

interface IFixedIncome {
    _id: string | ObjectId,
    value: number,
    
}

export default IFixedIncome;