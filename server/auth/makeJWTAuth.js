import jwt from 'jsonwebtoken'

export default function makeJWTAuth(config)
{
    
    const makeAuthToken = ({linearId = null} = {}) => {

        //validate input
        if(!linearId){throw new Error('linearId is required when creating an auth token')}

        //create token
        let token = jwt.sign({linearId}, config.getAuthSecret(), {
            "expiresIn": config.getSessionExpireTime()
        });

        return token;
    }


    const authenticate = (token) => {

        let verified = null;

        try
        {
            verified = jwt.verify(token,config.getAuthSecret());
        }
        catch(err)
        {
            throw new Error('Failed to authenticate the user');
        }

        if(!verified.linearId)
        {
            throw new Error("JWT token has the wrong structure");
        }

        return Object.freeze({
            linearId: verified.linearId,
        });
        
    }

    
    return Object.freeze({
        makeAuthToken,
        authenticate
    })
}