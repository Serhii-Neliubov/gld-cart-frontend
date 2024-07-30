import {Link} from "react-router-dom";
import {t} from "i18next";

import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

import vehicleImg from "@/assets/images/RentingPage/img1.png";
import housesImg from "@/assets/images/RentingPage/img2.png";
import electronicsImg from "@/assets/images/RentingPage/img3.png";

const categories = [
  {
    name: t('Vehicles'),
    image: vehicleImg,
    category: 'vehicles'
  },
  {
    name: t('Houses'),
    image: housesImg,
    category: 'houses'
  },
  {
    name: t('Electronics'),
    image: electronicsImg,
    category: 'electronics'
  }
]

const RentingCategories = () => {
  useDefaultScrollPosition();

  return (
    <>
      <div className="max-w-[1240px] pb-[50px] sm:pb-[130px] px-[20px] justify-center items-center mx-auto">
        <h1 className={'text-[36px] mt-[25px] flex-wrap justify-center mb-[50px] font-medium flex gap-4'}>
          {t('Select')}
          <span className={'uppercase text-[#02A0A0] text-center'}>{t('renting')}</span>
          {t('Category')}
        </h1>
        <div className={'flex flex-wrap gap-[40px] justify-center'}>
          {categories.map((category, index) => (
            <Link key={index} to={`/renting/${category.category}`} className={'bg-[#F2F2F2] w-full min-[846px]:max-w-[350px] rounded-[15px] flex flex-col justify-center items-center gap-[10px] p-[15px]'}>
              <div className={'min-[350px]:h-[250px] min-[400px]:h-[326px] h-[200px] w-full px-[20px] rounded-[15px] flex items-center justify-center  bg-white'}>
                <img src={category.image} alt="Image" className={'max-h-[200px]'} />
              </div>
              <span className={'mb-[5px] text-[24px] sm:text-[32px] font-medium'}>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default RentingCategories;
