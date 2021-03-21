import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import { IItem } from '../../../app/models/item'
import { RootStoreContext } from '../../../app/stores/rootContext'


const ItemUnit: React.FC<{ item: IItem }> = ({ item }) => {
    const rootStore = useContext(RootStoreContext);
    const { addItem } = rootStore.cartStore;

    return (
        <Card key={item.id}>
            <Image src='/assets/user.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>${item.price}</Card.Meta>
                <Card.Meta>Remaining: {item.quantity}</Card.Meta>
                <Card.Description>
                    {item.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={() => {
                        addItem(item);
                    }}>
                        Add to Cart
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default observer(ItemUnit);
