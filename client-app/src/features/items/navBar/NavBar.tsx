import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react'
import { Segment, Menu, Button, Modal } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootContext';
import ItemCart from '../../cart/details/ItemCart';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const rootStore = useContext(RootStoreContext);
    const { cartList } = rootStore.cartStore;

    const itemCount = () => {
        let itemCount = 0;
        cartList.forEach(cartItem => {
            itemCount += cartItem.cartQuantity;
        })
        return itemCount;
    }
    return (

        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                    name='home'
                    active={true}
                    onClick={() => { }}
                />
                <Menu.Item
                    name='messages'
                    onClick={() => { }}

                />
                <Menu.Item
                    name='friends'
                    onClick={() => { }}
                />
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={
                        <Menu.Item
                            position='right'
                            icon='shopping cart'
                            name={`${itemCount()}`}
                        />
                    }
                >
                    <Modal.Header>Your List</Modal.Header>
                    <Modal.Content scrolling>
                        <ItemCart />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green'>
                            Buy
                        </Button>
                        <Button color='black' onClick={() => setOpen(false)}>
                            Close
                        </Button>
                    </Modal.Actions>
                    </Modal>

            </Menu>

        </Segment >
    )
}

export default observer(NavBar);
