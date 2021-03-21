import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Button, Card } from 'semantic-ui-react';
import { ICartItem, IItem } from '../../../app/models/item';
import { RootStoreContext } from '../../../app/stores/rootContext';

const ItemCart: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const { cartList, removeItem } = rootStore.cartStore;

    return (
        <Card.Group>
            {cartList.map((item: ICartItem) => (
                <Card key={item.id} fluid>
                    <Card.Header > {item.name} x{item.cartQuantity}</Card.Header>
                    <Card.Meta>Total Price: {item.price * item.cartQuantity} </Card.Meta>
                    <Button basic color='red' onClick={() => {
                        removeItem(item);
                    }}>Remove</Button>
                    
                </Card>
            ))}
        </Card.Group>
    )
}

export default observer(ItemCart);
