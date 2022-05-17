
export default function makePutChangelogEntry({editChangelogEntry})
{
    return async function putChangelogEntry(httpRequest)
    {
        try
        {
            await editChangelogEntry({"linearId": httpRequest.auth.linearId, "changelogEntry":httpRequest.body.changelogEntry, "changelogEntryId": httpRequest.body.changeLogId})

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {}
            }
        }
        catch(e)
        {
            console.log(e);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    code: e.stack.split(":")[0],
                    error: e.message
                }
            }
        }
    }
}