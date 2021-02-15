import React from "react";
import Css from "./button.module.css";

const Button = ({ children, disabled, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={Css.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
