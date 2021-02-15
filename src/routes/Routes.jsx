import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import Products from "../pages/products/Products";
import { RoutesConfig } from "./../configs/RoutesConfigs";
import ConfirmPage from "./../pages/confirmPage/ConfirmPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={RoutesConfig.main}>
        <Products />
      </Route>
      <Route path={RoutesConfig.cart}>
        <Cart />
      </Route>
      <Route path={RoutesConfig.confirmed}>
        <ConfirmPage />
      </Route>
    </Switch>
  );
};

export default Routes;
