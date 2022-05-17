
export default function buildMakeIndividual({Id, inputValidator})
{
    return function makeIndividual(data = {}){
        const {
            _id = Id.makeId(),
            firstName,
            lastName,
            driverLicenseNumber,
            gouvId,
            birthDate,
            phoneNumbers,
            address,
            city,
            country,
            notes
        } = data;

        if(!Id.isValidId(_id))
        {
            throw new Error('Individual must have a valid ID.');
        }

        const [hasErrors, errorList] = inputValidator.validate(data);
        if(hasErrors)
        {
            throw new Error(errorList.join(' | '));
        }

        return Object.freeze({
            getId: () => _id,
            getFirstName: () => firstName,
            getDriverLicenseNumber: () => driverLicenseNumber,
            getGouvId: () => gouvId,
            getBirthDate: () => birthDate,
            getPhoneNumbers: () => phoneNumbers,
            getAddress: () => address,
            getCity: () => city,
            getCountry: () => country,
            getNotes: () => notes,
            getLastName: () => lastName
        });
    }
}
        