import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"
import { ServerApp } from "./server-app"

describe('Tests in server-app', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: true,
        fileDestination: 'test-destination',
        fileName: 'test-filename'
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('it should create a server app instance', () => {
        const serverApp = new ServerApp()
        expect( serverApp ).toBeInstanceOf( ServerApp )
        expect(typeof ServerApp.run ).toBe('function')
    })

    // Prueba de integración
    // test('it should run server app with options', () => {

    //     const logSpy = jest.spyOn(console, 'log')
    //     const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' )
    //     const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' )

    //     ServerApp.run( options )

    //     expect(logSpy).toHaveBeenCalledTimes(3)
    //     expect(logSpy).toHaveBeenCalledWith('Server running...')
    //     expect(logSpy).toHaveBeenLastCalledWith('File Created')

    //     expect( createTableSpy ).toHaveBeenCalledTimes(1)
    //     expect( createTableSpy ).toHaveBeenCalledWith({ base: options.base, limit: options.limit })

    //     expect( saveFileSpy ).toHaveBeenCalledTimes(1)
    //     expect( saveFileSpy ).toHaveBeenCalledWith({
    //         fileContent: expect.any(String),
    //         fileDestination: options.fileDestination,
    //         fileName: options.fileName,
    //     })
    // })

    test('it should run with custom values mocked', () => {

        const logMock = jest.fn()
        const logErrorMock = jest.fn()
        const createTableMock = jest.fn().mockReturnValue('1 x 2 = 2')
        const saveFileMock = jest.fn().mockReturnValue(true)

        global.console.log = logMock
        global.console.error = logErrorMock
        CreateTable.prototype.execute = createTableMock
        SaveFile.prototype.execute = saveFileMock

        ServerApp.run(options)

        expect( logMock ).toHaveBeenCalledWith('Server running...')
        expect( createTableMock ).toHaveBeenCalledWith({ base: options.base, limit: options.limit })
        expect( saveFileMock ).toHaveBeenCalledWith({ 
            fileContent: '1 x 2 = 2',
            fileDestination: options.fileDestination,
            fileName: options.fileName,
        })
        // expect(logMock).toHaveBeenLastCalledWith("File created")
        expect(logErrorMock).not.toHaveBeenCalled()

    })

})