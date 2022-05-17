import api from '../../utils/api'

export const getEntries = async () => {

    const {data} = await api.get("/changelog-entries")

    return data;
}