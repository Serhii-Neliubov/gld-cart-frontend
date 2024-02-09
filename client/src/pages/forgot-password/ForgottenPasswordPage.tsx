import { FC, useState } from "react";
import styles from "./ForgottenPasswordPage.module.scss";
import BgWithParticles from "../../components/BgWithParticles/BgWithParticles.tsx";
import { useDispatch } from "react-redux";
import { setEmailValue } from "../../redux/slices/resetPasswordEmailSlice";
import { AppDispatch } from "../../redux/store";
import axios from "axios";
import { API_URL } from "../../lib/http.ts";
import { useNavigate } from "react-router-dom";

const ForgottenPasswordPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  async function sendEmailHandler() {
    try {
      await axios.post(`${API_URL}/password/initiate`, {
        email,
      });
      navigate('/login');
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/forgotten-attention");
    }
  }

  return (
    <div className={styles.body}>
      <BgWithParticles>
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
            onClick={async () => {
              dispatch(setEmailValue(email));
              await sendEmailHandler();
            }}
            className={styles.button}
          >
            Send Link
          </button>
        </div>
      </BgWithParticles>
    </div>
  );
};

export default ForgottenPasswordPage;
