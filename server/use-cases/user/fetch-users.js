import makeUser from '../../entities/user/index.js'

//userDb: {find}
export default function makeFetchUsers ({userDb, Id})
{
    return async function fetchUsers({linearId} = {})
    {
        const fetchedUsersByQuery = await userDb.findByLinearId({linearId});
        
        return fetchedUsersByQuery;
    }
}