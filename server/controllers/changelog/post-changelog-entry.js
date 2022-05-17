
export default function makePostChangelogEntry({addChangelogEntry})
{
    return async function postChangelogEntry(httpRequest)
    {
        try
        {
            await addChangelogEntry({"linearId": httpRequest.auth.linearId, "changelogEntry":httpRequest.body.changelogEntry})

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