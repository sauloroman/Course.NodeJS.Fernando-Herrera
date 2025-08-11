import axios from "axios"

export const httpClientPlugin = {
    get: async(url: string) => {
        const { data } = await axios.get(url)
        return data

        // const resp = await fetch(url)
        // const data = await resp.json()
        // return data;
    },

    post: async(url: string, body: any) => {
        const { data } = await axios.post(url, body)
        return data
    },

    put: async(url: string, body: any) => {
        const { data } = await axios.put(url, body)
        return data
    },

    delete: async(url: string) => {
        const { data } = await axios.delete(url)
        return data
    }
}
