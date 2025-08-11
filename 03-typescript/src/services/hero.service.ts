import { type Hero, heroes } from '../data/heroes'

export const findHeroById = ( id: number ): Hero | null => {
    return heroes.find(hero => hero.id === id) || null;
}