const { http } = require('../plugins')

const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon = await http.get(url)
    console.log(pokemon.name)
}

getPokemonById(1)
.then( pokemon => console.log(pokemon))
.catch( console.error )

