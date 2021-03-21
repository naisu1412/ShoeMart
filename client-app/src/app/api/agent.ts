import axios, { AxiosResponse } from "axios";
import { Item } from "semantic-ui-react";
import { IICart } from "../models/cart";

axios.defaults.baseURL = "http://localhost:5000/api/";
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Items = {
    list: () => requests.get('/items/')
}

const Cart = {
    list: () => requests.get('/cart/'),
    add: (cartItem: IICart) => requests.post(`/cart/`, cartItem),
    remove: (id: string) => requests.delete(`/cart/${id}`)
}

const agentExport = { Items, Cart }
export default agentExport;