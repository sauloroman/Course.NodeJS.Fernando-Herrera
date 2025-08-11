import { http } from '../plugins'

export const getPokemonById = async ( id: number | string ): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    try {
        const pokemon = await http.get(url)
        return pokemon.name
    } catch(error) {
        throw "Pokemon not found"
    }
}

getPokemonById(1)
    .then( (pokemon: string) => console.log(pokemon))
    .catch( console.log )

