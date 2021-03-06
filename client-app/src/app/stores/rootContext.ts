import { configure } from "mobx";
import { createContext } from "react";
import { ItemStore } from "./itemStore";


configure({ enforceActions: 'always' });

class RootStore {
    itemStore: any;


    constructor() {
        this.itemStore = new ItemStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());