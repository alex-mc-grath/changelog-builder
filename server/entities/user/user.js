/* Interfaces
    ID [object]: makeId(), isValidId(id)
    inputValidator [object]: validate(inputData), validateCalories(newCalorieValue)
*/

export default function buildMakeUser({Id, inputValidator})
{
    return function makeUser(data = {}){

        const {
            _id = Id.makeId(),
            username,
            hashedPassword,
            accountType
        } = data;

        if(!Id.isValidId(id))
        {
            throw new Error('user must have a valid ID.');
        }

        [hasErrors, errorList] = inputValidator.validate(data);
        if(hasErrors)
        {
            throw new Error({"user-error": errorList});
        }

        return Object.freeze({
            getId: () => _id,
            getUsername: () => username,
            getHashedPassword: () => hashedPassword,
            getAccountType: () => accountType
        });
    }
}