import { action, makeObservable, observable, runInAction } from "mobx";
import agentExport from "../api/agent";
import { v4 as uuid } from 'uuid';
import { ICartItem, IItem } from "../models/item";
import { RootStore } from "./rootContext";
import { IICart } from "../models/cart";

export class CartStore {
    rootStore: RootStore;

    @observable cartList: ICartItem[] = [];


    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeObservable(this);
        this.loadItems();
    }

    @observable getTotalItemCount = () => {
        let itemCount = 0;
        this.cartList.forEach(cartItem => {
            itemCount += cartItem.quantity;
        })

        return itemCount;
    }

    @action addItem = async (item: IItem) => {
        const itemInventory = this.rootStore.itemStore.itemsList;
        const getItemInCart = () => this.cartList.filter(cartItem => item.id === cartItem.id)
        let newItem = {
            id: uuid(),
            itemID: item.id
        };
        let _itemInventory: any = itemInventory.find(_i => _i.id === item.id);

        try {

            if (_itemInventory.quantity > 0) {
                await agentExport.Cart.add(newItem);
                runInAction(() => {
                    if (getItemInCart().length === 0) {
                        this.cartList.push({ ...item, cartQuantity: 1 })
                    } else {
                        getItemInCart()[0].cartQuantity += 1;
                    }
                    _itemInventory.quantity -= 1;
                })
            } else {
                console.log("Not In stock");
            }

        } catch (error) {
            console.log(error);
        }
    }

    @action loadItems = async () => {
        const itemsInCartIdOnly: IICart[] = await agentExport.Cart.list();
        const itemInventory = this.rootStore.itemStore.itemsList;

        try {
            runInAction(() => {

                itemsInCartIdOnly.forEach(item => {
                    let _itemInventory: any = itemInventory.find(_i => _i.id === item.itemID);
                    let _itemInTheCart: any = this.cartList.find(i => i.id === item.itemID);

                    if (this.cartList.length === 0 || !_itemInTheCart) {
                        this.cartList.push({ ..._itemInventory, cartQuantity: 1 });
                    } else {
                        _itemInTheCart.cartQuantity += 1;
                    }
                });

            });

        } catch (error) {
            console.log(error);
        }
    }

    @action removeItem = async (item: IItem) => {
        const itemsInCartIdOnly: IICart[] = await agentExport.Cart.list();
        const itemInventory = this.rootStore.itemStore.itemsList;

        try {
            const getItemInCart = () => this.cartList.filter(cartItem => item.id === cartItem.id)
            const getItemInCartItem = () => itemsInCartIdOnly.find(i => i.itemID === item.id);
            let _itemInventory: any = itemInventory.find(_i => _i.id === item.id);

            if (getItemInCart().length === 0) {
                //possibly add a toast here
                console.log("Item is not in the cart");
            } else {
                if (getItemInCart()[0].cartQuantity > 1) {
                    await agentExport.Cart.remove(`${getItemInCartItem()?.id}`);

                    getItemInCart()[0].cartQuantity -= 1;
                    //add quantity not being enabled in database
                } else {
                    this.cartList = this.cartList.filter(cartItem => cartItem.id !== item.id);
                }
            }

        } catch (error) {
            console.log(error);
        }
    }


}