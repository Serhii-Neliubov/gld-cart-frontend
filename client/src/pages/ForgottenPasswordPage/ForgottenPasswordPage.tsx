import React from "react";
import styles from "./ForgottenPasswordPage.module.scss";
import Login from "../../components/UI/Login";
import { useDispatch } from "react-redux";
import { setEmailValue } from "../../redux/Slices/resetPasswordEmailSlice";
import { Link } from "react-router-dom";

const ForgottenPasswordPage = () => {
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();

  return (
    <div className={styles.body}>
      <Login>
        <div className={styles.components}>
          <div className={styles.content}>
            <h1 className={styles.title}>Forgotten Password</h1>
            <div className={styles.log_link}>
              <p>
                We will send a password reset link attached to your existing
                account.
              </p>
            </div>
          </div>
          <form>
            <div className={styles.form}>
              <div className={styles.input}>
                <span>Your Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Gldcart@mail.com"
                />
              </div>
            </div>
          </form>
          <Link
            to="/forgotten-attention"
            onClick={() => {
              dispatch(setEmailValue(email));
            }}
            className={styles.button}
          >
            Send Link
          </Link>
        </div>
      </Login>
    </div>
  );
};

export default ForgottenPasswordPage;
