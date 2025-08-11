import { getAge } from "../../src/plugins"

describe("tests in get-age.plugin.test.ts", () => {

    const birthdate = "1998-12-08"

    test("it should return the age of a person", () => {
        const age = getAge(birthdate)
        expect(age).toBe(27)
    })

    test("it should return the correct age", () => {
        const correctAge = new Date().getFullYear() - new Date(birthdate).getFullYear()
        expect(getAge(birthdate)).toBe(correctAge)
    })

    test('it should return 0 years', () => {

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1998)
    
        const birthdate = "1998-12-08"
        const age = getAge(birthdate)

        expect( age ).toBe(0)
        expect(spy).toHaveBeenCalled()

    })

    test('it should return an error if the birthdate is not provided', () => {
        const error = <Error>getAge("")
        expect( error.message ).toBe("Birthdate is required")
    })

})