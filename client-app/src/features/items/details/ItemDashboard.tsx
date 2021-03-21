import React, { Fragment } from 'react'
import { Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import ItemCart from '../../cart/details/ItemCart';
import ItemList from './ItemList';

const ItemDashboard: React.FC = () => {


    return (
        <Fragment>
            <ItemList />
        </Fragment>

    )
}

export default observer(ItemDashboard);



