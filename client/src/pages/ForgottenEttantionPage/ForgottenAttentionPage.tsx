import React from "react";
import styles from "./ForgottenAttentionPage.module.scss";
import { Link } from "react-router-dom";
import Login from "../../components/UI/Login";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ForgottenAttentionPage = () => {
  const email = useSelector((state: RootState) => state.setEmail.value);
  return (
    <div className={styles.body}>
      <Login>
        <div className={styles.components}>
          <div className={styles.content}>
            <h1 className={styles.title}>Password Reset Email Sent</h1>
            <div className={styles.log_link}>
              <p>
                If <span>{email}</span> is associated with an existing account
                you will receive an email with instructions on resetting your
                password.
              </p>
            </div>
          </div>

          <Link to="/login" className={styles.button}>
            Login
          </Link>
        </div>
      </Login>
    </div>
  );
};

export default ForgottenAttentionPage;
