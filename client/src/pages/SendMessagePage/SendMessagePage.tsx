import { Link } from "react-router-dom";
import styles from "./SendMessagePage.module.scss";
import { FC, useEffect } from "react";
import Login from "../../components/UI/Login";

const SendMessagePage: FC = () => {
  useEffect(() => {
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
