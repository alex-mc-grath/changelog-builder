export default function makeEditChangelogEntry ({changelogDb})
{
    return async function editChangelogEntry({linearId, changelogEntry, changelogEntryId})
    {
        if(!linearId){throw new Error('linearId is required for addChangelogEntry')}
        if(!changelogEntry){throw new Error('changelogEntry is required for addChangelogEntry')}

        let result = await changelogDb.updateEntry({linearId, changelogEntry, changelogEntryId})
        
        return result;
    }
}