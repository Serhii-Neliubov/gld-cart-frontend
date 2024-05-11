import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { userDataSelector } from '@/store/slices/userDataSlice.ts';
import ShoppingCart from '@/services/ShoppingCartService.ts';
import imageSavedItem1 from '@/assets/images/HomePage/saved/img1.png';
import toast from "react-hot-toast";

export type SavedItem = {
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
    quantity: number,
}

export const SavedItem = () => {
    const { t } = useTranslation();
    const user = useSelector(userDataSelector)

  const SavedItems: SavedItem[] = [
    {
      id: '1',
      title: 'Iphone 12',
      image: imageSavedItem1,
      price: 99.50,
      description: t("GoPro HERO6 4K Action Camera - Black"),
      quantity: 1,
    },
    {
      id: '2',
      title: 'Iphone 13',
      image: imageSavedItem1,
      price: 99.50,
      description: t("GoPro HERO6 4K Action Camera - Black"),
      quantity: 1,
    },
    {
      id: '3',
      title: 'Iphone 14',
      image: imageSavedItem1,
      price: 99.50,
      description: t("GoPro HERO6 4K Action Camera - Black"),
      quantity: 1,
    },
    {
      id: '4',
      title: 'Iphone 15',
      image: imageSavedItem1,
      price: 99.50,
      description: t("GoPro HERO6 4K Action Camera - Black"),
      quantity: 1,
    },
  ];

  async function sendCartItemHandler (item: SavedItem) {
      if(!user.id) {
        return toast.error("You need to login to add items to cart")
      }

      try {
        await ShoppingCart.addToCart(item.id, user.id, 1)
      } catch (e){
        console.log(e)
      }
    }

    return (
        SavedItems.map((item, index) => {
          return (
            <div key={index} className="saved__item">
              <div className='saved__item_image'>
                <img
                  src={item.image}
                  alt='image'
                />
              </div>
              <div className="saved_item-price">{item.title}</div>
              <span className="saved__price">${item.price}</span>
              <p className="saved__desc">{item.description}</p>
              <button onClick={() => sendCartItemHandler(item)}
                      className="saved__button">{t("Move to cart")}</button>
            </div>
          );
        })
    )
}