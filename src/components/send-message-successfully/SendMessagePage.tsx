import { Link } from "react-router-dom";
import styles from "./SendMessagePage.module.scss";
import BgWithParticles from "@components/bg-with-particles/BgWithParticles.tsx";
import useDefaultScrollPosition from "@hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

import imageTick from "@assets/images/send-message/tick.png";

const SendMessagePage = () => {
  useDefaultScrollPosition();

  return (
    <BgWithParticles>
      <div className={styles.body}>
        <img src={imageTick} alt='tick' className={styles.image} />
        <h1 className={styles.title}>Your Message Send Successfully !</h1>
        <Link className={styles.button} to="/">
          Continue
        </Link>
      </div>
    </BgWithParticles>
  );
};

export default SendMessagePage;
