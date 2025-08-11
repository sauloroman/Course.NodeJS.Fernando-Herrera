import { getUserById } from "../../src/js-foundation/04-arrow"

describe("Tests in 04-arrow", () => {

    test("It should return an error if user does not exist", (done) => {

        const userId = 999

        getUserById(userId, ( err, user ) => {
            expect(err).toBe(`User with id ${userId} not found`)
            expect(user).toBeUndefined()
            done()
        })

    })

    test('it should return an user', ( done ) => {

        const userId = 1

        getUserById(userId, (err, user) => {
            expect(err).toBeUndefined()
            expect(user).toEqual({
                id: userId,
                name: expect.any(String)
            })
            done()
        })

    })

})