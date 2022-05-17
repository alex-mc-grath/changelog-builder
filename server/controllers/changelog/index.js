import makePostChangelogEntry from './post-changelog-entry.js'
import makeGetChangelogEntries from './get-changelog-entries.js'
import makePutChangelogEntry from './put-changelog-entry.js'
import {addChangelogEntry, fetchChangelogEntries, editChangelogEntry} from '../../use-cases/changelog/index.js'

export const postChangelogEntry = makePostChangelogEntry({addChangelogEntry})
export const getChangelogEntries = makeGetChangelogEntries({fetchChangelogEntries})
export const putChangelogEntry = makePutChangelogEntry({editChangelogEntry})
