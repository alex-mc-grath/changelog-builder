import {
USER_LOGIN_REQUEST,
USER_LOGIN_SUCCESS,
USER_LOGIN_FAIL,
USER_LOGOUT
} from '../OAuthCallback/constants'

import {
    ISSUES_LIST_REQUEST,
    ISSUES_LIST_SUCCESS,
    ISSUES_LIST_FAIL
} from '../HomePage/constants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true }
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload  }
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload }
    case USER_LOGOUT:
      return {pageLoaded: state.pageLoaded}
    case "PAGE_LOADED":
      return {...state, pageLoaded: true}
    default:
      return state
  }
}

export const issuesListReducer = (state = { issues: [], groups: []}, action) => {
    switch (action.type) {
      case ISSUES_LIST_REQUEST:
        return { ...state, loading: true, issues: [] }
      case ISSUES_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          issues: action.payload.issues
        }
      case ISSUES_LIST_FAIL:
        return { ...state, loading: false, error: action.payload }
      case "ISSUES_ORGANIZED":
        return {...state, groups: action.payload.groups}
      default:
        return state
    }
  }
  