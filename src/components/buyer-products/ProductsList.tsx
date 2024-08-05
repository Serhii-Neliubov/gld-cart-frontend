import {IoAppsOutline, IoMenu} from "react-icons/io5";
import {t} from "i18next";
import {useState} from "react";
import {LuSettings2} from "react-icons/lu";
import {Link, useParams} from "react-router-dom";

interface ProductsListProps {
  products: {
    img: string;
    category: string;
    title: string;
    price: string;
    id: number;
  }[]
}

export const ProductsList = ({products}: ProductsListProps) => {
  const { category } = useParams();

  const [maxProducts, setMaxProducts] = useState(20);
  const [showedProducts, setShowedProducts] = useState(12);

  return (
    <div className={'bg-white w-full'}>
      <div className={'flex justify-between items-center gap-2'}>
        <div className={'flex items-center gap-2'}>
          <div className={'cursor-pointer border border-solid p-2 flex gap-5'}>
            <IoAppsOutline className={'w-[20px] h-[20px]'}/>
          </div>
          <div className={'cursor-pointer border border-solid border-gray-400 p-2 flex gap-5'}>
            <IoMenu className={'w-[20px] h-[20px] text-gray-400'}/>
          </div>
          <div className={'ml-4'}>
            {t('Showing')} 1–{showedProducts} {t('of')} {maxProducts} {t('results')}
          </div>
        </div>
        <div className={'flex gap-2'}>
          <select className={'border px-[5px] outline-none bg-gray-100 flex gap-4 border-solid border-gray-400 p-2'}>
            <option value={'default'}>Default Sorting</option>
            <option value={'by title'}>Sorting by title</option>
            <option value={'by body'}>Sorting by body</option>
          </select>

          <button className={'flex gap-1 items-center justify-center bg-black text-white px-[30px]'}>
            <LuSettings2 />
            <span>{t('Filter')}</span>
          </button>
        </div>
      </div>
      <div className={'mt-6 flex justify-between flex-wrap gap-y-[150px]'}>
        {products.map((product, index) => (
            <Link to={`/products/${category}/${product.id}`} key={index} className={'cursor-pointer flex flex-col gap-2 w-[30%] h-[400px]'}>
              <img src={product.img} alt={product.title} className={'w-full h-full object-cover'}/>
              <span className={'text-gray-400 text-[14px]'}>{product.category}</span>
              <span className={'font-medium text-[18px]'}>{product.title}</span>
              <span className={'font-medium text-[18px] text-green-700'}>{product.price}</span>
            </Link>
          )
        )}
      </div>
    </div>
  )
}