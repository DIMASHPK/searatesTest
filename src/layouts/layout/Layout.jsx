import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Css from "./Layout.module.css";

const Layout = ({ children, headerContent, withoutHeader = false }) => {
  return (
    <main className={Css.mainContainer}>
      {!withoutHeader && <Header>{headerContent}</Header>}
      <Main>{children}</Main>
    </main>
  );
};

export default Layout;
