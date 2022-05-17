import Joi from 'joi';

//documentation: https://joi.dev/api/?v=17.6.0

/*returns: [
    hasErrors (boolean: true of ther are errors),
    array (list of messages)
]*/

const validate = (data) => {
    const JoiSchema = Joi.object({
        "username": Joi.email().max(20).required(),
        "hashedPassword": Joi.string().required(),
        "accountType": Joi.string().insensitive(["USER","ADMIN"]).required()
    }).options({abortEarly: false});

    const response = JoiSchema.validate(user);

    if(response.error)
    {
        return [true, response.error.details.map(err => err.message)];
    }
    else
    {
        return [false, []];
    }
}

const userValidator = Object.freeze({
    validate
});

export default userValidator;