import { FC, useEffect } from "react";
import Login from "../../components/Login/Login.tsx";
import styles from "./RegisterAsPage.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFalse, setTrue } from "../../redux/slices/isvendorSlice";
import { AppDispatch } from "../../redux/store";

const RegisterAsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <Login>
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
      </Login>
    </div>
  );
};

export default RegisterAsPage;
