import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Orders from '../pages/orders/orders';
import Product_Cart from './../components/Product_Cart/Product_Cart';
import Main from './../pages/main/main';

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/card">
          <Product_Cart />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
