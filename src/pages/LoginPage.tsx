import React, { FC } from "react";
import Login from "../components/UI/Login";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";

const LoginPage: FC = () => {
  return (
    <Login>
      <div className={styles.body}>
        <h1 className={styles.title}>Register As A</h1>
        <p className={styles.text}>
          Join our platform and showcase your products and Services to a wide
          audience. Register now and embark on a journey of growth and success.
        </p>
        <Link to="/register-page" className={styles.button_green}>
          Buyer
        </Link>
        <Link to="/register-page" className={styles.button_blue}>
          Vendor
        </Link>
      </div>
    </Login>
  );
};

export default LoginPage;
