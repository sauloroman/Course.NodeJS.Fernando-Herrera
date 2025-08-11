import { buildMakePerson } from "../../src/js-foundation/05-factory"

describe("Tests in 05-factory", () => {

    const getIDMock = () => "1234"
    const getAgeMock = (birthdate:string) => 2000

    test("buildMakePerson should return a buildPerson function", () => {

        const buildPerson = buildMakePerson({
            getID: getIDMock,
            getAge: getAgeMock
        })

        expect(typeof buildPerson).toBe("function")
        expect(buildPerson).toBeInstanceOf(Function)  
    })

    test("buildPerson should return a person object", () => {

        const personInfo = { name: 'Test', birthdate: '2000-01-01'}
        const person = buildMakePerson({getID: getIDMock, getAge: getAgeMock})(personInfo)
        expect(person).toEqual({
            id: getIDMock(),
            age: getAgeMock(personInfo.birthdate),
            birthdate: personInfo.birthdate,
            name: personInfo.name
        })
    })

})