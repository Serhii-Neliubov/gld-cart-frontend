import { Link } from "react-router-dom";
import Login from "../components/UI/Login";
import styles from "./SendMessagePage.module.scss";
import { FC } from "react";

const SendMessagePage: FC = () => {
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
