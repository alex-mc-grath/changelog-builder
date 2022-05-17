
import buildMakeIndividual from './individual.js'
import Id from '../../util/Id/index.js'
import inputValidator from './individual-validator.js'

const makeIndividual = buildMakeIndividual({Id, inputValidator});

export default makeIndividual;
        