import api from '../../utils/api'
import { ISSUES_LIST_REQUEST, ISSUES_LIST_SUCCESS, ISSUES_LIST_FAIL } from './constants'

export const listIssues = () => async (dispatch) => {
    try {
        dispatch({ type: ISSUES_LIST_REQUEST})

        const { data } = await api.get(`/api/issues`)

        dispatch({
            type: ISSUES_LIST_SUCCESS,
            payload: data,
          })

    } catch (error) {
        dispatch({
            type: ISSUES_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        
    }
}