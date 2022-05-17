
export default function makeIssueDb({makeDb})
{
    const insertBlankOrderedList = async ({linearId} = {}) => {

        const db = await makeDb()
        let insertResult = await db.getCollection('issuesOrderedList').insert({"linearId":linearId, "issuesOrder":[]})
        return insertResult
    }

    const findIssueOrderedList = async ({linearId} = {}) => {
        const db = await makeDb()
        let result = await db.getCollection('issuesOrderedList').find({linearId})
        
        return result
    }

    const updateIssuesOrder = async ({linearId, orderedIdList = {}}) => {
        const db = await makeDb()
        await db.getCollection('issuesOrderedList').update({"linearId": linearId}, {$set:{"issuesOrder":orderedIdList}})
    }

    return Object.freeze({
        insertBlankOrderedList,
        findIssueOrderedList,
        updateIssuesOrder
    });
}
