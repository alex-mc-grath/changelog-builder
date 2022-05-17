
export default function makeChangelogDb({makeDb})
{
    const insertEntry = async ({linearId, changelogEntry}) => {

        const db = await makeDb()
        let insertResult = await db.getCollection('changelogEntries').insert({
            linearId, 
            date:(new Date()).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }), 
            entry: changelogEntry
        })
        return insertResult
    }

    const findEntries = async ({linearId}) => {
        const db = await makeDb()
        const entries = await db.getCollection('changelogEntries').find({linearId},false)

        return entries
    }

    const findById = async ({changeLogId}) => {
        const db = await makeDb()
        const entries = await db.getCollection('changelogEntries').find({"_id":db.objectID(changeLogId)})

        return entries
    }

    const updateEntry = async ({linearId, changelogEntry, changelogEntryId}) => {
        const db = await makeDb()
        const result = await db.getCollection('changelogEntries').updateOne({"_id":db.objectID(changelogEntryId), "linearId":linearId}, {$set:{entry: changelogEntry}})

        return result;
    }


    return Object.freeze({
        insertEntry,
        findEntries,
        findById,
        updateEntry
    });
}
