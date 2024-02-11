import { FC, useState } from "react";
import styles from "./NewPasswordPage.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import BgWithParticles from "../../../components/BgWithParticles/BgWithParticles.tsx";
import {PasswordServices} from "../../../services/PasswordServices.ts";
import toast from "react-hot-toast";

const NewPasswordPage: FC = () => {
  const [password, setPassword] = useState<string>("");
  const { token } = useParams();
  const navigate = useNavigate();

  async function sendNewPasswordHandler() {
    try {
      await PasswordServices.sendResetPassword(password, token);
      toast.success("Password changed successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occurred while changing the password");
    }
  }

  return (
    <div className={styles.body}>
      <BgWithParticles>
        <div className={styles.components}>
          <div className={styles.content}>
            <h1 className={styles.title}>New password</h1>
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
                <span>New password</span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="password"
                />
              </div>
            </div>
          </form>
          <button onClick={sendNewPasswordHandler} className={styles.button}>
            Set a password
          </button>
        </div>
      </BgWithParticles>
    </div>
  );
};

export default NewPasswordPage;
