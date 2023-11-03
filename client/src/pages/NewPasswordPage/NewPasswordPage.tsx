import { FC, useState } from "react";
import styles from "./NewPasswordPage.module.scss";
import Login from "../../components/UI/Login";
import axios from "axios";
import { API_URL } from "../../http";
import { useParams } from "react-router-dom";

const NewPasswordPage: FC = () => {
  const [password, setPassword] = useState<string>("");
  const { token } = useParams();

  async function sendNewPasswordHandler() {
    console.log(password);
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, {
        newPassword: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.body}>
      <Login>
        <div className={styles.components}>
          <div className={styles.content}>
            <h1 className={styles.title}>New password</h1>
            <div className={styles.log_link}>
              <p>...</p>
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
      </Login>
    </div>
  );
};

export default NewPasswordPage;
