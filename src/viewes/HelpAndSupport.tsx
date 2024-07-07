import React from 'react';
import { Link } from 'react-router-dom';
import {t} from "i18next";

import Footer from "@/components/footer/Footer.tsx";
import useDefaultScrollPosition from '@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx';

import imageIcon1 from '@/assets/images/HelpAndSupport/icon1.svg';
import imageIcon2 from '@/assets/images/HelpAndSupport/icon2.svg';
import imageIcon3 from '@/assets/images/HelpAndSupport/icon3.svg';
import imageSupportLogo from '@/assets/images/HelpAndSupport/logo1.png';
import chatIcon from '@/assets/images/HelpAndSupport/chaticon.png';
import arrowRightIcon from '@/assets/images/HelpAndSupport/arrow-right.svg';

const HelpAndSupport = () => {
  useDefaultScrollPosition();

  return (
    <>
      <div className={'max-w-[1240px] pt-[24px] px-[20px] pb-[80px] min-[1081px]:pb-[160px] mx-auto'}>
        <h1 className={'font-light text-[20px] sm:text-[26px] mt-0'}>{t('Hi, how can we help you?')}</h1>
        <div className={'flex gap-[20px] min-[1255px]:gap-[35px] flex-wrap mt-[25px] items-center'}>
          <Link to={'#'} className={'border-solid w-full min-[1255px]:max-w-[375px] hover:bg-gray-100 cursor-pointer transition-all min-h-[115px] border-[1px] border-[#D9D9D9] flex p-[12px] flex-col gap-[13px]'}>
            <div className={'flex gap-3'}>
              <img src={imageIcon1} alt={'Icon'} className={'w-[20px] h-[20px]'}/>
              <span className={'font-semibold'}>{t('I want to know where my order is')}</span>
            </div>
            <div className={'max-w-[350px]'}>
              <p>{t(`Get status updates about your order with our
              tracking tool`)}</p>
            </div>
          </Link>
          <Link to={'#'} className={'border-solid w-full min-[1255px]:max-w-[375px] hover:bg-gray-100 cursor-pointer transition-all min-h-[115px] border-[1px] border-[#D9D9D9] flex p-[12px] flex-col gap-[13px]'}>
            <div className={'flex gap-3'}>
              <img src={imageIcon2} alt={'Icon'} className={'w-[20px] h-[20px]'}/>
              <span className={'font-semibold'}>{t('I want to return an item')}</span>
            </div>
            <div className={'max-w-[350px]'}>
              <p>{t(`Use our online return form to start your return`)}</p>
            </div>
          </Link>
          <Link to={'#'} className={'border-solid w-full min-[1255px]:max-w-[375px] hover:bg-gray-100 cursor-pointer transition-all min-h-[115px] border-[1px] border-[#D9D9D9] flex p-[12px] flex-col gap-[13px]'}>
            <div className={'flex gap-3'}>
              <img src={imageIcon3} alt={'Icon'} className={'w-[20px] h-[20px]'}/>
              <span className={'font-semibold'}>{t('I want to know where my order is')}</span>
            </div>
            <div className={'max-w-[350px]'}>
              <p>{t(`Use our online cancellation form to start your order cancellation`)}</p>
            </div>
          </Link>
        </div>
        <div className={'flex pt-[25px] pb-[50px] flex-col gap-5 border-solid border-b-[1px] border-black'}>
          <span className={'text-[20px] sm:text-[26px]'}>{t('I have another question')}</span>
          <Link to={'#'} className={'w-fit transition-all text-[20px] sm:text-[26px] hover:text-[#C20000] flex items-center gap-2 text-[#EC0000]'}>{t('Search')} <img src={arrowRightIcon} alt={'arrow right icon'}/></Link>
          <Link to={'#'} className={'w-fit transition-all text-[20px] sm:text-[26px] hover:text-[#C20000] flex items-center gap-2 text-[#EC0000]'}>{t('Browse help center')} <img src={arrowRightIcon}
                                                                                                 alt={'arrow right icon'}/></Link>
        </div>
        <div className={'flex mt-[45px] flex-wrap sm:mt-[90px] justify-between gap-5'}>
          <div className={'flex flex-col min-[1081px]:max-w-[300px] w-full items-center min-[1081px]:items-start justify-center gap-[25px] sm:gap-[50px]'}>
            <span className={'text-[32px]'}>{t('Contact us')}</span>
            <img src={imageSupportLogo} alt={'Logo'} className={'object-cover'} />
          </div>
          <div className={'flex flex-col justify-center min-[1081px]:items-start items-center w-full min-[1081px]:max-w-[700px] gap-[20px]'}>
            <div className={'text-center min-[1081px]:text-left min-[1081px]:items-start max-w-[700px] text-[19px] leading-6'}>
              {t('For order status inquiry, please click ')}
              <Link to={'#'} className={'text-[#2283DC] hover:underline'}>{t('here')}</Link> <br />
              {t(`To cancel and return ordered items, please log-in with your account here
                For other concerns, feel free to visit our Help Center Page here Can't find the answer you are looking for? Chat with us or you can also
                call us at 021-111-132729 | Mon - Sat (09:00 am till 09:00 pm).`)}
            </div>
            <button className={'hover:bg-[#008F8F] transition-all flex items-center justify-center gap-3 text-[19px] uppercase w-full sm:max-w-[310px] py-[20px] text-white bg-[#02A0A0]'}>
              <img src={chatIcon} alt={'Chat icon'} className={'max-w-[42px]'}/>
              {t('live chat now!')}
            </button>
            <span className={'text-[19px]'}>{t('Still need help? Click here')}</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HelpAndSupport;