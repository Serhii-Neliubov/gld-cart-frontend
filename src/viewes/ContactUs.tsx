import React from 'react';
import { FC } from 'react';
import Footer from '@/components/footer/Footer.tsx';
import {Link, useNavigate} from 'react-router-dom';
import useDefaultScrollPosition from '@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx';
import { ContactUsService } from 'services/ContactUsService.ts';
import { useForm, SubmitHandler } from "react-hook-form"

import imageContactUs1 from "@/assets/images/contact-us/icon1.svg";
import imageContactUs2 from "@/assets/images/contact-us/icon2.svg";
import imageContactUs3 from "@/assets/images/contact-us/icon3.svg";
import imageSocialIcon1 from "@/assets/images/contact-us/social1.png";
import imageSocialIcon2 from "@/assets/images/contact-us/social2.png";
import imageSocialIcon3 from "@/assets/images/contact-us/social3.png";
import toast from "react-hot-toast";
import {t} from "i18next";

interface IFormData {
  name: string,
  email: string,
  subject: string,
  message: string
}

const ContactUs: FC = () => {
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
    <>
      <div className={'bg-[#ecf2f7]'}>
        <div className={'mx-auto max-w-[1240px] drop-shadow-2xl pb-[50px] px-[20px]'}>
          <div className={'flex flex-col justify-center items-center text-center'}>
            <h1 className={'sm:text-[44px] min-[470px]:text-[35px] text-[22px] text-center font-poppins font-light mb-[15px] sm:mb-[30px]'}>{t('Keep In Touch with Us')}</h1>
            <div className={'flex mb-[25px] sm:mb-[50px] items-center gap-[20px] after:absolute after:w-[8px] after:h-[8px] after:top-[50%] after:translate-y-[-50%] after:rounded-full relative after:left-[43%] after:translate-x-[-50%] after:bg-[#A8ACB0]'}>
              <Link to={'/'} className={'text-[#55585B] hover:underline'}>{t('Home')}</Link>
              <span className={'text-[#55585B]'}>{t('Contact')}</span>
            </div>
          </div>
          <div className={'flex flex-wrap md:flex-nowrap gap-10 justify-between items-center bg-white py-[25px] md:py-[50px] px-[30px] md:px-[60px]'}>
            <form className={'w-full'} onSubmit={handleSubmit(onSubmit)}>
              <div className={'max-w-[720px]'}>
                <h2 className={'md:text-[30px] text-[20px] mb-[42px] font-medium'}>{t('Sent A Message')}</h2>
                <div className={'flex flex-col gap-10'}>
                  <label className={'flex flex-col relative'}>
                    <span className={'ml-[27px] absolute top-[-8px] bg-white left-0'}>{t('Your Name')}</span>
                    <input
                      {...register("name", {required: true})}
                      type="text"
                      placeholder='Cameron Williamson'
                      className={'py-[18px] outline-none px-[27px] border-solid border-[#E0E2E3] border-[1px]'}
                    />
                  </label>
                  <label className={'flex flex-col relative'}>
                    <span className={'ml-[27px] absolute top-[-8px] bg-white left-0'}>{t('Your Email')}</span>
                    <input
                      {...register("email", {required: true})}
                      type="text"
                      placeholder='Gldcart@mail.com'
                      className={'py-[18px] outline-none px-[27px] border-solid border-[#E0E2E3] border-[1px]'}
                    />
                  </label>
                  <label className={'flex flex-col relative'}>
                    <span className={'ml-[27px] absolute top-[-8px] bg-white left-0'}>{t('Subject')}</span>
                    <input
                      {...register("subject", {required: true})}
                      type="text"
                      placeholder='Write your subject'
                      className={'py-[18px] outline-none px-[27px] border-solid border-[#E0E2E3] border-[1px]'}
                    />
                  </label>
                  <label className={'flex flex-col relative'}>
                    <span className={'ml-[27px] absolute top-[-8px] bg-white left-0'}>{t('Your Message')}</span>
                    <textarea
                      {...register("message", {required: true})}
                      className={'py-[25px] min-h-[165px] outline-none px-[27px] border-solid border-[#E0E2E3] border-[1px]'}
                    />
                  </label>
                </div>
                <div className={'flex gap-2 items-center my-[15px]'}>
                  <input className={'w-[20px] text-[#55585B] h-[20px]'} type="checkbox"/>
                  <span className={'text-[#55585B]'}>
                  {t(`Save my name, email, and website in this browser for the next
                    time I comment.`)}
                </span>
                </div>
                <button className={'text-white hover:bg-[#021B32] transition-all bg-black w-full md:max-w-[200px] py-[15px] text-[16px]'}>
                  {t('Send Message')}
                </button>
              </div>
            </form>
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
