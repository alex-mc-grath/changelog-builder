import { body } from 'express-validator'

const validations = {
    "POST/" : [
        body("code").not().isEmpty().trim()
    ]
}

export default validations;