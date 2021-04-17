import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import { IItem } from "../models/item";
import { RootStore } from "./rootContext";


export class ItemStore {
    rootStore: RootStore;
    @observable itemsList:IItem[] = [];

    constructor(rootStore: RootStore) {

        this.rootStore = rootStore;
        makeObservable(this);
        this.loadItems();
    }

    
    @action loadItems = async () => {
        const itemList = await agent.Items.list();

        try {
            runInAction(() => {
                this.itemsList = itemList;
            })
        } catch (error) {
            console.log(error);
        }
    }
}
