import { findHeroById } from './services/hero.service'

const hero = findHeroById(0)
console.log(hero?.name ?? 'No hero found')