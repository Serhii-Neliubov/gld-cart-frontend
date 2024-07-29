import React, { useState } from "react";
import toast from "react-hot-toast";
import {t} from "i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import { useInput } from "@/hooks/useInput/useInput.tsx";

import { AppDispatch } from "@/store/store.ts";
import { register } from "@/store/slices/userDataSlice.ts";

import AuthService from "services/AuthService.ts";

import googleIcon from "@/assets/images/google-icon.svg";
import decorImg1 from "@/assets/images/Login/decor1.png";
import decorImg2 from "@/assets/images/Login/decor2.png";
import decorImg3 from "@/assets/images/Login/decor3.png";
import UiInput from "@/components/UiInput.tsx";

const Registration = () => {
  useDefaultScrollPosition();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [userType, setUserType] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [errorFields, setErrorFields] = useState<string[]>([]);

  const name = useInput('');
  const surname = useInput('');
  const email = useInput('');
  const password = useInput('');
  const rePassword = useInput('');

  function sendFormHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if(password.value !== rePassword.value) {
      return toast.error('Passwords do not match');
    }

    const body = {
      role: userType,
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
      rePassword: rePassword.value,
    };

    const errors = validate(body);

    if (errors.length > 0) {
      setErrorFields(errors);
      return;
    }

    try {
      dispatch(register({...body, isRemember}));
      navigate('/');
    } catch (error) {
      toast.error('Error with registration');
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
    <div className={'max-w-[1240px] relative mx-auto px-[20px] py-[70px] sm:py-[140px] flex justify-center items-center'}>
        {userType
          ? <div className={'w-[590px] z-10 relative flex flex-col items-center justify-center h-fit bg-white sm:drop-shadow-2xl py-[30px] px-[35px] sm:py-[60px] sm:px-[70px]'}>
              <h1
                className={'text-center mb-[10px] mt-0 text-[26px] sm:text-[30px] font-medium'}>{t('Sign up to ')}Gldcart</h1>
              <div className={'flex flex-wrap justify-center gap-2 items-center'}>
                <p className={'text-[#49535B]'}>{t('Already have an account?')}</p>
                <Link to="/login" className={'text-[#0989FF] hover:underline'}>{t('Log in')}</Link>
              </div>
              <a href={AuthService.getGoogleOAuthURL(userType)}
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
              <div className={'mt-[40px] flex flex-col gap-[25px] w-full'}>
                <div className={'flex gap-7 sm:gap-4 flex-wrap sm:flex-nowrap'}>
                  <UiInput placeholder={'ex:John'} subject={'First Name'} errorFields={errorFields} inputValue={name} name={'name'} />
                  <UiInput placeholder={'ex:Miller'} subject={'Last Name'} errorFields={errorFields} inputValue={surname} name={'surname'} />
                </div>
                <UiInput placeholder={'Gldcart@mail.com'} subject={'Your Email'} errorFields={errorFields} inputValue={email} name={'email'} />
                <UiInput placeholder={'Min. 6 character'} type={'password'} subject={'Password'} errorFields={errorFields} inputValue={password} name={'password'} />
                <UiInput placeholder={'Min. 6 character'} type={'password'} subject={'Re-Password'} errorFields={errorFields} inputValue={rePassword} name={'rePassword'} />
              </div>
              <div className={'flex flex-wrap gap-2 justify-between items-center w-full mt-[15px]'}>
                <div className={'flex gap-2 items-center'}>
                  <input onChange={() => setIsRemember(prev => !prev)} className={'w-[20px] text-[#55585B] h-[20px]'} type="checkbox" />
                  <span className={'text-[#55585B]'}>
                    {t(`Remember me`)}
                  </span>
                </div>
              </div>
              <button onClick={event => sendFormHandler(event)} className={'text-white bg-[#02A0A0] py-[13px] w-full mt-[20px]'}>{t('Create my account')}</button>
            </div>
          : <div className={'w-[590px] sm:border-[1px] border-solid border-[#E0E2E3] z-10 relative flex flex-col items-center justify-center h-fit bg-white sm:drop-shadow-2xl py-[30px] px-[35px] sm:py-[60px] sm:px-[70px]'}>
            <h1 className={'text-[30px] mb-[30px] mt-[20px] font-medium'}>{t('Register As A')}</h1>
            <div className={'max-w-[388px]'}>
              <p className={'text-[14px] text-center'}>
                {t(`Join our platform and showcase your products and Services to a wide
                audience. Register now and embark on a journey of growth and
                success.`)}
              </p>
            </div>
            <div className={'flex flex-col items-center w-full gap-8 mt-[85px]'}>
              <button
                onClick={() => setUserType('Vendor')}
                className={'py-[16px] hover:bg-[#009191] transition-all bg-[#02A0A0] max-w-[345px] text-white w-full rounded-[12px] text-[24px] font-bold'}
              >
                {t('Vendor')}
              </button>
              <button
                onClick={() => setUserType('Buyer')}
                className={'py-[16px] hover:bg-[#1C70BC] transition-all bg-[#2283DC] max-w-[345px] text-white w-full rounded-[12px] text-[24px] font-bold'}
              >
                {t('Buyer')}
              </button>
            </div>
          </div>
        }

        <img src={decorImg1} alt={'Login particle image'}
             className={'absolute hidden md:block bottom-[280px] left-0'}/>
        <img src={decorImg2} alt={'Login particle image'}
             className={'absolute hidden md:block top-[140px] right-0'}/>
        <img src={decorImg3} alt={'Login particle image'} className={'absolute top-[140px] left-[-200px]'}/>
      </div>
  );
};

export default Registration;
