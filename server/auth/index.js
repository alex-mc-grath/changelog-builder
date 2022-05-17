import hashManager from '../util/hashManager/index.js'
import makePasswordManager from './makePasswordManager.js';
import config from '../config/index.js'
import makeJWTAuth from './makeJWTAuth.js'

const passwordManager = makePasswordManager({hashManager});
const authManager = makeJWTAuth(config);

export {
    passwordManager,
    authManager
}
