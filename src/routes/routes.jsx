import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
        <Route path="/card">
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
