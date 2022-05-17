
import { body } from 'express-validator'

const validations = {
    "POST/" : [
        body("firstName").trim().not().isEmpty(),
        body("lastName").trim().not().isEmpty(),
        body("driverLicenseNumber").trim().not().isEmpty(),
        body("gouvId").trim().not().isEmpty(),
        body("birthDate").trim().not().isEmpty(),
        body("phoneNumbers").not().isEmpty(),
        body("address").trim().not().isEmpty(),
        body("city").trim().not().isEmpty(),
        body("country").trim().not().isEmpty()
    ]
}

export default validations;
        