import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import Login from "../../components/UI/Login";
import { useEffect } from "react";
import React from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Slices/userDataSlice";

const LoginPage = () => {
  const [isEmptyEmail, setIsEmptyEmail] = React.useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();

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
                    setUserData({ ...userData, email: e.target.value });
                  }}
                  value={userData.email}
                  type="email"
                  placeholder="Gldcart@gmail.com"
                />
              </div>
              <div className={styles.input}>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
          <div className={styles.check_box}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <Link
            to="/"
            onClick={() => dispatch(login(userData))}
            className={styles.button}
          >
            Login
          </Link>
        </div>
      </Login>
    </div>
  );
};

export default LoginPage;
