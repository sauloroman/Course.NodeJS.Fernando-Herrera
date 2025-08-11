import { characters } from '../../src/js-foundation/02-destructuring'

describe("Tests in 02-destructuring", () => {

    test("the array should contain 4 heroes", () => {
        expect(characters.length).toBe(4)
    })

    test('the fourth hero should be "Batman"', () => {
        const [ , , , fourth ] = characters

        expect(fourth).toBe("Batman")
        expect(characters[3]).toBe("Batman")
    })

})