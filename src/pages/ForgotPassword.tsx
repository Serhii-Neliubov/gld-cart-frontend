import React, {useState} from "react";
import {t} from "i18next";

import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition.tsx";
import { useInput } from "@/hooks/useInput.tsx";

import UiInput from "@/components/UiInput.tsx";

import decorImg1 from "@/assets/images/Login/decor1.png";
import decorImg2 from "@/assets/images/Login/decor2.png";
import decorImg3 from "@/assets/images/Login/decor3.png";
import {Link} from "react-router-dom";

// TODO: Fix validation and sendLinkHandler

const ForgotPassword = () => {
  useDefaultScrollPosition();

  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [isEmailExist, setIsEmailExist] = useState<boolean>(false);

  const email = useInput('');

  const sendLinkHandler = async () => {
    if(!email.value) {
      setErrorFields(['email']);
      setIsEmailExist(false);
      return;
    }

    setIsEmailExist(true);
    try {
      // functionality to send a password reset link
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={'max-w-[1240px] relative mx-auto px-[20px] py-[140px] flex justify-center items-center'}>
        {!isEmailExist
          ? <div className={'w-[590px] z-10 relative flex flex-col items-center justify-center h-fit bg-white sm:drop-shadow-2xl py-[30px] px-[35px] sm:py-[60px] sm:px-[70px]'}>
            <h1
              className={'text-center mb-[10px] mt-0 text-[20px] sm:text-[30px] font-medium'}>{t('Forgotten Password')}</h1>
            <p
              className={'text-[#49535B] text-[16px] sm:text-[20px] leading-5 text-center'}>{t('We will send a password reset link attached \n' +
              'to your existing account.')}
            </p>
            <div className={'mt-[40px] flex flex-col gap-[25px] w-full'}>
              <UiInput type={'email'} placeholder={'Gldcart@gmail.com'} subject={'Your Email'} errorFields={errorFields}
                       inputValue={email} name={'email'}/>
            </div>
            <button onClick={sendLinkHandler}
                    className={'text-white bg-[#02A0A0] py-[13px] w-full mt-[20px]'}>{t('Send Link')}</button>
          </div>
          : <div className={'w-[590px] z-10 relative flex flex-col items-center justify-center h-fit bg-white sm:drop-shadow-2xl py-[30px] px-[35px] sm:py-[60px] sm:px-[70px]'}>
            <h1
              className={'text-center mb-[10px] mt-0 text-[20px] sm:text-[30px] font-medium'}>{t('Password Reset Email Sent')}</h1>
            <p
              className="text-[#49535B] text-[16px] sm:text-[16px] leading-5 text-center"
              dangerouslySetInnerHTML={{__html: t(`If <span class="font-bold">${email.value}</span> is associated with an existing account you will receive an email with instructions on resetting your password.`)}}
            />
            <Link to={'/login'}
                  className={'text-white text-center bg-[#02A0A0] py-[13px] w-full mt-[20px]'}>{t('Login')}</Link>
          </div>
        }

        <img src={decorImg1} alt={'Login particle image'} className={'absolute hidden md:block bottom-[280px] left-0'}/>
        <img src={decorImg2} alt={'Login particle image'} className={'absolute hidden md:block top-[140px] right-0'}/>
        <img src={decorImg3} alt={'Login particle image'} className={'absolute top-[140px] left-[-200px]'}/>
      </div>
    </>
  );
};

export default ForgotPassword;
