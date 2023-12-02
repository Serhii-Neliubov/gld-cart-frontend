import { FC, useState } from "react";
import styles from "./ForgottenPasswordPage.module.scss";
import Login from "../../components/UI/Login";
import { useDispatch } from "react-redux";
import { setEmailValue } from "../../redux/Slices/resetPasswordEmailSlice";
import { AppDispatch } from "../../redux/store";
import axios from "axios";
import { API_URL } from "../../http";
import { useNavigate } from "react-router-dom";

const ForgottenPasswordPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  async function sendEmailHandler() {
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/forgotten-attention");
    }
  }

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
          <button
            onClick={() => {
              dispatch(setEmailValue(email));
              sendEmailHandler();
            }}
            className={styles.button}
          >
            Send Link
          </button>
        </div>
      </Login>
    </div>
  );
};

export default ForgottenPasswordPage;
