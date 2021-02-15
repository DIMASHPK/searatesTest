import React from "react";
import Css from "./main.module.css"

const Main = ({ children }) => {
  return <main className={Css.main_content}>{children}</main>;
};

export default Main;
