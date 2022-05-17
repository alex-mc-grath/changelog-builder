export default function makeGetAllIssues ({fetchIssues, authManager, fetchAccessToken, fetchIssueOrderedList})
{
    return async function getAllIssues(httpRequest)
    {
        try
        {
            const auth = authManager.authenticate(httpRequest.headers["Authorization"])

            const accessToken = await fetchAccessToken(auth.linearId)

            const issuesData = await fetchIssues(accessToken)

            if(issuesData === null)
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 404,
                    body: {"error": "No issues were found."}
                }
            }


            let issueOrderedList = []//await fetchIssueOrderedList({"linearId":auth.linearId})

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {"issues": issuesData.data.issues.nodes, "order":issueOrderedList}
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