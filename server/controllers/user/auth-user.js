import axios from 'axios';
import qs from 'qs';
import User from '../../models/userModel.js'
import {addIssueOrderedList} from '../../use-cases/issues/index.js'

export default function makeAuthUser ({fetchUsers, passwordManager, authManager, userDb})
{
    return async function authUser(httpRequest)
    {
        try
        {
            console.log("httpRequest.body.code", httpRequest.body.code)
            let data = qs.stringify({
            'code': `${httpRequest.body.code}`,
            'redirect_uri': 'https://linear-application.herokuapp.com/oauth/callback',
            'client_id': 'c1c41f8bf8d55388cbbb9a7eecf35ec0',
            'client_secret': '2b36d6e29eb51ccf39d62406181c1cc3',
            'grant_type': 'authorization_code' 
            });

            let config = {
            method: 'post',
            url: 'https://api.linear.app/oauth/token',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
            };

            const response = await axios(config)
            const accessToken = response.data.access_token
            console.log("accessToken",accessToken)

            // fetch User data with access token via api call
            data = JSON.stringify({
              query: `query Me {
              viewer {
                id
                name
                email
              }
            }`,
              variables: {}
            });
            
            config = {
              method: 'post',
              url: 'https://api.linear.app/graphql',
              headers: { 
                'Authorization': `Bearer ${accessToken}`, 
                'Content-Type': 'application/json'
              },
              data : data
            };

            let userIdResponse = await axios(config)
            userIdResponse = userIdResponse.data

            console.log("userIdResponse",userIdResponse)
            const userId = userIdResponse.data.viewer.id
            console.log("userId", userId)
            const users = await fetchUsers({linearId: userIdResponse.data.viewer.id})

            if(users.length == 0)
            {
                console.log("no users found")
                const user = await userDb.insertLinearUser({ 
                    email: userIdResponse.data.viewer.email,
                    linearId: userId,
                    accessToken
                })

                // const user = await User.create({
                    // email: userIdResponse.data.viewer.email,
                    // linearId: userId,
                    // accessToken
                // })

                if(user)
                {
                    const authToken = authManager.makeAuthToken({"linearId": userId});
                        
                    return {
                        headers: {
                            'Content-Type': "application/json"
                        },
                        statusCode: 200,
                        body: {token: authToken}
                    }


                    await addIssueOrderedList({"linearId": userId})
                }
                
            }

            if(users.length > 1)
            {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 401,
                    body: {code: "AUTH_ERROR", error: "Several users were found with this email."}
                }
            }

            console.log("updateAccessToken", {linearId: userId, accessToken})
            const user = await userDb.updateAccessToken({linearId: userId, accessToken})
            const authToken = authManager.makeAuthToken({"linearId": userId});
            console.log("authToken",authToken)

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {token: authToken}
            }
            
        }
        catch(e)
        {
            console.log("controller fail ",e)

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