export default function makeFetchChangelogEntries ({changelogDb})
{
    return async function fetchChangelogEntries({linearId = null, changeLogId = null})
    {
        if(!linearId && !changeLogId){throw new Error('linearId or changeLogId is required for fetchChangelogEntry')}

        if(linearId)
        {
            let result = await changelogDb.findEntries({linearId})
            return result
        }
        else
        {
            let result = await changelogDb.findById({changeLogId})
            return result
        }
    }
}