import React from 'react';
import {t} from "i18next";

import useDefaultScrollPosition from '@/hooks/useDefaultScrollPosition.tsx';

const Faqs = () => {
  useDefaultScrollPosition();

  return (
    <div className={'max-w-[1240px] pb-[50px] px-[20px] mx-auto'}>
        <h1 className={'text-[32px] font-semibold mt-[25px] mb-[25px]'}>{t('FAQs')}</h1>
        <div className={'max-w-[1119px] leading-8 flex flex-col gap-12 font-poppins text-[22px]'}>
          <div className={'flex flex-col gap-2'}>
            <span>1. {t('How long does it take to process an order?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`Orders are typically processed within [insert number of business days] after
                payment confirmation.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>2. {t('What are the available shipping options?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`We offer various shipping options, including standard, expedited, and express
                shipping. The available options will be presented during the checkout process.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>3. {t('How long does shipping take?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`Delivery times depend on the selected shipping method and the destination
                address. Please refer to the estimated delivery time provided during the checkout process.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>4. {t('Do you ship internationally?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`We currently ship to addresses within [insert countries or regions where
                shipping is available]. If your shipping address is outside of this area, we apologize for any
                inconvenience caused.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>5. {t('Are there any additional customs fees or taxes for international orders?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`International orders may be subject to customs duties, taxes, or import fees
                imposed by the destination country. These charges are the responsibility of the recipient and are not
                included in the product price or shipping cost.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>6. {t('What should I do if I receive an incorrect or damaged product?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`If you receive an incorrect or damaged product, please contact our customer
                support team within [insert number of days] days of receiving the order. We will work to resolve the
                issue promptly.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>7. {t('Can I track my order?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
                <p className={'pl-[20px]'}>{t(`Yes, most orders come with tracking information. You will receive a shipping confirmation email with tracking details once your order is shipped.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>8. {t('How do I update my shipping address?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t(`Please ensure to provide an accurate and complete shipping address during the checkout process. If you need to update your shipping address after placing an order, please contact our customer support as soon as possible.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>9. {t('What are the accepted payment methods?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t('We accept various payment methods, including credit cards, debit cards, and online payment platforms. The available options will be displayed during the checkout process.')}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>10. {t('How can I contact customer support?')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p className={'pl-[20px]'}>{t('For any questions or concerns, please contact our customer support team using the provided contact information on our website. We are here to assist you')}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Faqs;
