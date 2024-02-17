import { FC, useState } from "react";
import styles from "./ForgottenPasswordPage.module.scss";
import BgWithParticles from "../../components/bg-with-particles/BgWithParticles.tsx";
import { useDispatch } from "react-redux";
import { setEmailValue } from "../../store/slices/resetPasswordEmailSlice";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {PasswordService} from "../../services/PasswordService.ts";

const ForgottenPasswordPage: FC = () => {
  const [email, setEmail] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  async function sendEmailHandler() {
    try {
      await PasswordService.sendResetEmail(email);
      navigate('/login');
    } catch (error) {
      toast.error("An error occurred while sending the email");
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
