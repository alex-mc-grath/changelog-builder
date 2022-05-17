import makeFetchUsers from './fetch-users.js'
import {userDb} from '../../data-access/index.js'
import Id from '../../util/Id/index.js';

const fetchUsers = makeFetchUsers({userDb, Id});

const userService = Object.freeze({
    fetchUsers
});

export default userService;
export {fetchUsers}