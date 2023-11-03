import { FC, useState } from "react";
import styles from "./NewPasswordPage.module.scss";
import Login from "../../components/UI/Login";

const NewPasswordPage: FC = () => {
  const [password, setPassword] = useState<string>("");

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
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
          </form>
          <button className={styles.button}>Set a password</button>
        </div>
      </Login>
    </div>
  );
};

export default NewPasswordPage;
