import api from '../../utils/api'

export const getAllIssues = async (callback) => {

    try
    {
        const {data} = await api.get('/linear/issues')

        if(callback){
            callback(data)
        }

        return data
    }
    catch(e)
    {
        console.log("getAllIssues error",e)
    }

}

export const saveIssueOrder = async (newOderedIdList) => {

    try
    {
         await api.patch('/linear/issues/order', {
             "orderedIdList": newOderedIdList
         })
    }
    catch(e)
    {
        console.log("saveIssueOrder error",e)
    }
}

export const getEntries = async () => {
    try
    {
        const {data} = await api.get("/changelog-entries")

        return data
    }
    catch(e)
    {
        console.log("getEntries error",e)
    }
}