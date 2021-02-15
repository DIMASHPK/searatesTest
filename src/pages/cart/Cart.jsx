import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../components/button/Button";
import Layout from "../../layouts/layout/Layout";
import Css from "./cart.module.css";
import { RoutesConfig } from "./../../configs/RoutesConfigs";
import ProductITem from "../../components/productItem/ProductItem";
import { getAdditionalProducts } from "../../helpers/helpers";
import { usePrice } from "../../hooks/usePrice";
import { addConfirmedOrderAC } from "./store/actions";

const Cart = () => {
  const { push } = useHistory();
  const { pendingOder } = useSelector(({ cart }) => cart);
  const { price, productsArray, checkboxHandler } = usePrice(
    pendingOder?.price
  );
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(
      addConfirmedOrderAC({
        price,
        additional: productsArray,
        products: pendingOder.products.map(({ additional, ...item }) => ({
          ...item,
        })),
      })
    );
    push(RoutesConfig.confirmed);
  };

  useEffect(() => {
    if (!pendingOder) {
      push(RoutesConfig.main);
    }
  });

  if (!pendingOder) {
    return null;
  }

  const { products } = pendingOder;
  const additionalProducts = getAdditionalProducts(products);

  return (
    <Layout>
      <div className={Css.cart_container}>
        <div className={Css.cart_info}>
          <div className={Css.cart_infoPrice}>
            <span>$ {price}</span>
          </div>
          <div className={Css.cart_infoContent}>
            <span>Lorem ipsum dolor sit amet. </span>
          </div>
        </div>
        <div className={Css.cart_additionalContainer}>
          <div>
            {additionalProducts.map((product) => (
              <ProductITem
                key={product._id}
                {...product}
                checkboxHandler={checkboxHandler}
                needArrow={false}
              ></ProductITem>
            ))}
          </div>
        </div>
        <div className={Css.cart_actionPanel}>
          <div className={Css.endPrice}>
            <span>Total</span>
            <span>$ {price}</span>
          </div>
          <Button disabled={false} clickHandler={submitHandler}>
            Confirm
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
