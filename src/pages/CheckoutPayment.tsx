import {useState} from "react";
import {Link} from "react-router-dom";
import {t} from "i18next";

import UiTextarea from "components/ui/UiTextarea.tsx";
import UiInput from "components/ui/UiInput.tsx";

import { useInput } from "hooks/useInput.tsx";
import useDefaultScrollPosition from "hooks/useDefaultScrollPosition.tsx";

import { validate } from "utils/validate.ts";

const CheckoutPayment = () => {
  const [errorFields, setErrorFields] = useState<string[]>([]);

  const [products, setProducts] = useState([
    {
      name: 'Cool Headphone',
      price: '60.00',
    },
    {
      name: 'Cool Headphone',
      price: '60.00',
    }
  ]);

  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const firstName = useInput('');
  const lastName = useInput('');
  const country = useInput('');
  const street = useInput('');
  const town = useInput('');
  const zipCode = useInput('');
  const phoneNumber = useInput('');
  const emailAddress = useInput('');
  const orderNotes = useInput('');

  useDefaultScrollPosition();

  async function checkoutPaymentHandler() {
    const body = {
      firstName: firstName.value,
      lastName: lastName.value,
      country: country.value,
      street: street.value,
      town: town.value,
      zipCode: zipCode.value,
      phoneNumber: phoneNumber.value,
      emailAddress: emailAddress.value,
      orderNotes: orderNotes.value,
    }

    const errors = validate(body);

    if (errors.length > 0) {
      setErrorFields(errors);
      return;
    }

    try {
      // Logic to handle payment
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={'bg-[#ecf2f7] px-[20px]'}>
      <div className={'mx-auto max-w-[1255px] drop-shadow-2xl py-[50px] sm:py-[100px]'}>
        <h1 className={'font-semibold mb-[10px] text-[32px] sm:text-[64px]'}>{t('Checkout')}</h1>
        <div className={'flex mb-[25px] sm:mb-[50px] items-center gap-[20px] after:absolute after:w-[8px] after:h-[8px] after:top-[50%] after:translate-y-[-50%] after:rounded-full relative after:left-[58px] after:translate-x-[-50%] after:bg-[#A8ACB0]'}>
          <Link to={'/'} className={'text-[#55585B] hover:underline'}>{t('Home')}</Link>
          <span className={'text-[#55585B]'}>{t('Checkout')}</span>
        </div>
        <div className={'flex flex-col max-w-[600px] mb-[30px] gap-[15px]'}>
          <div className={'border-dashed border-black border-2 py-[12px] px-[20px]'}>
            <span>{t('Returning customer?')} </span>
            <Link to={'/login'} className={'text-[#80BFFA] underline'}>{t('Click here to login')}</Link>
          </div>
          <div className={'border-dashed border-black border-2 py-[12px] px-[20px]'}>
            <span>{t('Have a coupon?')} </span>
            <Link to={'/'} className={'text-[#80BFFA] underline'}>{t('Click here to enter your code')}</Link>
          </div>
        </div>
        <div className={'flex flex-col min-[1000px]:flex-row justify-between gap-[40px]'}>
          <div className={'bg-white min-[1000px]:max-w-[600px] w-full p-[30px] flex flex-col gap-[25px]'}>
            <h2 className={'font-semibold mb-[10px] text-[28px] sm:text-[34px]'}>{t('Billing Details')}</h2>
            <div className={'flex gap-[10px]'}>
              <UiInput placeholder={'First Name'} subject={'Name'} errorFields={errorFields}
                       inputValue={firstName} name={'firstName'}/>
              <UiInput placeholder={'Last Name'} subject={'Surname'} errorFields={errorFields} inputValue={lastName}
                       name={'lastName'}/>
            </div>
            <UiInput placeholder={'United States (US)'} subject={'Country'} errorFields={errorFields}
                     inputValue={country}
                     name={'country'}/>
            <UiInput placeholder={'Full address'} subject={'Street Address'} errorFields={errorFields}
                     inputValue={street} name={'street'}/>
            <div className={'flex gap-[10px]'}>
              <UiInput placeholder={'City'} subject={'City'} errorFields={errorFields} inputValue={town}
                       name={'town'}/>
              <UiInput placeholder={'Zip Code'} subject={'Postcode'} errorFields={errorFields} inputValue={zipCode}
                       name={'zipCode'}/>
            </div>
            <UiInput placeholder={'Phone'} subject={'Phone'} errorFields={errorFields} inputValue={phoneNumber}
                     name={'phoneNumber'}/>
            <UiInput placeholder={'Email Address'} subject={'Email Address'} errorFields={errorFields}
                     inputValue={emailAddress} name={'emailAddress'}/>
            <UiTextarea placeholder={'Note about your order'} subject={'Order Notes'} errorFields={errorFields}
                        textareaValue={orderNotes} name={'orderNotes'}/>
          </div>
          <div className={'bg-white min-[1000px]:max-w-[460px] h-fit w-full p-[30px] sm:p-[40px] flex flex-col gap-[15px]'}>
            <h2 className={'font-semibold text-[28px] sm:text-[34px]'}>{t('Your Order')}</h2>
            <div className={'flex justify-between border-b border-[#D9D9D9] border-solid py-[12px]'}>
              <span className={'font-semibold'}>{t('Product')}</span>
              <span className={'font-semibold'}>{t('Total')}</span>
            </div>
            <div className={'border-b border-[#D9D9D9] flex flex-col gap-[10px] border-solid py-[12px]'}>
              {products.map((product, index) => (
                <div key={index} className={'flex justify-between gap-[10px]'}>
                  <span className={'font-semibold'}>{product.name}</span>
                  <span className={'font-semibold'}>${product.price}</span>
                </div>
              ))}
            </div>
            <div className={'flex justify-between items-center border-b border-[#D9D9D9] border-solid py-[12px]'}>
              <span className={'font-semibold'}>{t('Shipping')}</span>
              <div className={'flex flex-col items-end justify-end gap-[10px]'}>
                <label className={'flex items-center gap-[10px] text-[14px]'}>
                  <div className={'font-semibold flex gap-[10px]'}>
                    <span>{t('Today')}</span>
                    <span className={'text-blue-500'}>$60.00</span>
                  </div>
                  <input onChange={() => setShippingCost(60)} type="radio" name={'shipping'}
                         value={'Today delivery'}/>
                </label>
                <label className={'flex items-center gap-[10px] text-[14px]'}>
                  <div className={'font-semibold flex gap-[10px]'}>
                    <span>{t('7 Days')}</span>
                    <span className={'text-blue-500'}>$20.00</span>
                  </div>
                  <input onChange={() => setShippingCost(20)} type="radio" name={'shipping'}
                         value={'7 Days delivery'}/>
                </label>
                <label className={'flex items-center gap-[10px] text-[14px]'}>
                  <span className={'font-semibold'}>{t('I do not need')}</span>
                  <input defaultChecked={true} onChange={() => setShippingCost(0)} type="radio"
                         name={'shipping'} value={'Do not need fast delivery'}/>
                </label>
              </div>
            </div>
            <div className={'flex justify-between border-b border-[#D9D9D9] border-solid py-[12px]'}>
              <span className={'font-semibold'}>{t('Subtotal')}</span>
              <span className={'font-semibold text-blue-500'}>${subtotalPrice}</span>
            </div>
            <div className={'flex justify-between border-b border-[#D9D9D9] border-solid py-[12px]'}>
              <span className={'font-semibold'}>{t('Shipping Cost')}</span>
              <span className={'font-semibold text-blue-500'}>${shippingCost}</span>
            </div>
            <div className={'flex justify-between py-[12px]'}>
              <span className={'font-semibold'}>{t('Total')}</span>
              <span className={'font-semibold text-blue-500'}>${totalPrice}</span>
            </div>

            <button onClick={checkoutPaymentHandler} className={'mt-[50px] bg-[#02A0A0] py-[15px] font-medium text-white'}>{t('Place Order')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPayment;
