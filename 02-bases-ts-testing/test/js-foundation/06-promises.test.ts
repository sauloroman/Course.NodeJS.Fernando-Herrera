import { getPokemonById } from "../../src/js-foundation/06-promises"

describe("Tests in 06-promises", () => {

    test("It should return an error if pokemon does not exist", async () => {

        const pokemonId = 1e6
        
        try {
            await getPokemonById(pokemonId)
            expect( true ).toBeFalsy()
        } catch( error ) {
            expect( error ).toBe("Pokemon not found")
        }

    })

    test('it should return a pokemon', async () => {

        const pokemonId = 1
        const pokemonName = await getPokemonById(pokemonId)
        expect(pokemonName).toBe("bulbasaur")

    })

})