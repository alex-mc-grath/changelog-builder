

export default function makeFetchAccessToken({userDb}){
    
    const fetchAccessToken = async (linearId) =>{
        
        let user = await userDb.findByLinearId({linearId})
        if(user.length == 0)
        {
            throw new Error('cannot find user with specified Linear ID')
        }

        return user[0]["accessToken"]
    }

    return fetchAccessToken
}