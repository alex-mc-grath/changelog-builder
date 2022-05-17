export default function makeAddOrderedList ({issueDb})
{
    return async function addOrderedList({linearId})
    {
        if(!linearId){throw new Error('linearId is required for addOrderedList')}

        let result = await issueDb.insertBlankOrderedList({linearId})
        
        return result;
    }
}