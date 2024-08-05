import React from 'react';
import {t} from "i18next";

import useDefaultScrollPosition from "hooks/useDefaultScrollPosition.tsx";

const TermsConditions = () => {
  useDefaultScrollPosition();

  return (
    <div className={'max-w-[1240px] pb-[50px] px-[20px] mx-auto'}>
        <h1 className={'text-[32px] font-semibold mt-[25px] mb-[25px]'}>{t('Terms and Conditions')}</h1>
        <p className={'text-[22px] leading-9'}>{t(`By using Gldcart.com , you agree to the terms and conditions, privacy policy, and returns/refund policy of the Site. Please read the Terms and Conditions carefully before using Gldcart.com.`)}</p>
        <div className={'max-w-[1119px] mt-[20px] leading-8 flex flex-col gap-12 font-poppins text-[22px]'}>
          <div className={'flex flex-col gap-2'}>
            <span>1. {t('Account Registration:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Users must be at least 18 years old or the age of majority in their jurisdiction to create an account.`)}
              </p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Users are responsible for maintaining the confidentiality of their account login information.`)}
              </p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Users agree to provide accurate and complete information during registration.`)}
              </p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>2. {t('User Conduct:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Users must comply with all applicable laws and regulations.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Prohibited activities include impersonation, disruption of the Website's functioning, collecting personal information, and engaging in fraudulent or deceptive behavior.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`GLDCART reserves the right to suspend or terminate accounts for violation of these Terms.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>3. {t('Intellectual Property Rights:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`The Website and its content are owned by GLDCART or its licensors and are protected by intellectual property laws.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Users may not reproduce, distribute, modify, or publicly display the Website's material without permission.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>4. {t('Product Listings and Orders:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`GLDCART strives to provide accurate product information but does not guarantee its accuracy.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Users represent that their order information is accurate and complete.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`GLDCART reserves the right to refuse or cancel orders for various reasons.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>5. {t('Limitation of Liability:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`GLDCART is not liable for any direct or indirect damages arising from the use of the Website.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Users use the Website at their own risk.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>{t('These Terms and Conditions outline the rules and guidelines for using the GLDCART Ecommerce Website. By accessing and using the Website, users agree to comply with these terms.')}</span>
          </div>
        </div>
      </div>
  );
};

export default TermsConditions;
