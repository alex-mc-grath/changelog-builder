import express from 'express';
import {
    getUsers
} from '../../controllers/user/index.js'

export default function makeUserRoutes({authMiddleware, makeCallback})
{
    const router = express.Router();

    router.get('/', authMiddleware.auth(), makeCallback(getUsers));

    return router;
}