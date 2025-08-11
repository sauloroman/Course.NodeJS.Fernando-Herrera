import fs from 'fs'
import { SaveFile } from "./save-file.use-case"

describe('Tests in save-file.use-case', () => {
    
    const defaultPath = 'outputs'
    const customPath = 'custom-outputs/file-destination'

    beforeEach(() => {
        // jest.clearAllMocks() // Esto no funciona para los spy
    })

    // afterEach(() => {
    //     if ( fs.existsSync(defaultPath) ) fs.rmSync(defaultPath, { recursive: true })
    //     if ( fs.existsSync(customPath) ) fs.rmSync(customPath, { recursive: true })
    // })

    test('it should save a file with default values', () => {

        const saveFile = new SaveFile()
        
        const filePath = 'outputs/table-x.txt'
        const options = { fileContent: 'test content' }
        
        const wasFileCreated = saveFile.execute(options)
        
        const fileExists = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'})

        expect( wasFileCreated ).toBeTruthy()
        expect( fileExists ).toBeTruthy()
        expect( fileContent ).toBe( options.fileContent )

    })

    test('it should save a file with custom values', () => {
        const options = {
            fileContent: 'custom content',
            fileDestination: customPath,
            fileName: 'custom-table-name'
        }

        const saveFileExecute = new SaveFile()
        
        const filePath = `${options.fileDestination}/${options.fileName}.txt`

        const wasFileCreated = saveFileExecute.execute(options)
        const fileExists = fs.existsSync(filePath)
        const fileContent = fs.readFileSync( filePath, {encoding: 'utf-8'})
        
        expect( wasFileCreated ).toBeTruthy()
        expect( fileExists ).toBeTruthy()
        expect( fileContent ).toBe( options.fileContent )

    })

    test('it should return false if directory could not be created', () => {
        const saveFile = new SaveFile()
        const mkdirMock = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => { 
            throw new Error('This is a custom error from testing')
        })
        const result = saveFile.execute({ fileContent: '' })

        expect( result ).toBeFalsy() 

        mkdirMock.mockRestore() // para limpiar el spy
    })

    test('it shold return false if file could not be created', () => {

        const saveFile = new SaveFile()
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation( () => {
            throw new Error('This is a custom writing message from testing')
        })

        const result = saveFile.execute({ fileContent: '' }) 
        expect( result ).toBeFalsy()

        writeFileSpy.mockRestore()
    })

})