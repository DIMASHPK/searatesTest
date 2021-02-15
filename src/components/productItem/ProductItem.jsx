import React, { useEffect, useState } from "react";
import Css from "./productItem.module.css";

const ProductITem = ({
  children,
  checkboxHandler,
  needArrow,
  ...product
}) => {
  const { _id, name, date, price } = product;
  const [checked, setChecked] = useState(false);
  const [productItem, setProductItem] = useState({
    ...product,
    quantity: 1,
  });

  const changeHandler = () => {
    setChecked((state) => !state);
  };

  useEffect(() => {
    checkboxHandler(productItem, checked);
  }, [checked]);

  return (
    <div className={Css.productItem_container} id="productItem_container">
      <label className={Css.productItem_checkbox} htmlFor={_id}>
        <input
          id={_id}
          type="checkbox"
          checked={checked}
          onChange={changeHandler}
        />
        <div className={Css.productItem_checkboxMark}></div>
      </label>
      <div className={Css.productItem_info}>
        <h3>
          <span>to:</span>
          {name}
        </h3>
        <span>
          {new Date(date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <div className={Css.productItem_quantityPanel}>
        {children && children({ productItem, setProductItem })}
      </div>
      <div className={Css.productItem_price}>
        <span>{price}</span>
      </div>
      {needArrow && <div className={Css.productItem_arrow}></div>}
    </div>
  );
};

export default ProductITem;
