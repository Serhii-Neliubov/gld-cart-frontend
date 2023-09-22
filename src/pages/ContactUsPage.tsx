import { FC } from "react";
import Header from "../components/UI/Header";
import Label from "../components/Home/HomeElements/Label";
import Footer from "../components/UI/Footer";
import styles from "./ContactUsPage.module.scss";

const ContactUsPage: FC = () => {
  return (
    <>
      <Header />
      <Label />
      <div className={styles.body}>
        <div className="__container">
          <h1 className={styles.title}>Keep In Touch with Us</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Contact</span>
          </div>
          <div className={styles.content}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
