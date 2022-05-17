import {fetchUsers} from '../../use-cases/user/index.js'

export default function makeGetUsers({fetchUsers})
{
    return async function getUsers(httpRequest)
    {
        try
        {
            const {_id, accountType} = httpRequest.auth;
            let users = null;

            if(accountType === "USER")
            {
                if(_id === null)
                {
                    throw new Error("_id must be present to get a user with account type USER");
                }

                users = await fetchUsers({_id});
            }
            else if(accountType === "ADMIN")
            {
                //TODO
            }
            else
            {
                throw new Error("invalid accountType");
            }

            
            if(users.length > 1)
            {
                throw new Error("more than one user was found wiht this id");
            }
            else if(users.length <= 0)
            {
                throw new Error("no users were found wiht this id");
            }

            const user = users[0];

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {
                    "_id": user._id,
                    "email": user.email,
                    "accountType": user.accountType,
                    "calorieCap": user.calorieCap
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