import express from 'express'

import {
    getAllIssues,
    patchIssuesOrder
} from '../../external-api/linear/controllers/index.js'


export default function makeLinearRoutes({makeCallback, authMiddleware})
{
    const router = express.Router();

    router.get('/issues', authMiddleware.auth(), makeCallback(getAllIssues))

    router.patch('/issues/order', authMiddleware.auth(), makeCallback(patchIssuesOrder))

    return router
}