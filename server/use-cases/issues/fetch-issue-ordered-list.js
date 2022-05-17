export default function makeFetchIssueOrderedList ({issueDb})
{
    return async function fetchIssueOrderedList({linearId})
    {
        if(!linearId){throw new Error('linearId is required for fetchIssueOrderedList')}

        let result = await issueDb.findIssueOrderedList({linearId})

        if(result.length == 0)
        {
            throw new Error('no ordered list found for this user')
        }
        
        return result[0].issuesOrder;
    }
}