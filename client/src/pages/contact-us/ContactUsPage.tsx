import React from 'react';
import { FC, FormEvent, useState } from "react";
import styles from "./ContactUsPage.module.scss";
import Footer from "../../components/Footer/Footer.tsx";
import { useNavigate } from "react-router-dom";
import { IMessageData } from "../../models/IMessageData";
import {ContactInputList}  from "./components/ContactInputList.tsx";
import {ContactUsServices} from "../../services/ContactUsServices.ts";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const ContactUsPage: FC = () => {
  useDefaultScrollPosition();

  const navigate = useNavigate();
  const [messageData, setMessageData] = useState<IMessageData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    value: "",
  });

  async function sendMessageHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await ContactUsServices.sendMessage(messageData);
      navigate("/send-message");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1 className={styles.title}>Keep In Touch with Us</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Contact</span>
          </div>
          <div className={styles.content}>
            <form className={styles.form} onSubmit={sendMessageHandler}>
              <h2 className={styles.content_title}>Sent A Message</h2>
              <ContactInputList messageData={messageData} setMessageData={setMessageData}/>
              <div className={styles.checkbox}>
                <input type="checkbox"/>
                <span>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </div>
              <button className={styles.button}>
                Send Message
              </button>
            </form>
            <div className={styles.contacts}>
              <div className={styles.contacts_item}>
                <img src="/contact-us/icon1.svg" alt="Icon" />
                <p>contact@Gldcard.com</p>
                <span>(406) 555-0120</span>
              </div>
              <div className={styles.contacts_item}>
                <img src="/contact-us/icon2.svg" alt="Icon" />
                <span>6391 Elgin St. Celina, Delaware 10299</span>
              </div>
              <div className={styles.contacts_item}>
                <img src="/contact-us/icon3.svg" alt="Icon" />
                <span style={{ margin: "12px 0" }}>Find on social media</span>
                <div className={styles.socials}>
                  <a href="#" className={styles.social}>
                    <img src="/contact-us/social1.png" alt='Social image'/>
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="/contact-us/social2.png" alt='Social image'/>
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="/contact-us/social3.png" alt='Social image'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ContactUsPage;
