import { Link } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import BgWithParticles from "@/components/bg-with-particles/BgWithParticles.tsx";
import { AppDispatch } from "@/store/store.ts";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/userDataSlice.ts";
import AuthService from "@/services/AuthService.ts";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import {useInput} from "@/hooks/useInput/useInput.tsx";

const LoginPage = () => {
  useDefaultScrollPosition();

  const dispatch = useDispatch<AppDispatch>();

  const email = useInput('');
  const password = useInput('');

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
              <div className={styles.input}>
                <span>Your Email</span>
                <input
                  onChange={email.onChange}
                  value={email.value}
                  type="email"
                  placeholder="Gldcart@gmail.com"
                />
              </div>
              <div className={styles.input}>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password.value}
                  onChange={password.onChange}
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
            onClick={() => dispatch(login({ email: email.value, password: password.value }))}
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
