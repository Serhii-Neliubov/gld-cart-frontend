import React from "react";
import {t} from "i18next";

import Footer from "@/components/footer/Footer.tsx";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const PrivacyPolicy = () => {
  useDefaultScrollPosition();

  return (
    <>
      <div className={'max-w-[1240px] pb-[50px] px-[20px] mx-auto'}>
        <h1 className={'text-[32px] font-semibold mt-[25px] mb-[25px]'}>{t('Privacy Policy')}</h1>
        <p className={'text-[22px] leading-9'}>{t(`Welcome to Gldcart, we prioritize your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect
          your personal information when you use our Website. By using the Website, you consent to our practices
          as described in this Policy.`)}
        </p>
        <div className={'max-w-[1119px] mt-[20px] leading-8 flex flex-col gap-12 font-poppins text-[22px]'}>
          <div className={'flex flex-col gap-2'}>
            <span>1. {t('Information We Collect:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`Personal Information: We collect your name, email address, shipping address, and payment details to process your orders and provide support.`)}
              </p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`Non-Personal Information: We gather non-personal information like IP addresses and browsing patterns for website analytics and improvement.`)}
              </p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>2. {t('Use of Information:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Personal Information: We use your information for order processing, customer support, and optional promotional communications.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Non-Personal Information: We utilize non-personal information for website enhancement and marketing purposes.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>3. {t('Disclosure of Information:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Service Providers: We may share your information with trusted third-party service providers to assist in operations and product delivery.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Legal Compliance: We disclose information as required by law or legal processes.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Business Transfers: In the event of a business sale or merger, your information may be transferred to the acquiring entity.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>4. {t('Data Security:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`We implement reasonable security measures to protect your information but cannot guarantee absolute security.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>5. {t('Third-Party Websites:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`Our Privacy Policy does not apply to third-party websites linked on our Website. Please review their respective privacy policies.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>6. {t('Children\'s Privacy:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`Our Website is not intended for individuals under 18. We do not knowingly collect personal information from children.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>7. {t('Changes to the Privacy Policy:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`We may update our Privacy Policy periodically. Any changes will be posted on our Website.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>8. {t('Contact Us:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`If you have any questions or concerns regarding our Privacy Policy or practices, please contact us using the provided contact information.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>9. {t('This Privacy Policy governs the collection, use, and protection of personal information on the GLDCART Ecommerce Website. Please review this Policy regularly for updates.')}</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
