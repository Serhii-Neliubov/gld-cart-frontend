import React from 'react';
import {t} from "i18next";

import Footer from '@/components/Footer.tsx';
import useDefaultScrollPosition from '@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx';

const CookiePolicy = () => {
  useDefaultScrollPosition();

  return (
    <>
      <div className={'max-w-[1240px] pb-[50px] px-[20px] mx-auto'}>
        <h1 className={'text-[32px] font-semibold mt-[25px] mb-[25px]'}>{t('Cookie Policy')}</h1>
        <p className={'text-[22px] leading-9'}>{t(`We use cookies to enhance your browsing experience on our website. By continuing to use our website, you consent to the use of cookies. This policy explains how we use cookies and how you can manage them.`)}
        </p>
        <div className={'max-w-[1119px] mt-[20px] leading-8 flex flex-col gap-12 font-poppins text-[22px]'}>
          <div className={'flex flex-col gap-2'}>
            <span>1. {t('What are Cookies? ')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Cookies are small text files stored on your device when you visit our website. They help us improve   website functionality and provide a personalized experience.`)}
              </p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>2. {t('How We Use Cookies:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Essential Cookies: Necessary for website operation and functionality.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Analytics Cookies: Collect anonymous data to analyze website usage.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Advertising and Marketing Cookies: Deliver personalized ads based on your interests.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>3. {t('Third-Party Cookies:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`We may allow third-party service providers to place cookies on your device for analytics or advertising purposes.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>4. {t('Cookie Management: ')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`You can modify your browser settings to control or delete cookies. However, disabling cookies may limit website functionality.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>5. {t('Updates to this Policy: ')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`We may update this Cookie Policy as needed. Please check for the latest version on our website.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>6. {t('Contact Us: ')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`If you have any questions or concerns about our use of cookies, please contact us using the provided contact information.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>{t('By using our website, you agree to our use of cookies as explained in this policy.')}</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CookiePolicy;
