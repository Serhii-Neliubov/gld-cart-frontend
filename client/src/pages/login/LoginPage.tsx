import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import Login from "../../components/Login/Login.tsx";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userDataSlice";
import {API_URL} from "../../lib/http.ts";

const LoginPage = () => {
  const [isEmptyEmail, setIsEmptyEmail] = useState<boolean>(false);
  const [userData, setUserData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  function getGoogleOAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
      redirect_uri: `${API_URL}/tokens/oauth/google`,
      client_id:
        "779302160501-d6omdv1c2cdknj75b17epp22tc40u0eu.apps.googleusercontent.com",
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      state: "Buyer",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };

    const qs = new URLSearchParams(options);
    return `${rootUrl}?${qs.toString()}`;
  }
  const dispatch = useDispatch<AppDispatch>();

  useEffect((): void => {
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
              <Link className={styles.link} to="/user-type-page">
                Create a free account
              </Link>
            </div>
            <a href={getGoogleOAuthURL()} className={styles.google_button}>
              Sign up with google
            </a>
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
            <div className={styles.check_box_remember}>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            <Link className={styles.link} to="/forgotten-password">
              Forgot password?
            </Link>
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
