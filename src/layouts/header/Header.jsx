import React from "react";
import Css from "./Header.module.css";

const Header = ({children}) => {
  return (
    <header className={Css.mainHeader}>
      {children}
    </header>
  );
};

export default Header;
