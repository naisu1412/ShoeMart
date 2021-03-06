import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody)
}

const Items = {
    list: () => requests.get('/items/')
}

const agentExport = { Items }
export default agentExport;