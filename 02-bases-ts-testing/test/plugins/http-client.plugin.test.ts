import { httpClientPlugin  as http, httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("Tests in httpClient", () => {

    test("http get method should return a proper response", async () => {

        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const response = await http.get(url)

        expect( response ).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        })

    })

    test('httpClient must contain a POST, DELETE and PUT methods', () => {
        expect( httpClientPlugin.post ).toEqual( expect.any(Function) )
        expect( httpClientPlugin.delete ).toEqual( expect.any(Function) )
        expect( httpClientPlugin.put ).toEqual( expect.any(Function) )
    })

})