//import cuid from 'cuid';
import {ObjectId} from 'mongodb';

const Id = Object.freeze({
    makeId: () => new ObjectId(),
    isValidId: (id) => true,//cuid.isCuid(id),
    convertToObjectID: (id) => new ObjectId(id)
})

export default Id;