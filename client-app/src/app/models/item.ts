export interface IItem {

    id: string;
    name: string;
    date: string;
    description: string;
    price: number;
    rating: number;
    quantity: number;

}

export interface ICartItem extends IItem {
    cartQuantity: number;
}