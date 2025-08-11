// import { yarg } from "./args.plugin"

const runCommand = async ( args: string[] ) => {
    process.argv = [ ...process.argv, ...args ]

    const {yarg} = await import('./args.plugin')

    return yarg
}

describe('Tests in args.plugin', () => {

    const originalArgv = process.argv

    beforeEach(() => {
        process.argv = originalArgv
        jest.resetModules() 
    })

    test('it should return default values', async () => {

        const argv = await runCommand(['-b', '5'])

        expect( argv ).toEqual(
            expect.objectContaining({
                b: 5,
                l: 10,
                s: false,
                n: 'multiplication-table',
                d: 'outputs'
            })
        )

    })

    test('it should return configuration with custom values', async () => {

        const argv = await runCommand([
            '-b',
            '12',
            '-l',
            '8',
            '-s',
            '-n',
            'test-name-file',
            '-d',
            'destination-file'
        ])

        expect( argv ).toEqual( expect.objectContaining({
            b: 12,
            l: 8,
            s: true,
            n: 'test-name-file',
            d: 'destination-file'
        }))

    })

})