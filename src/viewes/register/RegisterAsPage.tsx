import {FC, useState} from "react";
import BgWithParticles from "@/components/bg-with-particles/BgWithParticles.tsx";
import styles from "./RegisterAsPage.module.scss";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import RegisterPage from "@/viewes/register/register-form/RegisterPage.tsx";

const RegisterAsPage: FC = () => {
  useDefaultScrollPosition();
  const [userType, setUserType] = useState("");

  return (
    <div className={styles.container}>
      <BgWithParticles>
        {userType ? <RegisterPage userType={userType}/> : <div className={styles.body}>
          <h1 className={styles.title}>Register As A</h1>
          <p className={styles.text}>
            Join our platform and showcase your products and Services to a wide
            audience. Register now and embark on a journey of growth and
            success.
          </p>
          <button
            onClick={() => setUserType('Buyer')}
            className={styles.button_green}
          >
            Buyer
          </button>
          <button
            onClick={() => setUserType('Vendor')}
            className={styles.button_blue}
          >
            Vendor
          </button>
        </div>}
      </BgWithParticles>
    </div>
  );
};

export default RegisterAsPage;
