import { action, makeObservable, observable, runInAction } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";


export class ItemStore {
    rootStore: any;
    @observable itemsList = [];

    constructor(rootStore: any) {

        this.rootStore = rootStore;
        this.loadItems();
        makeObservable(this);
    }


    @action loadItems = async () => {
        const itemList = await agent.Items.list();

        try {
            runInAction(() => {
                console.log("I got here")
                console.log(itemList)
                this.itemsList = itemList;
            })
        } catch (error) {
            console.log(error);
        }
    }

    @action addToCart = async (id: number) => {

    }
}
