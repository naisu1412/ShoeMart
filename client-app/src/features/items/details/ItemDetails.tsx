import React, { Fragment, useContext } from 'react'
import { Card } from 'semantic-ui-react'
import { IItem } from '../../../app/models/item';
import { RootStoreContext } from '../../../app/stores/rootContext';
import { ItemUnit } from './ItemUnit';
import { observer } from 'mobx-react-lite'

 const ItemDetails: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const { itemsList } = rootStore.itemStore;

    return (
        <Fragment>
            <Card.Group>
                {console.log(itemsList, " are the values")}
                {itemsList.map((item: IItem) => (
                    <ItemUnit key={item.id} item={item} />
                ))}
            </Card.Group>
        </Fragment >
    )
}

export default observer(ItemDetails);



