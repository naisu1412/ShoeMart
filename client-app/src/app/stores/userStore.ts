import { action, computed, makeAutoObservable, runInAction } from "mobx";
import agentExport from "../api/agent";
import { User } from "../models/user";
import { RootStore } from "./rootContext";
import { history } from "../..";


export default class UserStore {
    user: User | null = null;
    store: RootStore | null = null;
    constructor(rootStore: RootStore) {
        this.store = rootStore;
        makeAutoObservable(this);
    }

    @computed get isLoggedIn() {
        return !!this.user;
    }

    @action login = async (creds: any) => {
        try {
            const user = await agentExport.Account.login(creds);
            this.store.commonStore.setToken(user.token);
            console.log("login done")
            runInAction(() => {
                this.user = user;
            })
            history.push('/browse');
        } catch (error) {

            throw error;
        }
    }

    @action logout = () => {
        this.store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        history.push('/login');
    }

    @action  register = async (creds: any) => {
        try {
            const user = await agentExport.Account.register(creds);
            this.store.commonStore.setToken(user.token);
            console.log("login done")
            runInAction(() => {
                this.user = user;
            })
            history.push('/browse');
        } catch (error) {

            throw error;
        }
    }
}