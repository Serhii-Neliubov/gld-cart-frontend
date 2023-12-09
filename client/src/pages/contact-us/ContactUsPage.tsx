import { FC, useEffect, useState } from "react";
import styles from "./ContactUsPage.module.scss";
import Footer from "../../components/UI/Footer";
import axios from "axios";
import { API_URL } from "../../http";
import { AuthResponse } from "../../models/response/AuthResponse";
import { useNavigate } from "react-router-dom";
import { IMessageData } from "../../interfaces/interfaces";

const ContactUsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [messageData, setMessageData] = useState<IMessageData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    token: "",
  });

  async function sendMessageHandler() {
    console.log(messageData);
    try {
      const response = await axios.post(
        `${API_URL}/send-contact-email`,
        messageData
      );
      console.log(response.data);
      navigate("/send-message");
    } catch (error) {
      console.error(error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }
  async function getToken() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      setMessageData((prevMessageData) => ({
        ...prevMessageData,
        token: response.data.accessToken,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect((): void => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) {
      getToken();
    }
  }, []);

  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          {error && (
            <div style={{ color: "red" }}>Error to sending message</div>
          )}
          <h1 className={styles.title}>Keep In Touch with Us</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Contact</span>
          </div>
          <div className={styles.content}>
            <div className={styles.form}>
              <h2 className={styles.content_title}>Sent A Message</h2>
              <div className={styles.inputs}>
                <div className={styles.input}>
                  <span>Your Name</span>
                  <input
                    value={messageData.name}
                    onChange={(e) =>
                      setMessageData({ ...messageData, name: e.target.value })
                    }
                    type="text"
                    placeholder="Cameron Williamson"
                  />
                </div>
                <div className={styles.input}>
                  <span>Your Email</span>
                  <input
                    value={messageData.email}
                    onChange={(e) =>
                      setMessageData({ ...messageData, email: e.target.value })
                    }
                    type="text"
                    placeholder="Gldcart@mail.com"
                  />
                </div>
                <div className={styles.input}>
                  <span>Subject</span>
                  <input
                    value={messageData.subject}
                    onChange={(e) =>
                      setMessageData({
                        ...messageData,
                        subject: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Write your subject"
                  />
                </div>
                <div className={styles.input}>
                  <span>Your Message</span>
                  <textarea
                    value={messageData.message}
                    onChange={(e) =>
                      setMessageData({
                        ...messageData,
                        message: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" />
                <span>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </div>
              <button onClick={sendMessageHandler} className={styles.button}>
                Send Message
              </button>
            </div>
            <div className={styles.contacts}>
              <div className={styles.contacts_item}>
                <img src="contact-us/icon1.svg" alt="Icon" />
                <p>contact@Gldcard.com</p>
                <span>(406) 555-0120</span>
              </div>
              <div className={styles.contacts_item}>
                <img src="contact-us/icon2.svg" alt="Icon" />
                <span>6391 Elgin St. Celina, Delaware 10299</span>
              </div>
              <div className={styles.contacts_item}>
                <img src="contact-us/icon3.svg" alt="Icon" />
                <span style={{ margin: "12px 0" }}>Find on social media</span>
                <div className={styles.socials}>
                  <a href="#" className={styles.social}>
                    <img src="contact-us/social1.png" />
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="contact-us/social2.png" />
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="contact-us/social3.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
