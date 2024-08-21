import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import { logout, userDataSelector } from "store/slices/userDataSlice";

interface BurgerMenuProps {
    setIsBurgerMenuOpen: (value: boolean) => void;
}

export const BurgerMenu = ({setIsBurgerMenuOpen}: BurgerMenuProps) => {
    const user = useSelector(userDataSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div onClick={() => setIsBurgerMenuOpen(false)} className={'absolute w-full h-full bg-opacity-80 z-30 bg-black top-0 left-0'}>
            <div onClick={event => event.stopPropagation()} className={'min-h-[50px] flex-col w-full py-6 gap-[40px] text-center flex justify-center items-center bg-[#373a47]'}>
                <Link to={'/'}>
                    <a className={'text-white font-medium text-[36px]'}>Home</a>
                </Link>
                {user._id
                    ? <Link to={'/profile'}>
                        <a className={'text-white font-medium text-[36px]'}>Profile</a>
                    </Link>
                    : <Link to={'/login'}>
                        <a className={'text-white font-medium text-[36px]'}>Login</a>
                    </Link>
                }
                <Link to={'/products'}>
                    <a className={'text-white font-medium text-[36px]'}>Products</a>
                </Link>
                <Link to={'/professional-services'}>
                    <a className={'text-white font-medium text-[36px]'}>Professional Services</a>
                </Link>
                {user.role === 'Buyer'
                    ? <>
                        <Link to={'/wishlist'}>
                            <a className={'text-white font-medium text-[36px]'}>Wishlist</a>
                        </Link>
                        <Link to={'/shopping-cart'}>
                            <a className={'text-white font-medium text-[36px]'}>Shopping Cart</a>
                        </Link>
                        <Link to={'/driver-license'}>
                            <a className={'text-white font-medium text-[36px]'}>Driver Services</a>
                        </Link>
                    </>
                    : null
                }
                <Link to={'/contact-us'}>
                    <a className={'text-white font-medium text-[36px]'}>Contact Us</a>
                </Link>
                {user._id
                    ? <button onClick={logoutHandler}>
                            <a className={'text-white font-medium text-[36px]'}>Logout</a>
                          </button>
                    : null
                }
            </div>
        </div>
    )
}