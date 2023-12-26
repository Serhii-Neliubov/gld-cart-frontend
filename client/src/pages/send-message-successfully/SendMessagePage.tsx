import { Link } from "react-router-dom";
import styles from "./SendMessagePage.module.scss";
import { FC, useEffect } from "react";
import Login from "../../components/Login/Login.tsx";

const SendMessagePage: FC = () => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Login>
      <div className={styles.body}>
        <img src="send-message/tick.png" className={styles.image} />
        <h1 className={styles.title}>Your Message Send Successfully !</h1>
        <Link className={styles.button} to="/">
          Continue
        </Link>
      </div>
    </Login>
  );
};

export default SendMessagePage;
