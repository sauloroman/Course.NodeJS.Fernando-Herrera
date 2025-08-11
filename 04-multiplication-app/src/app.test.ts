import { ServerApp } from "./presentation/server-app"

describe('Tests in app.ts', () => {

    test('it should call Server.run with values', async () => {
    
        const serverRunMock = jest.fn()
        ServerApp.run = serverRunMock        

        process.argv = ['node', 'app.ts', '-b', '10', '-l', '15', '-s', '-n', 'test-filename', '-d', 'test-destination']

        await import('./app')

        expect( serverRunMock ).toHaveBeenCalledWith({ 
            base: 10, 
            limit: 15,
            showTable: true,
            fileName: 'test-filename',
            fileDestination: 'test-destination'
        })

    })  

})