import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductITem from "../../components/productItem/ProductItem";
import QuantityPanel from "../../components/quantityPanel/QuantityPanel";
import Layout from "../../layouts/layout/Layout";
import Css from "./products.module.css";
import Button from "./../../components/button/Button";
import { updateQuantity } from "./../../helpers/helpers";
import { addPendingOrderAC } from "./../cart/store/actions";
import { useHistory } from "react-router-dom";
import { RoutesConfig } from "./../../configs/RoutesConfigs";
import { usePrice } from "../../hooks/usePrice";

const Products = () => {
  const { products } = useSelector(({ products }) => products);
  const {
    productsArray,
    checkboxHandler,
    price,
    setProductsArray,
  } = usePrice();
  const dispatch = useDispatch();
  const { push } = useHistory();
  const headerContent = (
    <div className={Css.products_costContainer}>
      <span>$ {price}</span>
    </div>
  );
  const quantityPanelHandler = (id, value) => {
    setProductsArray((state) => state.map(updateQuantity(id, value)));
  };
  const submitHandler = () => {
    dispatch(addPendingOrderAC({ products: productsArray, price }));
    push(RoutesConfig.cart);
  };

  return (
    <Layout headerContent={headerContent}>
      <div className={Css.products_container}>
        {products.map((product) => (
          <ProductITem
            key={product._id}
            {...product}
            checkboxHandler={checkboxHandler}
            needArrow
          >
            {(props) => (
              <QuantityPanel
                quantity={1}
                callback={quantityPanelHandler}
                {...props}
              />
            )}
          </ProductITem>
        ))}
      </div>
      <div className={Css.products_action}>
        <Button disabled={!parseInt(price)} clickHandler={submitHandler}>
          Buy
        </Button>
      </div>
    </Layout>
  );
};

export default Products;
