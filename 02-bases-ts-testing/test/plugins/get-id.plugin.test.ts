import { getUUID } from "../../src/plugins"

describe("Tests in getUUID", () => {

    test("it should return a string of 36 characters", () => {
        const uuid = getUUID()
        expect( typeof uuid).toBe("string")
        expect( uuid.length ).toBe(36)
    })

})