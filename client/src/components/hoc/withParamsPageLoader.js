import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Loader} from '../theme/base/Loader'

const withParamsPageLoader = (actionFunction,ComponentFunction) => {

    return (props) => {

        const [loadedPageData, setLoadedPageData_debug] = useState(null)
        const [error, setError] = useState(null)
        const urlParams = useParams()


        const setLoadedPageData = (value) => {
            setLoadedPageData_debug(value)
        }

        useEffect(() => {

            (async() => {
                try
                {
                    const loaded = await actionFunction(urlParams)
                    setLoadedPageData(loaded)
                }
                catch(err)
                {
                    setError(err.message)
                }
            })()

        },[actionFunction])

        if(error)
        {
            return (<h2>{error}</h2>)
        }
        else if(loadedPageData)
        {
            return <ComponentFunction {...props} loadedPageData={loadedPageData} params={urlParams}/>
        }
        else
        {
            return <Loader />
        }

    }
}

export default withParamsPageLoader