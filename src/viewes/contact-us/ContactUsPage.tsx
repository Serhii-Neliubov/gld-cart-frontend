import React from 'react';
import { FC } from 'react';
import styles from './ContactUsPage.module.scss';
import Footer from '@/components/footer/Footer.tsx';
import { useNavigate } from 'react-router-dom';
import useDefaultScrollPosition from '@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx';
import { ContactUsService } from '@/services/ContactUsService.ts';
import { useForm, SubmitHandler } from "react-hook-form"

import imageContactUs1 from "@/assets/images/contact-us/icon1.svg";
import imageContactUs2 from "@/assets/images/contact-us/icon2.svg";
import imageContactUs3 from "@/assets/images/contact-us/icon3.svg";
import imageSocialIcon1 from "@/assets/images/contact-us/social1.png";
import imageSocialIcon2 from "@/assets/images/contact-us/social2.png";
import imageSocialIcon3 from "@/assets/images/contact-us/social3.png";
import toast from "react-hot-toast";

interface IFormData {
  name: string,
  email: string,
  subject: string,
  message: string
}

const ContactUsPage: FC = () => {
  useDefaultScrollPosition();
  const { register, formState: { errors }, handleSubmit } = useForm<IFormData>()
  const onSubmit: SubmitHandler<IFormData> = (data) => sendMessageHandler(data)

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  async function sendMessageHandler(data: IFormData) {
    try {
      await ContactUsService.sendMessage({...data, token});
      navigate("/send-message");
    } catch (error) {
      console.log(error);
    }
  }

  if(errors){
    const fieldError = Object.keys(errors)[0];
    fieldError && toast.error(`${fieldError} is required`);
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
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <h2 className={styles.content_title}>Sent A Message</h2>
              <div className={styles.inputs}>
                <label className={styles.input}>
                  <span>Your Name</span>
                  <input
                    {...register("name", {required: true})}
                    type="text"
                    placeholder='Cameron Williamson'
                  />
                </label>
                <label className={styles.input}>
                  <span>Your Email</span>
                  <input
                    {...register("email", {required: true})}
                    type="text"
                    placeholder='Gldcart@gmail.com'
                  />
                </label>
                <label className={styles.input}>
                  <span>Your Subject</span>
                  <input
                    {...register("subject", {required: true})}
                    type="text"
                    placeholder='Write your subject'
                  />
                </label>
                <label className={styles.textarea}>
                  <span>Your Message</span>
                  <textarea
                    {...register("message", {required: true})}
                  />
                </label>
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
                <img src={imageContactUs1} alt="Icon"/>
                <p>contact@Gldcard.com</p>
                <span>(406) 555-0120</span>
              </div>
              <div className={styles.contacts_item}>
                <img src={imageContactUs2} alt="Icon"/>
                <span>6391 Elgin St. Celina, Delaware 10299</span>
              </div>
              <div className={styles.contacts_item}>
                <img src={imageContactUs3} alt="Icon"/>
                <span style={{margin: "12px 0"}}>Find on social media</span>
                <div className={styles.socials}>
                  <a href="#" className={styles.social}>
                    <img src={imageSocialIcon1} alt='Social image'/>
                  </a>
                  <a href="#" className={styles.social}>
                    <img src={imageSocialIcon2} alt='Social image'/>
                  </a>
                  <a href="#" className={styles.social}>
                    <img src={imageSocialIcon3} alt='Social image'/>
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
