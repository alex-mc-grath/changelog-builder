import api from '../../utils/api'

export const publishEntry = async (entryData, changeLogId) => {
    
    if(!changeLogId)
    {
        await api.post("/changelog-entries", {"changelogEntry":entryData})
    }
    else
    {
        await api.put("/changelog-entries", {"changelogEntry":entryData, changeLogId})
    }
}