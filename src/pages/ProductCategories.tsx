import {Link} from "react-router-dom";
import {t} from "i18next";

import useDefaultScrollPosition from "hooks/useDefaultScrollPosition.tsx";

import imageCategory1 from "assets/images/Categories/img1.png";
import imageCategory2 from "assets/images/Categories/img2.png";
import imageCategory3 from "assets/images/Categories/img3.png";
import imageCategory4 from "assets/images/Categories/img4.png";
import imageCategory5 from "assets/images/Categories/img5.png";
import imageCategory6 from "assets/images/Categories/img6.png";
import imageCategory7 from "assets/images/Categories/img7.png";
import imageCategory8 from "assets/images/Categories/img8.png";
import imageCategory9 from "assets/images/Categories/img9.png";
import imageCategory10 from "assets/images/Categories/img10.png";
import imageCategory11 from "assets/images/Categories/img11.png";
import imageCategory12 from "assets/images/Categories/img12.png";
import imageCategory13 from "assets/images/Categories/img13.png";
import imageCategory14 from "assets/images/Categories/img14.png";
import imageCategory15 from "assets/images/Categories/img15.png";

const categories = [
  { category: 'beauty', title: "Beauty of Skin", img: imageCategory1, count: "2 products"},
  { category: 'bags', title: "Bags", img: imageCategory2, count: "2 products"},
  { category: 'awesome', title: "Awesome Lip Care", img: imageCategory3, count: "2 products"},
  { category: 'mobileTablets',title: "Mobile Tablets", img: imageCategory4, count: "2 products"},
  { category: 'necklaces',title: "Necklaces", img: imageCategory5, count: "2 products"},
  { category: 'clothing',title: "Clothing", img: imageCategory6, count: "2 products"},
  { category: 'bluetooth',title: "Bluetooth", img: imageCategory7, count: "2 products"},
  { category: 'facial',title: "Facial Care", img: imageCategory8, count: "2 products"},
  { category: 'shoes',title: "Shoes", img: imageCategory9, count: "2 products"},
  { category: 'cpu',title: "CPU", img: imageCategory10, count: "2 products"},
  { category: 'discover', title: "Discover Skincare", img: imageCategory11, count: "2 products"},
  { category: 'headphones', title: "Headphones", img: imageCategory12, count: "3 products"},
  { category: 'bracelets', title: "Bracelets", img: imageCategory13, count: "3 products"},
  { category: 'smartwatch', title: "Smart Watch", img: imageCategory14, count: "3 products"},
  { category: 'earrings', title: "Earrings", img: imageCategory15, count: "3 products"},
];

const ProductsPage = () => {
  useDefaultScrollPosition();

  return (
    <div className={'bg-white py-[50px] sm:py-[100px] mx-[20px] '}>
      <div className={'max-w-[1255px] justify-center items-center xl:items-start mx-auto gap-[10px] sm:gap-[30px] flex flex-col'}>
        <h1 className={'sm:text-[40px] text-[32px]'}>{t('Only Categories')}</h1>
        <div className={'flex mb-[20px] sm:mb-[20px] items-center gap-[20px] after:absolute after:w-[8px] after:h-[8px] after:top-[50%] after:translate-y-[-50%] after:rounded-full relative after:left-[53px] after:bg-[#A8ACB0]'}>
            <Link to={'/'} className={'text-[#55585B] hover:underline'}>{t('Home')}</Link>
            <span className={'text-[#55585B]'}>{t('Only Categories')}</span>
          </div>

        <div className={'flex flex-wrap justify-center xl:justify-start w-full gap-[10px]'}>
          {categories.map((category, index) => (
            <Link to={`/products/${category.category}`} key={index} className={'md:max-w-[306px] cursor-pointer hover:bg-gray-200 transition-all justify-between w-full p-[25px] bg-[#F3F3F3] flex flex-col items-center'}>
              <div className={'max-h-[170px]'}>
                <img src={category.img} alt={category.title} className={'w-[100%] h-[100%] object-cover'}/>
              </div>
              <div className={'flex-col items-center flex gap-[10px]'}>
                <h2 className={'text-[20px] mt-[10px]'}>{category.title}</h2>
                <span className={'text-[14px] text-[#A8ACB0]'}>{category.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
