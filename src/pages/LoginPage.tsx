import Login from "../components/UI/Login";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.scss";

interface LoginPageProps {
  isVendorType: boolean;
}

const LoginPage = ({ isVendorType }: LoginPageProps) => {
  return (
    <div className={styles.body}>
      <Login>
        <div className={styles.content}>
          <h1 className={styles.title}>Log in to Gldcart</h1>
          <div className={styles.log_link}>
            <p>Don’t have an account? </p>
            <Link className={styles.link} to="/register-page">
              Create a free account
            </Link>
          </div>
          <button className={styles.google_button}>Sign up with google</button>
          <p className={styles.email_bar}>or Sign up with Email</p>
        </div>
        <form>
          <div className={styles.form}>
            <div className={styles.input}>
              <span>Your Email</span>
              <input type="email" placeholder="Gldcart@mail.com" />
            </div>
            <div className={styles.input}>
              <span>Password</span>
              <input type="password" placeholder="Min. 6 character" />
            </div>
          </div>
        </form>
        <div className={styles.check_box}>
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <Link className={styles.button} to={isVendorType ? "/sub-plans" : "/"}>
          Login
        </Link>
      </Login>
    </div>
  );
};

export default LoginPage;
