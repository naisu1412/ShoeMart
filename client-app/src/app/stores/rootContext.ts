import { configure } from "mobx";
import { createContext } from "react";
import { CartStore } from "./cartStore";
import { ItemStore } from "./itemStore";


configure({ enforceActions: 'always' });

export class RootStore {
    itemStore: ItemStore;
    cartStore: CartStore;


    constructor() {
        this.itemStore = new ItemStore(this);
        this.cartStore = new CartStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());