import axios, { AxiosResponse } from "axios";
import { IICart } from "../models/cart";
import { IItem } from "../models/item";
import { User, UserFormValues } from "../models/user";

axios.defaults.baseURL = "http://localhost:5000/api/";
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Items = {
    list: () => requests.get('/items/'),
    update: (item: IItem) => requests.put(`/items/${item.id}`, item)
}

const Cart = {
    list: () => requests.get('/cart/'),
    add: (cartItem: IICart) => requests.post(`/cart/`, cartItem),
    remove: (id: string) => requests.delete(`/cart/${id}`)
}

const Account = {
    current: () => requests.get('/account'),
    login: (user: UserFormValues) => requests.post('/account/login', user),
    register: (user: UserFormValues) => requests.post('/account/register', user),
}

const agentExport = { Items, Cart, Account }
export default agentExport;