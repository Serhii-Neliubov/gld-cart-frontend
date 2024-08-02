import {t} from "i18next";
import {Link} from "react-router-dom";

const Wishlist = () => {
  const items = true;

  return (
      <div className={'bg-white px-[20px] pt-[30px] pb-[45px] lg:pb-[90px]'}>
        <div className={'max-w-[1255px] mx-auto flex flex-col mb-[25px]'}>
          <h1 className={'font-semibold text-[30px] sm:text-[44px]'}>{t('Wishlist')}</h1>
          <div
              className={'flex mt-[10px] sm:mb-[50px] items-center gap-[20px] after:absolute after:w-[8px] after:h-[8px] after:top-[50%] after:translate-y-[-50%] after:rounded-full relative after:left-[57px] after:translate-x-[-50%] after:bg-[#A8ACB0]'}>
            <Link to={'/'} className={'text-[#55585B] hover:underline'}>{t('Home')}</Link>
            <span className={'text-[#55585B]'}>{t('Wishlist')}</span>
          </div>
        </div>
        <div className={'max-w-[1255px] overflow-x-scroll mx-auto'}>
          {!items
              ? <div className={'bg-[#F3F3F3] mb-[40px] md:mb-[60px] lg:mb-[120px] py-[120px] min-[800px]:py-[240px]'}>
                <div className={'pt-[50px] flex items-center justify-center flex-col gap-[25px]'}>
                  <h2 className={'text-center font-bold sm:text-[24px] text-[18px]'}>{t('No Wishlist Items Found')}</h2>
                  <button
                      className={'py-[15px] px-[30px] font-medium text-white bg-black text-[12px] sm:text-[16px]'}>{t('Continue Shipping')}
                  </button>
                </div>
              </div>
              : <div
                  className={'flex-col overflow-scroll min-w-[650px] min-[800px]:flex-row flex justify-between gap-[40px]'}>
                <table className="table-auto w-full h-fit">
                  <thead className={'bg-gray-200'}>
                  <tr>
                    <th className={'text-left py-[12px] px-[20px]'}>{t('Product')}</th>
                    <th className={'text-left pl-[10px] py-[12px]'}>{t('Price')}</th>
                    <th></th>
                    <th className={'text-center py-[12px]'}>{t('Action')}</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className={'pt-[30px] pl-[20px]'}>Cool Headphones</td>
                    <td className={'text-left pt-[30px]'}>$500.00</td>
                    <td className={'pt-[30px] flex items-center justify-center'}>
                      <div
                          className={'rounded-full max-w-[100px] border-gray-300 border border-solid py-[4px] px-[14px] flex gap-[10px]'}>
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className={'text-center pt-[25px]'}>
                      <button className={'bg-[#02A0A0] p-[10px] text-white'}>Add to cart</button>
                    </td>
                    <td className={'pt-[30px] text-right pr-[20px]'}>
                      <button>&times; Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td className={'pt-[30px] pl-[20px]'}>Cool Headphones</td>
                    <td className={'text-left pt-[30px]'}>$500.00</td>
                    <td className={'pt-[30px] flex items-center justify-center'}>
                      <div
                          className={'rounded-full max-w-[100px] border-gray-300 border border-solid py-[4px] px-[14px] flex gap-[10px]'}>
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className={'text-center pt-[25px]'}>
                      <button className={'bg-[#02A0A0] p-[10px] text-white'}>Add to cart</button>
                    </td>
                    <td className={'pt-[30px] text-right pr-[20px]'}>
                      <button>&times; Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td className={'pt-[30px] pl-[20px]'}>Cool Headphones</td>
                    <td className={'text-left pt-[30px]'}>$500.00</td>
                    <td className={'pt-[30px] flex items-center justify-center'}>
                      <div
                          className={'rounded-full max-w-[100px] border-gray-300 border border-solid py-[4px] px-[14px] flex gap-[10px]'}>
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className={'text-center pt-[25px]'}>
                      <button className={'bg-[#02A0A0] p-[10px] text-white'}>Add to cart</button>
                    </td>
                    <td className={'pt-[30px] text-right pr-[20px]'}>
                      <button>&times; Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td className={'pt-[30px] pl-[20px]'}>Cool Headphones</td>
                    <td className={'text-left pt-[30px]'}>$500.00</td>
                    <td className={'pt-[30px] flex items-center justify-center'}>
                      <div
                          className={'rounded-full max-w-[100px] border-gray-300 border border-solid py-[4px] px-[14px] flex gap-[10px]'}>
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className={'text-center pt-[25px]'}>
                      <button className={'bg-[#02A0A0] p-[10px] text-white'}>Add to cart</button>
                    </td>
                    <td className={'pt-[30px] text-right pr-[20px]'}>
                      <button>&times; Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td className={'pt-[30px] pl-[20px]'}>Cool Headphones</td>
                    <td className={'text-left pt-[30px]'}>$500.00</td>
                    <td className={'pt-[30px] flex items-center justify-center'}>
                      <div
                          className={'rounded-full max-w-[100px] border-gray-300 border border-solid py-[4px] px-[14px] flex gap-[10px]'}>
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className={'text-center pt-[25px]'}>
                      <button className={'bg-[#02A0A0] p-[10px] text-white'}>Add to cart</button>
                    </td>
                    <td className={'pt-[30px] text-right pr-[20px]'}>
                      <button>&times; Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td className={'pt-[30px] pl-[20px]'}>Cool Headphones</td>
                    <td className={'text-left pt-[30px]'}>$500.00</td>
                    <td className={'pt-[30px] flex items-center justify-center'}>
                      <div
                          className={'rounded-full max-w-[100px] border-gray-300 border border-solid py-[4px] px-[14px] flex gap-[10px]'}>
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td className={'text-center pt-[25px]'}>
                      <button className={'bg-[#02A0A0] p-[10px] text-white'}>{t('Add to cart')}</button>
                    </td>
                    <td className={'pt-[30px] text-right pr-[20px]'}>
                      <button>&times; Remove</button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
          }
        </div>
      </div>
  );
};

export default Wishlist;
