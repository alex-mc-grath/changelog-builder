/*
    Input:
        makeDb [function]: returns an existing connection to DB or creates a new one
*/

export default function makeUserDb({makeDb})
{
    const find = async ({_id = null, username = null} = {}) => {

        if(_id === null && username === null)
        {
            throw new Error("_id and/or username must be present to get a user");
        }

        let searchQuery = {};
        if(_id !== null){ searchQuery["_id"] = _id }
        if(username !== null){ searchQuery["username"] = username}

        const db = await makeDb();
        const result = await db.getCollection('users').find(searchQuery);
        
        return result; //array of mongoDB documents
    }

    const findByLinearId = async ({linearId}) =>{
        if(!linearId) throw Error('linear id must be present to get a user')

        const db = await makeDb()
        const result = await db.getCollection('users').find({linearId});
        return result; //array of mongoDB documents
    }

    const insertLinearUser = async ({email, linearId, accessToken}) =>{
        const db = await makeDb()
        const result = await db.getCollection('users').insert({email, linearId, accessToken, changelogHeader: "Updates to software"});

        return result; //array of mongoDB documents
    }

    const updateAccessToken = async ({linearId, accessToken}) => {
        const db = await makeDb()
        const result = await db.getCollection('users').updateOne({linearId},{$set:{accessToken}})

        return result; //array of mongoDB documents
    }

    return Object.freeze({
        find,
        findByLinearId,
        insertLinearUser,
        updateAccessToken
    });
}
