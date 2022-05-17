export default function makePatchIssuesOrder ({editIssuesOrder})
{
    return async function patchIssuesOrder(httpRequest)
    {
        try
        {
            const issuesData = await editIssuesOrder({"linearId":httpRequest.auth.linearId,"orderedIdList":httpRequest.body.orderedIdList});

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {"error": ""}
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
                    error: e.message
                }
            }
        }
    }
}