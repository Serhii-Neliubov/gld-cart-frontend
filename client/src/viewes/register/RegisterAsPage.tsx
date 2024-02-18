import { FC } from "react";
import BgWithParticles from "@/components/bg-with-particles/BgWithParticles.tsx";
import styles from "./RegisterAsPage.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFalse, setTrue } from "@/store/slices/isvendorSlice.ts";
import { AppDispatch } from "@/store/store.ts";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const RegisterAsPage: FC = () => {
  useDefaultScrollPosition();

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.container}>
      <BgWithParticles>
        <div className={styles.body}>
          <h1 className={styles.title}>Register As A</h1>
          <p className={styles.text}>
            Join our platform and showcase your products and Services to a wide
            audience. Register now and embark on a journey of growth and
            success.
          </p>
          <Link
            onClick={() => dispatch(setFalse())}
            to="/register-page"
            className={styles.button_green}
          >
            Buyer
          </Link>
          <Link
            onClick={() => dispatch(setTrue())}
            to="/register-page"
            className={styles.button_blue}
          >
            Vendor
          </Link>
        </div>
      </BgWithParticles>
    </div>
  );
};

export default RegisterAsPage;
