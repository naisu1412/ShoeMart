import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import { IItem } from '../../../app/models/item'

export const ItemUnit: React.FC<{ item: IItem }> = ({ item }) => {
    return (
        <Card key={item.id}>
            <Image src='/assets/user.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>{item.price}</Card.Meta>
                <Card.Description>
                    {item.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Buy
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}
