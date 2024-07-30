import React from 'react';
import {t} from "i18next";

import Footer from "@/components/Footer.tsx";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const ShippingPolicy = () => {
  useDefaultScrollPosition();

  return (
    <>
      <div className={'max-w-[1240px] pb-[50px] px-[20px] mx-auto'}>
        <h1 className={'text-[32px] font-semibold mt-[25px] mb-[25px]'}>{t('Shipping Policy')}</h1>
        <p className={'text-[22px] leading-9'}>{t(`Thank you for shopping at GLDCART! This Shipping Policy outlines important information regarding the 
shipping of products purchased on our website (the "Website"). By placing an order, you agree to the 
terms and conditions set forth in this policy.`)}</p>
        <div className={'max-w-[1119px] mt-[20px] leading-8 flex flex-col gap-12 font-poppins text-[22px]'}>
          <div className={'flex flex-col gap-2'}>
            <span>1. {t('Order Processing Time:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Orders are typically processed within [insert number of business days] business days after payment is confirmed.`)}
              </p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Please note that order processing time may be longer during peak seasons or promotional periods.`)}
              </p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>2. {t('Shipping Methods and Delivery:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`We offer various shipping methods, including standard shipping, expedited shipping, and express shipping. The available options will be presented during the checkout process.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Delivery times and shipping costs depend on the selected shipping method and the destination address.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Once your order has been shipped, you will receive a shipping confirmation email with tracking information.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>3. {t('Shipping Restrictions:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`We currently ship to addresses within [insert countries or regions where shipping is available]. If your shipping address is outside of this area, we apologize for any inconvenience caused.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Some products may have specific shipping restrictions due to legal or logistical reasons. These restrictions will be communicated on the product page if applicable.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>4. {t('Customs and Duties:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`International orders may be subject to customs duties, taxes, or import fees imposed by the destination country. These charges are the responsibility of the recipient and are not included in the product price or shipping cost.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`GLDCART is not responsible for any delays, additional charges, or issues arising from customs clearance processes.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>5. {t('Shipping Errors and Issues:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`If you receive an incorrect or damaged product, please contact our customer support team within [insert number of days] days of receiving the order.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`We will work to resolve the issue promptly by arranging a replacement or refund, depending on the circumstances.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>6. {t('Address Accuracy:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`It is your responsibility to provide an accurate and complete shipping address. GLDCART will not be held liable for delays or delivery issues caused by incorrect or incomplete address information provided by the customer.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>7. {t('Shipment Tracking:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Tracking information will be provided for most orders to allow you to monitor the status of your shipment.`)}</p>
            </div>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Please note that tracking information may take some time to update after the package is shipped.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>8. {t('Shipping Fees:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`Shipping fees are calculated based on the selected shipping method, the destination address, and the total weight and dimensions of the package. The applicable shipping fee will be displayed during the checkout process.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>9. {t('Changes to the Shipping Policy:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`We reserve the right to update or modify this Shipping Policy at any time. The revised policy will be posted on the Website with the updated effective date.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>10. {t('Contact Us:')}</span>
            <div
              className={'relative after:top-[10px] after:left-0 after:absolute after:w-[8px] after:h-[8px] after:bg-black after:rounded-full'}>
              <p
                className={'pl-[20px]'}>{t(`If you have any questions or concerns regarding our Shipping Policy, please contact our customer support team using the provided contact information.`)}</p>
            </div>
          </div>
          <div className={'flex flex-col gap-2'}>
            <span>{t('By placing an order on our Website, you acknowledge and agree to comply with the terms and conditions outlined in this Shipping Policy')}</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShippingPolicy;
