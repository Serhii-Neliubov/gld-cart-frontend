import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { userDataSelector } from "store/slices/userDataSlice.ts";

import imageLike from "@/assets/images/like-icon.svg";
import imageTrash from "@/assets/images/trash-icon.svg";
import imageProfile from "@/assets/images/profile-icon.svg";
import { IconBurgerMenu } from "assets/icons/IconBurgerMenu.tsx";

interface HeaderNavProps {
    setBurgerMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderNav = ({setBurgerMenuOpen}: HeaderNavProps) => {
    const user = useSelector(userDataSelector);
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div className={'bg-white py-[12px] border-y border-black border-solid px-[20px]'}>
            <div className={'max-w-[1255px] flex items-center justify-between mx-auto'}>
                <span className={'font-semibold text-[24px]'}>{t('Exclusive')}</span>
                <nav className={'block max-[1150px]:hidden'}>
                    <ul className={'uppercase flex gap-[40px]'}>
                        <li>
                            <Link to={'/'}
                                  className={location.pathname === '/' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Home')}</Link>
                        </li>
                        {user.role === 'Driver' || user.role === 'vendor' && <li>
                            <Link to={user.role === 'vendor' ? '/renting-vendor' : '/renting'}
                                  className={location.pathname === '/renting' || location.pathname === '/renting-vendor' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Renting')}</Link>
                        </li>}
                        <li>
                            <Link to={user.role === 'vendor' ? '/products-vendor' : '/products'}
                                  className={location.pathname === '/products' || location.pathname === '/products-vendor' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Products')}</Link>
                        </li>
                        <li>
                            <Link to={user.role === 'vendor' ? '/professional-services-vendor' : '/professional-services'}
                                  className={location.pathname === '/professional-services' || location.pathname === '/professional-services-vendor' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Professional services')}</Link>
                        </li>
                        {user.role === 'Driver' && <li>
                            <Link to={'/driver-license'}
                                  className={location.pathname === '/driver-license' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Driver Services')}</Link>
                        </li>}
                        <li>
                            <Link to={'/contact-us'}
                                  className={location.pathname === '/contact-us' ? 'text-red-500' : 'hover:text-red-500 transition-all'}>{t('Contact us')}</Link>
                        </li>
                    </ul>
                </nav>
                <div className={'flex items-center gap-[16px]'}>
                    {
                        user.role === 'vendor'
                            ? null
                            : <>
                                <Link to={'/wishlist'} className={'max-[350px]:hidden block'}><img src={imageLike} alt={'like icon'}/></Link><Link to={'/shopping-cart'} className={'max-[350px]:hidden block'}>
                                    <img src={imageTrash} alt={'shopping cart icon'}/>
                                </Link>
                            </>
                    }
                    <Link to={'/profile'} className={'relative'}>
                        <div className={'w-[30px] h-[30px] rounded-full relative overflow-hidden'}>
                            <img src={user.profile_picture ? user.profile_picture : imageProfile} alt={'profile icon'}/>
                        </div>
                        <span className={'absolute top-[50%] translate-y-[-50%] left-[40px]'}>{user.name}</span>
                    </Link>

                    <button onClick={() => setBurgerMenuOpen(prev => !prev)} className="relative group hidden max-[1150px]:block">
                        <IconBurgerMenu />
                    </button>
                </div>
            </div>
        </div>
    )
}