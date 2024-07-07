import React, {useState} from "react";
import {Link} from "react-router-dom";
import {t} from "i18next";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";

import { AppDispatch } from "@/store/store.ts";
import { login } from "@/store/slices/userDataSlice.ts";

import AuthService from "services/AuthService.ts";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import { useInput } from "@/hooks/useInput/useInput.tsx";

import googleIcon from "@/assets/images/google-icon.svg";
import decorImg1 from "@/assets/images/Login/decor1.png";
import decorImg2 from "@/assets/images/Login/decor2.png";
import decorImg3 from "@/assets/images/Login/decor3.png";

const Login = () => {
  useDefaultScrollPosition();

  const dispatch = useDispatch<AppDispatch>();
  const [isRemember, setIsRemember] = useState(false);

  const email = useInput('');
  const password = useInput('');

  const handleLogin = () => {
    if(!email.value || !password.value){
     return toast.error('Email and password are required');
    }

    if(email.value.length < 6 || password.value.length < 6){
      return toast.error('Password must be at least 6 characters');
    }

    dispatch(login({ email: email.value, password: password.value, isRemember }));
  }

  return (
    <div className={'max-w-[1240px] relative mx-auto px-[20px] py-[140px] flex justify-center items-center'}>
      <div className={'w-[590px] z-10 relative flex flex-col items-center justify-center h-fit bg-white sm:drop-shadow-2xl py-[30px] px-[35px] sm:py-[60px] sm:px-[70px]'}>
        <h1 className={'text-center mb-[10px] mt-0 text-[26px] sm:text-[30px] font-medium'}>{t('Login to')} Gldcart</h1>
        <div className={'flex flex-wrap justify-center gap-2 items-center'}>
          <p className={'text-[#49535B]'}>{t('Don’t have an account?')}</p>
          <Link to="/register" className={'text-[#0989FF] hover:underline'}>{t('Create a free account')}</Link>
        </div>
        <a href={AuthService.getGoogleOAuthURL()}
           className={'cursor-pointer mt-[20px] sm:mt-[30px] px-[8px] flex gap-4 items-center border-solid w-fit border-[#DADCE0] hover:bg-gray-100 transition-all rounded py-[10px] justify-center border-2'}>
          <img src={googleIcon} alt={'Google icon'}/>
          <span className={'text-[#3C4043] sm:text-[16px] text-[14px]'}>
            {t('Sign up with google')}
          </span>
        </a>
        <div
          className={'after:absolute after:hidden min-[370px]:after:block flex justify-center w-full mt-[20px] sm:mt-[30px] relative after:w-full after:h-[1px] after:bg-gray-600 after:top-[60%] after:translate-y-[-50%] after:left-0'}>
          <div
            className={'text-[#49535B] relative z-10 w-fit px-[5px] text-center bg-white'}>{t('or Sign up with Email')}</div>
        </div>
        <div className={'mt-[40px] flex flex-col gap-[30px] w-full'}>
          <label className={'flex flex-col relative'}>
            <span className={'ml-[27px] absolute top-[-8px] bg-white left-0'}>{t('Your Email')}</span>
            <input
              {...email}
              type="email"
              required={true}
              placeholder='Gldcart@mail.com'
              className={'py-[18px] text-[14px] outline-none px-[27px] border-solid border-[#E0E2E3] border-[1px]'}
            />
          </label>
          <label className={'flex flex-col relative'}>
            <span className={'ml-[27px] absolute top-[-8px] bg-white left-0'}>{t('Password')}</span>
            <input
              {...password}
              type="password"
              required={true}
              placeholder={t('Min. 6 character')}
              className={'py-[18px] text-[14px] outline-none px-[27px] border-solid border-[#E0E2E3] border-[1px]'}
            />
          </label>
        </div>
        <div className={'flex flex-wrap gap-2 justify-between items-center w-full mt-[15px]'}>
          <div className={'flex gap-2 items-center'}>
            <input onChange={() => setIsRemember(prev => !prev)} className={'w-[20px] text-[#55585B] h-[20px]'}
                   type="checkbox"/>
            <span className={'text-[#55585B]'}>
                  {t(`Remember me`)}
          </span>
          </div>
          <Link to="/forgot-password" className={'text-[#0989FF] hover:underline'}>{t('Forgot Password?')}</Link>
        </div>
        <button onClick={handleLogin}
                className={'text-white bg-[#02A0A0] py-[13px] w-full mt-[20px]'}>{t('Login')}</button>
      </div>

      <img src={decorImg1} alt={'Login particle image'} className={'absolute hidden md:block bottom-[280px] left-0'}/>
      <img src={decorImg2} alt={'Login particle image'} className={'absolute hidden md:block top-[140px] right-0'}/>
      <img src={decorImg3} alt={'Login particle image'} className={'absolute top-[140px] left-[-200px]'}/>
    </div>
  );
};

export default Login;
