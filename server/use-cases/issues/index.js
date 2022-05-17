import makeAddOrderedList from './add-ordered-list.js'
import makeFetchIssueOrderedList from './fetch-issue-ordered-list.js'
import makeEditIssuesOrder from './edit-issues-order.js'
import {issueDb} from '../../data-access/index.js'

export const addIssueOrderedList = makeAddOrderedList({issueDb})
export const fetchIssueOrderedList = makeFetchIssueOrderedList({issueDb})
export const editIssuesOrder = makeEditIssuesOrder({issueDb})