import api from '../../../utils/api'

export const loadChangelogHeaderText = async (callback) => {
    try
    {
        let {data} = await api.get("/changelog/header")
        callback(data.header)
    }
    catch
    {
        alert("failed to load changelog header text")
    }
}

export const updateChangelogHeaderText = async (newHeader) => {
    try
    {
        await api.put("/changelog/header", {header: newHeader})
    }
    catch
    {
        alert("failed to update changelog header text")
    }
}