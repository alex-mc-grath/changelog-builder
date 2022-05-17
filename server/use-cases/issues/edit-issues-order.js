export default function makeEditIssuesOrder ({issueDb})
{
    return async function editIssuesOrder({linearId, orderedIdList})
    {
        if(!linearId){throw new Error('linearId is required for editIssuesOrder')}
        if(!orderedIdList){throw new Error('orderedIdList is required for editIssuesOrder')}

        await issueDb.updateIssuesOrder({linearId, orderedIdList})
    }
}