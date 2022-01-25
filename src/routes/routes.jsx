import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cards from '../pages/cards/Cards';
import Orders from '../pages/orders/orders';
import Selected_Card from './../components/Selected_Card/Selected_Card';
import Main from './../pages/main/main';

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/card:id">
          <Selected_Card />
        </Route>
        <Route path={['/home']} exact>
          <Main />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default Routes;
