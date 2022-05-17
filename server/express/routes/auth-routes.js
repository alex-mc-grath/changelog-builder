import express from 'express';
import authValidation from '../validation/auth-validator.js';
import {
    authUser
} from '../../controllers/user/index.js'

import {authManager} from '../../auth/index.js'
const bypassAuth = async () => {
    const authToken = authManager.makeAuthToken({"linearId": "672373e3-6f83-47ac-94ea-e496cb38d32a"});

    return {
        headers: {
            'Content-Type': "application/json"
        },
        statusCode: 200,
        body: {token: authToken}
    }
}

export default function makeAuthRoutes({makeCallback})
{
    const router = express.Router();

    router.post('/login', authValidation["POST/"], makeCallback(authUser));

    return router;
}