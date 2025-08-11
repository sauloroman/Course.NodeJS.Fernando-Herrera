import { CreateTable } from "./create-table.use-case"

describe('Tests in create-table.use-case', () => {

    test('It should create a table with default values', () => {

        const createTable = new CreateTable()
        const table = createTable.execute({ base: 2 })
        const rows = table.split('\n').length

        expect( createTable ).toBeInstanceOf( CreateTable )
        expect( table ).toContain("2 x 1 = 2")
        expect( table ).toContain("2 x 10 = 20")
        expect(rows).toBe(10)

    })
    
    test('it should create table with custom values', () => {

        const options = {
            base: 3,
            limit: 20
        }

        const executeTable = new CreateTable()
        const table = executeTable.execute(options)
        const rows = table.split('\n').length

        expect( table ).toContain(`${options.base} x 1 = ${options.base * 1}`)
        expect( table ).toContain(`${options.base} x ${options.limit} = ${options.base * options.limit}`)
        expect( rows ).toBe(options.limit)
    })

})