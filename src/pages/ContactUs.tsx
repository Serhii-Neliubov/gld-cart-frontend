import React, {useState} from 'react';
import {t} from "i18next";
import {Link, useNavigate} from 'react-router-dom';

import {useInput} from "@/hooks/useInput/useInput.tsx";
import useDefaultScrollPosition from '@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx';

import UiInput from "@/components/UiInput.tsx";
import UiTextarea from "@/components/UiTextarea.tsx";
import Footer from '@/components/Footer.tsx';

import imageContactUs1 from "@/assets/images/contact-us/icon1.svg";
import imageContactUs2 from "@/assets/images/contact-us/icon2.svg";
import imageContactUs3 from "@/assets/images/contact-us/icon3.svg";
import imageSocialIcon1 from "@/assets/images/contact-us/social1.png";
import imageSocialIcon2 from "@/assets/images/contact-us/social2.png";
import imageSocialIcon3 from "@/assets/images/contact-us/social3.png";
import $api from "@/utils/interceptors.ts";

const ContactUs = () => {
  useDefaultScrollPosition();

  const [errorFields, setErrorFields] = useState<string[]>([]);

  const name = useInput('');
  const email = useInput('');
  const subject = useInput('');
  const message = useInput('');

  const navigate = useNavigate();

  async function sendMessageHandler() {
    const body = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }

    const errors = validate(body);

    if (errors.length > 0) {
      setErrorFields(errors);
      return;
    }

    try {
      await $api.post('/contact/email', message);

      navigate("/send-message");
    } catch (error) {
      console.log(error);
    }
  }

  const validate = (object: { [key: string]: string }) => {
    const errors: string[] = [];
    const bodyKeys: string[] = Object.keys(object);

    bodyKeys.forEach((field) => {
      if (!object[field].length) {
        errors.push(field);
      }
    });

    return errors;
  }

  return (
    <>
      <div className={'bg-[#ecf2f7]'}>
        <div className={'mx-auto max-w-[1240px] drop-shadow-2xl pb-[50px] px-[20px]'}>
          <div className={'flex flex-col justify-center items-center text-center'}>
            <h1 className={'sm:text-[44px] mt-[25px] min-[470px]:text-[35px] text-[22px] text-center font-poppins font-light mb-[15px] sm:mb-[30px]'}>{t('Keep In Touch with Us')}</h1>
            <div className={'flex mb-[25px] sm:mb-[50px] items-center gap-[20px] after:absolute after:w-[8px] after:h-[8px] after:top-[50%] after:translate-y-[-50%] after:rounded-full relative after:left-[43%] after:translate-x-[-50%] after:bg-[#A8ACB0]'}>
              <Link to={'/'} className={'text-[#55585B] hover:underline'}>{t('Home')}</Link>
              <span className={'text-[#55585B]'}>{t('Contact')}</span>
            </div>
          </div>
          <div className={'flex flex-wrap md:flex-nowrap gap-10 justify-between items-center bg-white py-[25px] md:py-[50px] px-[30px] md:px-[60px]'}>
            <div className={'w-full'}>
              <div className={'max-w-[720px]'}>
                <h2 className={'md:text-[30px] text-[20px] mb-[42px] font-medium'}>{t('Sent A Message')}</h2>
                <div className={'flex flex-col gap-6'}>
                  <UiInput placeholder={'Cameron Williamson'} subject={'Your Name'} errorFields={errorFields} inputValue={name} name={'name'} />
                  <UiInput placeholder={'Gldcart@mail.com'} subject={'Your Email'} errorFields={errorFields} inputValue={email} name={'email'} />
                  <UiInput placeholder={'Write your subject'} subject={'Subject'} errorFields={errorFields} inputValue={subject} name={'subject'} />
                  <UiTextarea placeholder={''} subject={'Your Message'} errorFields={errorFields} textareaValue={message} name={'message'} />
                </div>
                <div className={'flex gap-2 items-center my-[15px]'}>
                  <input className={'w-[20px] text-[#55585B] h-[20px]'} type="checkbox"/>
                  <span className={'text-[#55585B]'}>
                  {t(`Save my name, email, and website in this browser for the next
                    time I comment.`)}
                </span>
                </div>
                <button onClick={sendMessageHandler} className={'text-white hover:bg-[#021B32] transition-all bg-black w-full md:max-w-[200px] py-[15px] text-[16px]'}>
                  {t('Send Message')}
                </button>
              </div>
            </div>
            <div className={'flex flex-col gap-10 w-full md:max-w-[205px]'}>
              <div className={'text-center lg:text-left flex justify-center md:items-start items-center flex-col gap-2'}>
                <img className={'w-[40px]'} src={imageContactUs1} alt="Icon"/>
                <a href={'mailto:contact@Gldcard.com'}>contact@Gldcard.com</a>
                <a href={'tel:4065550120'}>(406) 555-0120</a>
              </div>
              <div className={'text-center lg:text-left flex justify-center md:items-start items-center flex-col gap-2'}>
                <img className={'w-[40px]'} src={imageContactUs2} alt="Icon"/>
                <span className={'text-left'}>{t('6391 Elgin St. Celina, Delaware 10299')}</span>
              </div>
              <div className={'text-center lg:text-left flex justify-center md:items-start items-center flex-col gap-4'}>
                <img className={'w-[40px]'} src={imageContactUs3} alt="Icon"/>
                <span>{t('Find on social media')}</span>
                <div className={'flex md:gap-0 gap-2'}>
                  <a href="#" className={'w-[38px] h-[38px] flex justify-center items-center border-[1px] border-solid border-[#E6E7E8]'}>
                    <img src={imageSocialIcon1} alt='Social image'/>
                  </a>
                  <a href="#" className={'w-[38px] h-[38px] flex justify-center items-center border-[1px] border-solid border-[#E6E7E8]'}>
                    <img src={imageSocialIcon2} alt='Social image'/>
                  </a>
                  <a href="#" className={'w-[38px] h-[38px] flex justify-center items-center border-[1px] border-solid border-[#E6E7E8]'}>
                    <img src={imageSocialIcon3} alt='Social image'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
