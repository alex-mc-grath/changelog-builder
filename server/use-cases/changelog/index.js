import makeAddChangelogEntry from './add-changelog-entry.js'
import makeEditChangelogEntry from './edit-changelog-entry.js'
import makeFetchChangelogEntries from './fetch-changelog-entries.js'
import {changelogDb} from '../../data-access/index.js'

export const addChangelogEntry = makeAddChangelogEntry({changelogDb})
export const editChangelogEntry = makeEditChangelogEntry({changelogDb})
export const fetchChangelogEntries = makeFetchChangelogEntries({changelogDb})
