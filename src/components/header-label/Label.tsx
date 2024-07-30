import React, {useState} from "react";
import {t} from "i18next";
import {Link, useLocation} from "react-router-dom";

import imageProfile from '@/assets/images/profile-icon.svg';
import imageLike from '@/assets/images/like-icon.svg';
import imageTrash from '@/assets/images/trash-icon.svg';

const Label = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <>
      <div className={'bg-white py-[12px] border-y border-black border-solid px-[20px]'}>
        <div className={'max-w-[1255px] flex items-center justify-between mx-auto'}>
          <span className={'font-semibold text-[24px]'}>{t('Exclusive')}</span>
          <nav className={'block max-[1150px]:hidden'}>
            <ul className={'uppercase flex gap-[40px]'}>
              <li>
                <Link to={'/'} className={location.pathname === '/' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Home')}</Link>
              </li>
              <li>
                <Link to={'/renting'} className={location.pathname === '/renting' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Renting')}</Link>
              </li>
              <li>
                <Link to={'/products'} className={location.pathname === '/products' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Products')}</Link>
              </li>
              <li>
                <Link to={'/professional-services'} className={location.pathname === '/professional-services' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Professional services')}</Link>
              </li>
              <li>
                <Link to={'/driver-license'} className={location.pathname === '/driver-license' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Driver Services')}</Link>
              </li>
              <li>
                <Link to={'/contact-us'} className={location.pathname === '/contact-us' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Contact us')}</Link>
              </li>
            </ul>
          </nav>
          <div className={'flex items-center gap-[16px]'}>
            <Link to={'/wishlist'} className={'max-[350px]:hidden block'}>
              <img src={imageLike} alt={'like icon'}/>
            </Link>
            <Link to={'/shopping-cart'} className={'max-[350px]:hidden block'}>
              <img src={imageTrash} alt={'shopping cart icon'}/>
            </Link>
            <Link to={'/profile'}>
              <img src={imageProfile} alt={'profile icon'}/>
            </Link>

            <button
              onClick={() => setBurgerMenuOpen(prev => !prev)}
              className="relative group hidden max-[1150px]:block">
              <div
                className="relative flex overflow-hidden items-center justify-center rounded-full w-[35px] h-[35px] transform transition-all bg-[#2283DC] ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div
                  className="flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div
                    className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                  <div
                    className="bg-white h-[2px] w-7 transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                  <div
                    className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                  <div
                    className="absolute items-center justify-between transform transition-all duration-500 top-2 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                    <div
                      className="absolute bg-white h-[2px] w-4 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div
                      className="absolute bg-white h-[2px] w-4 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button
            >
          </div>
        </div>
      </div>

      {burgerMenuOpen &&
        <div className={'absolute w-full bg-black z-[1000]'}>123</div>
      }
    </>
  );
};

export default Label;
