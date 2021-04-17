import React, { Fragment, useContext, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import NavBar from '../../features/items/navBar/NavBar';
import { LoadingComponent } from './LoadingComponent';
import { RootStoreContext } from '../stores/rootContext';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ItemDashboard from '../../features/items/details/ItemDashboard';
import { HomePage } from '../../features/items/home/HomePage';
import LoginForm from '../../features/users/LoginForm';
import RegisterForm from '../../features/users/RegisterForm';

const App: React.FC<RouteComponentProps> = ({ location }) => {

  const rootStore = useContext(RootStoreContext);
  const { loadingItems, loadItems } = rootStore.cartStore;

  useEffect(() => {
    loadItems();
  }, [loadItems])

  if (loadingItems) return <LoadingComponent content={`Loading app ... ${loadingItems}`} />


  return (
    <Fragment>
      <NavBar />
      <Route path={'/(.+)'} render={() => (
        <>
          <Container >
            <Switch>
              <Route exact path='/login' component={LoginForm} />
              <Route exact path='/register' component={RegisterForm} />
              <Route exact path='/browse' component={ItemDashboard} />
            </Switch>
          </Container>
        </>
      )}
      />
    </Fragment>

  );
}

export default withRouter(observer(App));
