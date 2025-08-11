import { emailTemplate } from '../../src/js-foundation/01-template'

describe("Tests in emailTemplate.ts", () => {
    
    test("it should contain a greeting", () => {
        expect(emailTemplate).toContain("Hi");
    })
    
    test("It includes {name} and {orderNumber}", () => {
        expect(emailTemplate).toContain("{name}")
        expect(emailTemplate).toMatch(/{name}/)
        expect(emailTemplate).toContain("{orderNumber}")
        expect(emailTemplate).toMatch(/{orderNumber}/)
    })
})