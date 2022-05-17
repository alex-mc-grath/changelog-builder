export default function makeAddChangelogEntry ({changelogDb})
{
    return async function addChangelogEntry({linearId, changelogEntry})
    {
        if(!linearId){throw new Error('linearId is required for addChangelogEntry')}
        if(!changelogEntry){throw new Error('changelogEntry is required for addChangelogEntry')}

        let result = await changelogDb.insertEntry({linearId, changelogEntry})
        
        return result;
    }
}