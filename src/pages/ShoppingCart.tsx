import {t} from "i18next";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import ShoppingCartService from "services/ShoppingCartService.ts";

import {userDataSelector} from "store/slices/userDataSlice.ts";

import {IoIosClose} from "react-icons/io";
import {useSelector} from "react-redux";

interface ICartItem {
  _id: string;
  product: {
    _id: string;
    name: string;
    price: number;
  };
  quantity: number;
}

const ShoppingCart = () => {
  const user = useSelector(userDataSelector);
  const navigate = useNavigate();

  const [items, setItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    if(!user._id) {
      return;
    };

    if(user.role !== 'Buyer') {
      navigate('/');
    };

    ShoppingCartService
      .getItems(user._id)
      .then((data) => {
        setItems(data)
      });
  }, [user._id]);

  return (
    <div className={'bg-white px-[20px] pt-[30px] pb-0 lg:pb-[90px]'}>
      <div className={'max-w-[1255px] mx-auto'}>
        <div className={'flex flex-col mb-[25px]'}>
          <h1 className={'font-semibold text-[30px] sm:text-[44px]'}>{t('Shopping Cart')}</h1>
          <div className={'flex mt-[10px] sm:mb-[50px] items-center gap-[20px] after:absolute after:w-[8px] after:h-[8px] after:top-[50%] after:translate-y-[-50%] after:rounded-full relative after:left-[57px] after:translate-x-[-50%] after:bg-[#A8ACB0]'}>
            <Link to={'/'} className={'text-[#55585B] hover:underline'}>{t('Home')}</Link>
            <span className={'text-[#55585B]'}>{t('Shopping Cart')}</span>
          </div>
        </div>

        {items?.length > 0
          ? <div className={'flex-col min-[880px]:flex-row flex justify-between gap-[40px] pb-[40px]'}>
            <div className={'overflow-scroll w-full'}>
              <table className="table-auto min-w-[535px] w-full h-fit">
                <thead className={'bg-gray-200'}>
                <tr>
                  <th className={'text-left py-[12px] px-[20px]'}>{t('Product')}</th>
                  <th className={'text-left pl-[10px] py-[12px]'}>{t('Price')}</th>
                  <th className={'text-center py-[12px]'}>{t('Quantity')}</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td className={'pt-[30px]'}>{item.product.name}</td>
                    <td className={'text-left pt-[30px]'}>${item.product.price}</td>
                    <td className={'pt-[30px] flex items-center justify-center'}>
                      <div
                        className={'rounded-full max-w-[100px] border-gray-300 border border-solid py-[4px] px-[14px] flex gap-[10px]'}>
                        <button>-</button>
                        <span>{item.quantity}</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className={'pt-[30px] pr-[20px]'}>
                      <button className={'flex gap-2 w-full items-end justify-end'}>
                        <IoIosClose/>
                        {t('Remove')}
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
            <div className={'flex flex-col mt-[50px] min-[800px]:mt-0 w-full min-[880px]:max-w-[260px]'}>
              <div className={'flex justify-between gap-[20px] pb-[15px]'}>
                <span className={'text-[17px] font-medium'}>{t('Subtotal')}</span>
                <span className={'text-[17px] font-medium'}>$500</span>
              </div>
              <div
                className={'flex justify-between flex-col gap-[20px] py-[15px] pb-[15px] border-y border-solid border-[#A5A5A5]'}>
                <span className={'text-[17px] font-medium'}>{t('Shipping')}</span>
                <div className={'flex flex-col gap-[15px]'}>
                  <label className={'flex gap-[7px]'}>
                    <input name={'shipping'} type={'radio'} className={'w-[15px] h-[15px]'}/>
                    <span>{t('Flat rate:')}</span>
                    <span>$20.00</span>
                  </label>
                  <label className={'flex gap-[7px]'}>
                    <input name={'shipping'} type={'radio'} className={'w-[15px] h-[15px]'}/>
                    <span>{t('Local pickup:')}</span>
                    <span>$20.00</span>
                  </label>
                  <label className={'flex gap-[7px]'}>
                    <input name={'shipping'} type={'radio'} className={'w-[15px] h-[15px]'}/>
                    <span>{t('Free Shipping')}</span>
                  </label>
                </div>
              </div>
              <div className={'flex pt-[15px] justify-between gap-[20px] pb-[15px]'}>
                <span className={'text-[17px] font-medium'}>{t('Total')}</span>
                <span className={'text-[17px] font-medium'}>$500.00</span>
              </div>
              <button className={'text-[12px] py-[20px] bg-black text-white'}>{t('Proceed to checkout')}</button>
            </div>
          </div>
          : <div className={'bg-[#F3F3F3] mb-[40px] md:mb-[60px] lg:mb-[120px] py-[120px] min-[800px]:py-[240px]'}>
            <div className={'pt-[50px] flex items-center justify-center flex-col gap-[25px]'}>
              <h2 className={'text-center font-bold sm:text-[24px] text-[20px]'}>{t('No Cart Items Found')}</h2>
              <button
                className={'py-[15px] px-[30px] font-medium text-white bg-black text-[12px] sm:text-[16px]'}>{t('Continue Shipping')}
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ShoppingCart;
