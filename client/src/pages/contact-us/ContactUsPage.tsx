import React, {useState} from 'react';
import { FC, FormEvent } from "react";
import styles from "./ContactUsPage.module.scss";
import Footer from "../../components/Footer/Footer.tsx";
import { useNavigate } from "react-router-dom";
import {ContactUsServices} from "../../services/ContactUsServices.ts";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import {useInput} from "../../hooks/useInput/useInput.tsx";

const ContactUsPage: FC = () => {
  useDefaultScrollPosition();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const name = useInput('');
  const email = useInput('');
  const subject = useInput('');
  const [message, setMessage] = useState('');

  async function sendMessageHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await ContactUsServices.sendMessage({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message,
        token: token,
      });

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
              <div className={styles.inputs}>
                <div className={styles.input}>
                  <span>Your Name</span>
                  <input
                    value={name.value}
                    onChange={name.onChange}
                    type="text"
                    placeholder='Cameron Williamson'
                  />
                </div>
                <div className={styles.input}>
                  <span>Your Email</span>
                  <input
                    value={email.value}
                    onChange={email.onChange}
                    type="text"
                    placeholder='Gldcart@gmail.com'
                  />
                </div>
                <div className={styles.input}>
                  <span>Your Subject</span>
                  <input
                    value={subject.value}
                    onChange={subject.onChange}
                    type="text"
                    placeholder='Write your subject'
                  />
                </div>
                <div className={styles.textarea}>
                  <span>Your Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
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
                <img src="/contact-us/icon1.svg" alt="Icon"/>
                <p>contact@Gldcard.com</p>
                <span>(406) 555-0120</span>
              </div>
              <div className={styles.contacts_item}>
                <img src="/contact-us/icon2.svg" alt="Icon"/>
                <span>6391 Elgin St. Celina, Delaware 10299</span>
              </div>
              <div className={styles.contacts_item}>
                <img src="/contact-us/icon3.svg" alt="Icon"/>
                <span style={{margin: "12px 0"}}>Find on social media</span>
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
