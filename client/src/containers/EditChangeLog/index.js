import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import withParamsPageLoader from '../../components/hoc/withParamsPageLoader'
import {loadChangelogData} from './actions'
import {Editor} from '../Editor'

const EditChangeLog = withParamsPageLoader(loadChangelogData,({loadedPageData, params}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'ISSUES_ORGANIZED', payload: { groups: loadedPageData }});
    },[loadedPageData])

    return (<Editor editMode={true} changelogId={params.changeLogId}/>)
})

export default EditChangeLog