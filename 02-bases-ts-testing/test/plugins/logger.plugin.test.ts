import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger.plugin"

describe("Tests in logger.plugin", () => {

    test("buildLogger should return a logger", () => {

        const logger = buildLogger("test.js")
        expect( typeof logger.log ).toBe("function")
        expect( typeof logger.error ).toBe("function")

    })

    test("logger.log should log a message", () => {

        const loggerLog = jest.spyOn(winstonLogger, 'log')
        const message = "test message"
        const service = "test service"

        const logger = buildLogger(service)

        logger.log(message)

        expect( loggerLog ).toHaveBeenCalledWith(
            'info', 
            expect.objectContaining({
                message,
                service
            })
        )

    })

})