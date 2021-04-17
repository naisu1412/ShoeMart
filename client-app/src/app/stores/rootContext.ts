import { configure } from "mobx";
import { createContext } from "react";
import { CartStore } from "./cartStore";
import CommonStore from "./commonStore";
import { ItemStore } from "./itemStore";
import UserStore from "./userStore";


configure({ enforceActions: 'always' });

export class RootStore {
    itemStore: ItemStore;
    cartStore: CartStore;
    userStore: UserStore;
    commonStore: CommonStore;

    constructor() {
        this.itemStore = new ItemStore(this);
        this.cartStore = new CartStore(this);
        this.userStore = new UserStore(this);
        this.commonStore = new CommonStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());