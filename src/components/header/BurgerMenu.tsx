import {Link} from "react-router-dom";

interface BurgerMenuProps {
    setIsBurgerMenuOpen: (value: boolean) => void;
}

export const BurgerMenu = ({setIsBurgerMenuOpen}: BurgerMenuProps) => {
    return (
        <div onClick={() => setIsBurgerMenuOpen(false)} className={'absolute w-full h-full bg-opacity-80 z-10 bg-black top-0 left-0'}>
            <div className={'min-h-[50px] flex-col w-full py-6 gap-[40px] text-center flex justify-center items-center bg-[#373a47]'}>
                <Link to={'/'}>
                    <a className={'text-white font-medium text-[36px]'}>Home</a>
                </Link>
                <Link to={'/renting'}>
                    <a className={'text-white font-medium text-[36px]'}>Renting</a>
                </Link>
                <Link to={'/products'}>
                    <a className={'text-white font-medium text-[36px]'}>Products</a>
                </Link>
                <Link to={'/professional-services'}>
                    <a className={'text-white font-medium text-[36px]'}>Professional Services</a>
                </Link>
                <Link to={'/driver-license'}>
                    <a className={'text-white font-medium text-[36px]'}>Driver Services</a>
                </Link>
                <Link to={'/contact-us'}>
                    <a className={'text-white font-medium text-[36px]'}>Contact Us</a>
                </Link>
            </div>
        </div>
    )
}