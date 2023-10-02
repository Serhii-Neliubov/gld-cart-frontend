import { useEffect } from "react";
import Login from "../../components/UI/Login";
import styles from "./RegisterAsPage.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFalse, setTrue } from "../../redux/Slices/isvendorSlice";

const RegisterAsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Login>
      <div className={styles.body}>
        <h1 className={styles.title}>Register As A</h1>
        <p className={styles.text}>
          Join our platform and showcase your products and Services to a wide
          audience. Register now and embark on a journey of growth and success.
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
  );
};

export default RegisterAsPage;
