import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite'
import ItemList from './ItemList';

const ItemDashboard: React.FC = () => {


    return (
        <Fragment>
            <ItemList />
        </Fragment>

    )
}

export default observer(ItemDashboard);



