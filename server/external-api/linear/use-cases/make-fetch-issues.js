import axios from 'axios'

export default function({config}){
    
    const fetchIssues = async (accessToken) => {
        const data = JSON.stringify({
            "query": "{ issues(filter: {team: {}, state: {name: {contains: \"Done\"}}}){ nodes { title id identifier createdAt labels { nodes { color id name } } } } }"
        });

        const requestConfig = {
        method: 'post',
        url: 'https://api.linear.app/graphql',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': accessToken//config.getLinearApiKey()
        },
        data : data
        };

        try {
            const response = await axios(requestConfig)
            return response.data
        } catch (error) {
            throw Error(error)
        }

    }

    return fetchIssues
}