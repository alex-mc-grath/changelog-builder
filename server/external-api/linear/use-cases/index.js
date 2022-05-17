import makeFetchIssues from "./make-fetch-issues.js"
import makeFetchAccessToken from './make-fetch-access-token.js'

import {userDb} from '../../../data-access/index.js'

import config from '../../../config/index.js'

export const fetchIssues = makeFetchIssues({config})
export const fetchAccessToken = makeFetchAccessToken({userDb})