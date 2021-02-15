import React, { useEffect, useState } from "react";
import Css from "./quantityPanel.module.css";

const QuantityPanel = ({
  quantity = 1,
  callback,
  productItem,
  setProductItem
}) => {
  const [value, setValue] = useState(quantity);
  const plusButtonClickHandler = () => {
    setValue((state) => state + 1);
  };
  const minusButtonClickHandler = () => {
    if (value > 1) setValue((state) => state - 1);
  };

  useEffect(() => {
    callback && callback(productItem._id, value);
    setProductItem({...productItem, quantity: value})
  }, [value]);

  return (
    <div className={Css.quantityPanel_container}>
      <button
        className={Css.quantityPanel_minus}
        onClick={minusButtonClickHandler}
      >
        &#8722;
      </button>
      <span className={Css.quantityPanel_value}>{value}</span>
      <button
        className={Css.quantityPanel_plus}
        onClick={plusButtonClickHandler}
      >
        &#43;
      </button>
    </div>
  );
};

export default QuantityPanel;
