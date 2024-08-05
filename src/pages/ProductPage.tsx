import {t} from "i18next";
import {Link} from "react-router-dom";
import {useState} from "react";

import UiDescription from "components/ui/UiDescription.tsx";

import imageProduct from "assets/images/ProductPage/imageProduct.png";
import imagePaymentMethods from "assets/images/ProductPage/paymentMethods.png";
import {CiCircleQuestion, CiHeart} from "react-icons/ci";

const ProductPage = () => {
  const [product, setProduct] = useState({
    img: imageProduct,
    id: 1,
    title: 'Product Title',
    category: 'Product Category',
    price: '$100.00',
    reviewsCount: 5,
    description: 'Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description Product Description',
    paymentMethods: imagePaymentMethods,
  });
  const [quantity, setQuantity] = useState(1);

  const addToWishlistHandler = () => {
    try {
      console.log('Add to wishlist');
    } catch (error) {
      console.error(error);
    }
  };

  const addToCartHandler = () => {
    try {
      console.log('Add to cart');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={'bg-white mx-[20px]'}>
      <div className={'max-w-[1255px] mx-auto py-[60px]'}>
        <div className={'flex mb-[25px] sm:mb-[50px] gap-[20px] after:absolute after:w-[8px] after:h-[8px] before:w-[8px] before:h-[8px] after:top-[50%] after:translate-y-[-50%] before:top-[50%] before:translate-y-[-50%] relative after:left-[56px] after:rounded-full after:translate-x-[-50%] after:bg-[#A8ACB0] before:absolute before:left-[147px] before:rounded-full before:translate-x-[-50%] before:bg-[#A8ACB0]'}>
            <Link to={'/'} className={'text-[#55585B] hover:underline'}>{t('Home')}</Link>
            <Link to={'/products'} className={'text-[#55585B] hover:underline'}>{t('Products')}</Link>
            <span className={'text-[#55585B]'}>{product.title}</span>
          </div>
        <div className={'flex gap-2 justify-between'}>
          <div className={'flex gap-2'}>
            <div className={'flex flex-col gap-2'}>
              <div>
                <img src={imageProduct} alt={'Product image'} className={'border border-solid border-black w-[80px] h-[100px] object-cover'} />
              </div>
              <div>
                <img src={imageProduct} alt={'Product image'}
                     className={'border border-solid border-black w-[80px] h-[100px] object-cover'}/>
              </div>
              <div>
                <img src={imageProduct} alt={'Product image'}
                     className={'border border-solid border-black w-[80px] h-[100px] object-cover'}/>
              </div>
            </div>

            <div className={'bg-[#F5F6F8] w-[580px] h-[670px] flex items-center justify-center'}>
              <img src={product.img} alt={'Product image'} className={'w-[400px] h-[400px] object-cover'}/>
            </div>
          </div>
          <div className={'flex flex-col max-w-[460px] gap-4'}>
            <span className={'text-gray-400'}>{product.category}</span>
            <span className={'text-2xl font-semibold'}>{product.title}</span>
            <div className={'flex gap-2 items-center'}>
              <span className={'bg-blue-100 py-2 px-4 text-blue-400'}>{t('In Stock')}</span>
              <span>{product.price}</span>
              <span className={'text-gray-500'}>({product.reviewsCount} Review)</span>
            </div>
            <UiDescription description={product.description}/>
            <span className={'font-semibold text-3xl'}>{product.price}</span>
            <div className={'flex items-end gap-2'}>
              <div className={'flex flex-col gap-2'}>
                <span>{t('Quantity')}</span>
                <div className={'flex gap-4 bg-gray-100 max-w-[120px] py-4 justify-between px-5 items-center'}>
                  <button onClick={() => setQuantity(quantity - 1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
              <div className={'border border-solid border-gray-200 h-[46px] flex items-center justify-center w-full'}>
                {t('Add To Cart')}
              </div>
            </div>
            <div className={'bg-[#02A0A0] text-white h-[46px] justify-center flex items-center px-[100px]'}>
              {t('Buy Now')}
            </div>
            <div className={'flex justify-between pb-6 pt-2 border-b border-solid border-gray-200'}>
              <button onClick={addToWishlistHandler} className={'cursor-pointer flex gap-2 items-center'}>
                <CiHeart className={'w-[20px] h-[20px]'}/>
                {t('Add Wishlist')}
              </button>
              <button onClick={addToCartHandler} className={'cursor-pointer flex gap-2 items-center'}>
                <CiCircleQuestion className={'w-[20px] h-[20px]'}/>
                {t('Ask a question')}
              </button>
            </div>
            <div className={'flex flex-col gap-2'}>
              <div className={'flex items-center gap-2'}>
                <strong>SKU: </strong>
                <span className={'text-gray-400 text-[18px]'}>{product.id}</span>
              </div>
              <div className={'flex items-center gap-2'}>
                <strong>Category: </strong>
                <span className={'text-gray-400 text-[18px]'}>{product.category}</span>
              </div>
              <div className={'flex items-center gap-2'}>
                <strong>Tag: </strong>
                <span className={'text-gray-400 text-[18px]'}>{product.category}</span>
              </div>
            </div>

            <div className={'text-center mt-6 text-gray-500 flex flex-col gap-2'}>
              <span>30 days easy return</span>
              <span>Order yours before 2.30pm for same day dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
