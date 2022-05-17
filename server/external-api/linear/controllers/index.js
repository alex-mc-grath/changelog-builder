
import makeGetAllIssues from './make-get-all-issues.js'
import makePatchIssuesOrder from './make-patch-issues-order.js'

import { fetchIssues, fetchAccessToken } from '../use-cases/index.js'
import {authManager} from '../../../auth/index.js'
import {fetchIssueOrderedList} from '../../../use-cases/issues/index.js'
import {editIssuesOrder} from '../../../use-cases/issues/index.js'

export const getAllIssues = makeGetAllIssues({fetchIssues, authManager, fetchAccessToken, fetchIssueOrderedList})
export const patchIssuesOrder = makePatchIssuesOrder({editIssuesOrder})

        