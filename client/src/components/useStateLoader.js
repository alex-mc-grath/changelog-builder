import {useState} from 'react'

import {Loader} from './theme/base/Loader'

export default function useStateLoader({action, callback = null})
{
    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(false);

    const load = async (params) => {
        try
        {
            setLoading(true)

            let data = await action(params);
            setData(data);

            setLoading(false)

            if(callback)
            {
                callback(data);
            }
        }
        catch(error)
        {
            setData(null)
            setLoading(false)
            throw error
        }
    }

    const LoaderComponent = ({children}) => {
        if(loading)
        {
            return (<Loader />)
        }
        else
        {
            if(data === null)
            {
                return (<></>)
            }
            else
            {
                return (<>{children}</>)
            }
        }
    }

    return [data, load, LoaderComponent]
}