import Login from "../components/UI/Login";
import styles from "./RegisterAsPage.module.scss";
import { Link } from "react-router-dom";

interface RegisterAsPageProps {
  setIsVendorType: (state: boolean) => void;
}

const RegisterAsPage = ({ setIsVendorType }: RegisterAsPageProps) => {
  return (
    <Login>
      <div className={styles.body}>
        <h1 className={styles.title}>Register As A</h1>
        <p className={styles.text}>
          Join our platform and showcase your products and Services to a wide
          audience. Register now and embark on a journey of growth and success.
        </p>
        <Link
          onClick={() => setIsVendorType(false)}
          to="/register-page"
          className={styles.button_green}
        >
          Buyer
        </Link>
        <Link
          onClick={() => setIsVendorType(true)}
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
