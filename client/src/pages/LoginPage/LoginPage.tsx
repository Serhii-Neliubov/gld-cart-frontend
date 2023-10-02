import { Link } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import Login from "../../components/UI/Login";
import { useEffect } from "react";
import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [isEmptyEmail, setIsEmptyEmail] = React.useState(false);
  const isVendor = useSelector((state: RootState) => state.isVendor.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.body}>
      <Login>
        <div className={styles.components}>
          <div className={styles.content}>
            <h1 className={styles.title}>Log in to Gldcart</h1>
            <div className={styles.log_link}>
              <p>Don’t have an account? </p>
              <Link className={styles.link} to="/register-page">
                Create a free account
              </Link>
            </div>
            <button className={styles.google_button}>
              Sign up with google
            </button>
            <p className={styles.email_bar}>or Sign up with Email</p>
          </div>
          <form>
            <div className={styles.form}>
              <div className={`${isEmptyEmail ? styles.error : styles.input}`}>
                <span>Your Email</span>
                <input
                  onChange={(e) => {
                    const isValidEmail =
                      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
                        e.target.value
                      );
                    setIsEmptyEmail(!isValidEmail);
                  }}
                  type="email"
                  placeholder="Gldcart@gmail.com"
                />
              </div>
              <div className={styles.input}>
                <span>Password</span>
                <input type="password" placeholder="Password" />
              </div>
            </div>
          </form>
          <div className={styles.check_box}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <Link className={styles.button} to={isVendor ? "/sub-plans" : "/"}>
            Login
          </Link>
        </div>
      </Login>
    </div>
  );
};

export default LoginPage;
