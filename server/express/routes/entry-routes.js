import express from 'express';
import {
    postChangelogEntry,
    putChangelogEntry,
    getChangelogEntries
} from '../../controllers/changelog/index.js'

export default function makeChangelogEntryRoutes({authMiddleware, makeCallback})
{
    const router = express.Router();

    router.post('/', authMiddleware.auth(), makeCallback(postChangelogEntry))
    router.put('/', authMiddleware.auth(), makeCallback(putChangelogEntry))
    router.get('/', authMiddleware.auth(), makeCallback(getChangelogEntries))
    router.get('/:changeLogId', makeCallback(getChangelogEntries))

    return router;
}