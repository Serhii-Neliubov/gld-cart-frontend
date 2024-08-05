import React, {useState} from "react";
import {t} from "i18next";
import {useNavigate} from "react-router-dom";

import useDefaultScrollPosition from "hooks/useDefaultScrollPosition.tsx";
import { useInput } from "hooks/useInput.tsx";

import {validate} from "utils/validate.ts";

import UiInput from "components/ui/UiInput.tsx";

import decorImg1 from "assets/images/Login/decor1.png";
import decorImg2 from "assets/images/Login/decor2.png";
import decorImg3 from "assets/images/Login/decor3.png";

const NewPassword = () => {
  useDefaultScrollPosition();

  const navigate = useNavigate();

  const [errorFields, setErrorFields] = useState<string[]>([]);

  const password = useInput('');
  const confirmPassword = useInput('');

  const newPasswordHandler = async () => {
    if(password.value !== confirmPassword.value) {
      setErrorFields(['password', 'confirmPassword']);
      return;
    }

    if(password.value.length < 6 || confirmPassword.value.length < 6) {
      setErrorFields(['password', 'confirmPassword']);
      return;
    }

    const body = {
      password: password.value,
      confirmPassword: confirmPassword.value,
    }

    const errors = validate(body);

    if (errors.length > 0) {
      setErrorFields(errors);
      return;
    }

    try {
      navigate('/')
      // await dispatch(login({ email: email.value, password: password.value, isRemember }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={'max-w-[1240px] relative mx-auto px-[20px] py-[140px] flex justify-center items-center'}>
      <div className={'w-[590px] z-10 relative flex flex-col items-center justify-center h-fit bg-white sm:drop-shadow-2xl py-[30px] px-[35px] sm:py-[60px] sm:px-[70px]'}>
        <h1 className={'text-center mb-[10px] mt-0 text-[26px] sm:text-[30px] font-medium'}>{t('New Password ')}</h1>
        <p className={'text-[#49535B]'}>{t('Enter a new password for your account.')}</p>
        <div className={'mt-[40px] flex flex-col gap-[25px] w-full'}>
          <UiInput placeholder={'Min. 6 character'} subject={'Password'} type={'password'} errorText={'Field is required and must have 6 character'} errorFields={errorFields} inputValue={password} name={'password'} />
          <UiInput placeholder={'Min. 6 character'} subject={'Confirm Password'} type={'password'} errorText={'Field is required and must have 6 character'} errorFields={errorFields} inputValue={confirmPassword} name={'confirmPassword'} />
        </div>
        <button onClick={newPasswordHandler}
                className={'text-white bg-[#02A0A0] py-[13px] w-full mt-[20px]'}>{t('Save New Password')}</button>
      </div>

      <img src={decorImg1} alt={'Login particle image'} className={'absolute hidden md:block bottom-[280px] left-0'}/>
      <img src={decorImg2} alt={'Login particle image'} className={'absolute hidden md:block top-[140px] right-0'}/>
      <img src={decorImg3} alt={'Login particle image'} className={'absolute top-[140px] left-[-200px]'}/>
    </div>
  );
};

export default NewPassword;
