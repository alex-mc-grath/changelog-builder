import api from '../../utils/api'

export const loadChangelogData = async ({changeLogId}) => {
    const {data} = await api.get("/changelog-entries/"+changeLogId)
    if(data.length === 0)
    {
        throw new Error('No changelog foud with id '+changeLogId)
    }
    return data[0].entry;
}

export const setReduxtData = (data) => (dispatch) => {
    dispatch({
        type:"LOAD_GROUPS",
        payload:data
    })
}