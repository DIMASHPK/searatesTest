import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RoutesConfig } from "../../configs/RoutesConfigs";
import Layout from "../../layouts/layout/Layout";
import Css from "./confirmPage.module.css";

const ConfirmPage = () => {
  const { push } = useHistory();
  const { pendingOder, confirmedOrder } = useSelector(({ cart }) => cart);

  useEffect(() => {
    if (!pendingOder) {
      push(RoutesConfig.main);
    }
    console.log(confirmedOrder);
  });

  return (
    <Layout withoutHeader>
      <div className={Css.confirmMarkContainer}>
        <div className={Css.confirmMark}></div>
        <span>Done</span>
        <span>Please Open the console</span>
      </div>
    </Layout>
  );
};

export default ConfirmPage;
