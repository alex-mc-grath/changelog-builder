
import Joi from 'joi';

const validate = (data) => {
    const JoiSchema = Joi.object({
        "firstName": Joi.string().trim().max(30).required(),
        "lastName": Joi.string().trim().max(30).required(),
        "driverLicenseNumber": Joi.string().trim().max(30).required(),
        "gouvId": Joi.string().trim().max(30).required(),
        "birthDate": Joi.string().trim().max(30).required(),
        "phoneNumbers": Joi.object(),
        "address": Joi.string().trim().required(),
        "city": Joi.string().trim().required(),
        "country": Joi.string().trim().required(),
        "notes": Joi.object()
    }).options({abortEarly: false});

    const response = JoiSchema.validate(data);

    if(response.error)
    {
        return [true, response.error.details.map(err => err.message)];
    }
    else
    {
        return [false, []];
    }
}

const individualValidator = Object.freeze({
    validate
});

export default individualValidator;
        