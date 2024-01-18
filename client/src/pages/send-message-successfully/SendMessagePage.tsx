import { Link } from "react-router-dom";
import styles from "./SendMessagePage.module.scss";
import { FC, useEffect } from "react";
import BgWithParticles from "../../components/BgWithParticles/BgWithParticles.tsx";

const SendMessagePage: FC = () => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BgWithParticles>
      <div className={styles.body}>
        <img src="/send-message/tick.png" alt='tick' className={styles.image} />
        <h1 className={styles.title}>Your Message Send Successfully !</h1>
        <Link className={styles.button} to="/">
          Continue
        </Link>
      </div>
    </BgWithParticles>
  );
};

export default SendMessagePage;
