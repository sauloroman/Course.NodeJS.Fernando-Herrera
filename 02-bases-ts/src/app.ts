// import { emailTemplate } from './js-foundation/01-template'
// import { characters } from './js-foundation/02-destructuring'
// import { getUserById } from './js-foundation/03-callbacks'
// import { getUserById as getUser } from './js-foundation/04-arrow'
// import { buildMakePerson } from './js-foundation/05-factory'
// import { getPokemonById } from './js-foundation/06-promises'
import { buildLogger } from './plugins/logger.plugin'

const logger = buildLogger('app.js')
logger.log("Hola mundo")
logger.error("Esto es un error")
