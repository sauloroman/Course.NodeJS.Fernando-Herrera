import { getUserById } from '../../src/js-foundation/03-callbacks'

describe("Tests in 03-callbacks", () => {

    test("getUserById should return an error if the user does not exist", (done) => {
        
        const userId = 999

        getUserById(userId, ( err, user ) => {
            expect(err).toBe(`User with id ${userId} not found`)
            expect(user).toBeUndefined()
            done()
        })

    })

    test("getUserById should return a user", (done) => {

        const userId = 1

        getUserById( userId, (err, user) => {
            expect(err).toBeUndefined()
            expect(user).toEqual({
                id: userId,
                name: expect.any(String)
            })
            done()
        })

    })

})