import makeUserDb from './user-db.js'
import mongoDB from '../db/mongoDB.js'
import Id from '../util/Id/index.js'
import makeIssueDb from './issue-db.js'
import makeChangelogDb from './changelog-db.js'


const makeDb = async () => {

    if(!mongoDB.isConnected())
    {
        try
        {
            await mongoDB.connect()
        }
        catch(err)
        {
            throw new Error("Could not connect to DB: "+err.message)
        }
    }

    return mongoDB
}


export const userDb = makeUserDb({makeDb})
export const issueDb = makeIssueDb({makeDb})
export const changelogDb = makeChangelogDb({makeDb})


