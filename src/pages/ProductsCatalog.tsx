import {useState} from "react";
import {t} from "i18next";
import {Link} from "react-router-dom";

import {ProductsList} from "components/buyer-products/ProductsList.tsx";
import {ProductsFilter} from "components/buyer-products/ProductsFilter.tsx";

const ProductsCatalog = () => {

  const [products, setProducts] = useState([]);

  return (
    <div className={'flex flex-col py-[100px] gap-[20px] mx-auto max-w-[1255px]'}>
      <h1 className={'sm:text-[40px] text-[32px] font-semibold'}>{t('Shop Grid')}</h1>
      <div className={'flex mb-[20px] sm:mb-[20px] items-center gap-[20px] after:absolute after:w-[8px] after:h-[8px] after:top-[50%] after:translate-y-[-50%] after:rounded-full relative after:left-[53px] after:bg-[#A8ACB0]'}>
        <Link to={'/'} className={'text-[#55585B] hover:underline'}>{t('Home')}</Link>
        <span className={'text-[#55585B]'}>{t('Shop Grid')}</span>
      </div>

      <div className={'flex gap-[20px]'}>
        <ProductsFilter />
        <ProductsList />
      </div>
    </div>
  )
}

export default ProductsCatalog;