
import { body } from 'express-validator'

const validations = {
    "POST/" : [
        body("brand").trim(),
        body("model").trim(),
        body("assemblyDate").trim(),
        body("color").trim(),
        body("motorNumber").trim(),
        body("vehicleNumber").trim(),
        body("vehicleType").trim(),
        body("plateNumber").trim()
    ]
}

export default validations;
        