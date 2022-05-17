export default function makeGetChangelogEntry({fetchChangelogEntries})
{
    return async function getChangelogEntry(httpRequest)
    {
        try
        {
            if(httpRequest.params?.changeLogId)
            {
                let data = await fetchChangelogEntries({"changeLogId": httpRequest.params.changeLogId})

                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 200,
                    body: data
                }
            }
            else
            {
                let data = await fetchChangelogEntries({"linearId": httpRequest.auth.linearId})

                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 200,
                    body: data
                }
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