import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'
import ItemCart from '../../cart/details/ItemCart'
import ItemDashboard from '../details/ItemDashboard'

export const HomePage = () => {
    return (
        <Segment style={{ marginRight: '10%', marginLeft: '10%' }} >
            <Container textAlign='center' fluid>
                <Grid >
                    <ItemDashboard />
                </Grid>
            </Container>
        </Segment>
    )
}
