import buildMakeUser from './user.js'
import Id from '../../util/Id/index.js'
import inputValidator from '../../validators/user-validator.js'

const makeUser = buildMakeUser({Id, inputValidator});

export default makeUser;