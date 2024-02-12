import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import BgWithParticles from "../../components/BgWithParticles/BgWithParticles.tsx";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userDataSlice";
import AuthService from "../../services/AuthService.ts";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const LoginPage = () => {
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useDefaultScrollPosition();

  const [userData, setUserData] = useState(
    {
      email: "",
      password: "",
    }
  );


  return (
    <div className={styles.body}>
      <BgWithParticles>
        <div className={styles.components}>
          <div className={styles.content}>
            <h1 className={styles.title}>Log in to Gldcart</h1>
            <div className={styles.log_link}>
              <p>Don’t have an account? </p>
              <Link className={styles.link} to="/user-type-page">
                Create a free account
              </Link>
            </div>
            <a href={AuthService.getGoogleOAuthURL()} className={styles.google_button}>
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
          <button
            onClick={() => dispatch(login(userData))}
            className={styles.button}
          >
            Login
          </button>
        </div>
      </BgWithParticles>
    </div>
  );
};

export default LoginPage;
