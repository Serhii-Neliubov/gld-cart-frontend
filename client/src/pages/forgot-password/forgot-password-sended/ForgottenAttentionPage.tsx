import { FC } from "react";
import styles from "../ForgottenPasswordPage.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BgWithParticles from "../../../components/BgWithParticles/BgWithParticles.tsx";
import { RootState } from "../../../redux/store";

const ForgottenAttentionPage: FC = () => {
  const email: string = useSelector((state: RootState) => state.setEmail.value);

  return (
    <div className={styles.body}>
      <BgWithParticles>
        <div className={styles.components}>
          <div className={styles.content}>
            <h1 className={styles.title}>Password Reset Email Sent</h1>
            <div className={styles.log_link}>
              <p>
                If <span>{email}</span> is associated with an existing account
                you will receive an email with instructions on resetting your
                password.
              </p>
            </div>
          </div>

          <Link to="/login" className={styles.button}>
            Login
          </Link>
        </div>
      </BgWithParticles>
    </div>
  );
};

export default ForgottenAttentionPage;
