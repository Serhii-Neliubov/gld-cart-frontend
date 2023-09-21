import React from "react";
import styles from "./RegisterPage.module.scss";
import Login from "../components/UI/Login";
import { Link } from "react-router-dom";

const BuyerLoginPage = () => {
  return (
    <div className={styles.body}>
      <Login>
        <div className={styles.content}>
          <h1 className={styles.title}>Sign up to Gldcart</h1>
          <div className={styles.log_link}>
            <p>Already have an account?</p>
            <Link className={styles.link} to="/login">
              Log in
            </Link>
          </div>
          <button className={styles.google_button}>Sign up with google</button>
          <p className={styles.email_bar}>or Sign up with Email</p>
          <form>
            <div className={styles.form}>
              <div className={styles.form_column_wrap}>
                <div className={styles.input}>
                  <span>First Name</span>
                  <input type="text" placeholder="ex:John" />
                </div>
                <div className={styles.input}>
                  <span>Last Name</span>
                  <input type="text" placeholder="ex:Miller" />
                </div>
              </div>
              <div className={styles.input}>
                <span>Your Email</span>
                <input type="email" placeholder="ex:Miller" />
              </div>
              <div className={styles.input}>
                <span>Password</span>
                <input type="password" placeholder="ex:Miller" />
              </div>
              <div className={styles.input}>
                <span>Re-Password</span>
                <input type="password" placeholder="ex:Miller" />
              </div>
            </div>
          </form>
        </div>
        <Link className={styles.button} to="/home">
          Create my account
        </Link>
      </Login>
    </div>
  );
};

export default BuyerLoginPage;
