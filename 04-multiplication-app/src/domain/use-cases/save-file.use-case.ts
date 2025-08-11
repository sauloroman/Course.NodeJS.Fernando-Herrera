import fs from 'fs'

export interface Options {
    fileContent: string,
    fileDestination?: string,
    fileName?: string,
}

export interface SaveFileUseCase {
    execute: ( option: Options ) => boolean
}

export class SaveFile implements SaveFileUseCase {
    public execute ({ fileContent, fileDestination = 'outputs', fileName = 'table-x' }: Options) {

        try {
    
            fs.mkdirSync(fileDestination, { recursive: true })
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
            return true

        } catch(error) {
            return false
        }

    }
}