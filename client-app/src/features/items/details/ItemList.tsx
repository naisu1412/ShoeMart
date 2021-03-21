import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card } from 'semantic-ui-react'
import { IItem } from '../../../app/models/item'
import { RootStoreContext } from '../../../app/stores/rootContext'
import ItemUnit from './ItemUnit'

const ItemList = () => {
    const rootStore = useContext(RootStoreContext);
    const { itemsList } = rootStore.itemStore;

    return (
        <Card.Group centered>
            {itemsList.map((item: IItem) => (
                <ItemUnit key={item.id} item={item} />
            ))}
        </Card.Group>
    )
}

export default observer(ItemList);