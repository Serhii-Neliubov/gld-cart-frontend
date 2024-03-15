import React, {useEffect, useState} from 'react';
import styles from './ProductPage.module.scss';
import Footer from '@/components/footer/Footer';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";

import imageProduct from '@/assets/images/ProductPage/imageProduct.png';
import imageFireIcon from '@/assets/images/ProductPage/fireIcon.png';
import imageSocial1 from '@/assets/images/ProductPage/social1.png';
import imageSocial2 from '@/assets/images/ProductPage/social2.png';
import imageSocial3 from '@/assets/images/ProductPage/social3.png';
import imageSocial4 from '@/assets/images/ProductPage/social4.png';
import imagePaymentMethods from '@/assets/images/ProductPage/paymentMethods.png';
import imageShoppingCart from '@/assets/images/trash-icon.svg';
import Wishlist from "services/WishlistService.ts";
import ShoppingCart from "services/ShoppingCartService.ts";
import {cartItem} from "@/viewes/shopping-cart/ShoppingCartPage.tsx";

type product = {
    "reviews": [],
    "_id": string,
    "product_name": string,
    "category": string,
    "subcategory": string,
    "description": string,
    "images": string[],
    "attributes": object,
}

export const ProductPage = () => {
    const initialText = "joasdojiqwfuiuwquviquivwojqoasdasdasdasdsadvjiojiwqvoijqiowviqwvwfiuqwvuiuqjoasdojiqwfuiuwquviquivwojqoasdasdasdasdsadvjiojiwqvoijqiowviqwvwfiuqwvuiuqjoasdojiqwfuiuwquviquivwojqoasdasdasdasdsadvjiojiwqvoijqiowviqwvwfiuqwvuiuqjoasdojiqwfuiuwquviquivwojqoasdasdasdasdsadvjiojiwqvoijqiowviqwvwfiuqwvuiuqjoasdojiqwfuiuwquviquivwojqoasdasdasdasdsadvjiojiwqvoijqiowviqwvwfiuqwvuiuqjoasdojiqwfuiuwquviquivwojqoasdasdasdasdsadvjiojiwqvoijqiowviqwvwfiuqwvuiuqjoasdojiqwfuiuwquviquivwojqoasdasdasdasdsadvjiojiwqvoijqiowviqwvwfiuqwvuiuq";

    const [showMore, setShowMore] = useState(false);
    const [showDetails, setShowDetails] = useState('description');
    const [product, setProduct] = useState<product>();
    const [shoppingCartProduct, setShoppingCartProduct] = useState<cartItem[]>([]);

    const params = useParams();
    const user = useSelector(userDataSelector);

    useEffect(() => {
        getProductData();

        ShoppingCart.getItems(user.id).then((data) => {
            setShoppingCartProduct(data);
        });
    }, [user.id]);

    const getProductData = async() => {
        const response = await $api.get(`${API_URL}/products/${params.id}`);
        setProduct(response.data);
    }

    return (
        <React.Fragment>
            <div className='__container'>
                <div className={styles.content}>
                    <div className={styles.label}>
                        <span>Home</span>
                        <span>Earrings</span>
                        <span>Diamond Ear rings</span>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.images}>
                            <div className={styles.smallImages}>
                                <img src={imageProduct} alt='Image'/>
                                <img src={imageProduct} alt='Image'/>
                                <img src={imageProduct} alt='Image'/>
                                <img src={imageProduct} alt='Image'/>
                            </div>
                            <div className={styles.bigImage}>
                                <img src={product?.images[0]} alt=''/>
                            </div>
                        </div>
                        <div className={styles.productInfo}>
                            <div className={styles.productTitle}>
                                <span>Earrings</span>
                                <h1>Diamond Ear rings</h1>
                            </div>
                            <div className={styles.inStock}>
                                <div>In-Stock</div>
                                <span>(0 Reviews)</span>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <span
                                    className={styles.description}>{showMore ? initialText : `${initialText.slice(0, 100)}...`}</span>
                                {initialText.length > 100 && (
                                    <button onClick={() => setShowMore((prev) => !prev)} className={styles.seeMoreBtn}>
                                        {showMore ? "See less" : "See more"}
                                    </button>
                                )}
                            </div>
                            <div className={styles.price}>
                                <span>$580</span>
                                <span>$550.00</span>
                            </div>
                            <div className={styles.colorsBox}>
                                <p>Color: </p>
                                <div className={styles.colors}>
                                    <div className={styles.colorCircle}/>
                                    <div className={styles.colorCircle}/>
                                    <div className={styles.colorCircle}/>
                                    <div className={styles.colorCircle}/>
                                    <div className={styles.colorCircle}/>
                                </div>
                            </div>
                            <div className={styles.flashSale}>
                                <img src={imageFireIcon} alt='image'/>
                                <span>Flash Sale: Ends in 5 days</span>
                            </div>
                            {shoppingCartProduct?.findIndex((item) => item.product._id === product?._id) !== -1 ?
                              null : <div className={styles.actionButtons}>
                                  <span>Quantity</span>
                                  <div className={styles.addToCart}>
                                      <input max="9" min='0' type='number' placeholder='1'/>
                                      <button onClick={() => ShoppingCart.addToCart(product?._id, user.id)}>Add to
                                          Cart
                                      </button>
                                  </div>
                              </div>}
                            <button className={styles.buyNow}>Buy Now</button>
                            <div onClick={() => Wishlist.addItem(product?._id, user.id)}
                                 className={styles.addToWishlist}>
                                <span>Add Wishlist</span>
                                <span>Ask a question</span>
                            </div>
                            <div className={styles.productSpecificDetails}>
                                <span>SKU: <p>DEB7SDVX62</p></span>
                                <span>Category: <p>Earrings</p></span>
                                <span>Tag: <p>Earrings</p></span>
                            </div>
                            <div className={styles.socials}>
                                <span>Share:</span>
                                <img src={imageSocial1} alt='icon'/>
                                <img src={imageSocial2} alt='icon'/>
                                <img src={imageSocial3} alt='icon'/>
                                <img src={imageSocial4} alt='icon'/>
                            </div>
                            <div className={styles.returnTipText}>
                                <p>30 days easy returns</p>
                                <p>Order yours before 2.30pm for same day dispatch</p>
                            </div>
                            <div className={styles.guaranteedSafe}>
                                <p>Guaranteed safe & secure checkout</p>
                                <img src={imagePaymentMethods} alt='icon'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productLabelBottom}>
                        <div className={styles.productInfoActionButtons}>
                            <button
                                onClick={() => setShowDetails('description')}
                                className={showDetails === 'description' ?
                                    `${styles.productInfoActionButton} ${styles.productInfoActionButton_active}` :
                                    `${styles.productInfoActionButton}`}>
                                Description
                            </button>
                            <button
                            onClick={() => setShowDetails('additional information')}
                                className={showDetails === 'additional information' ?
                                `${styles.productInfoActionButton} ${styles.productInfoActionButton_active}` :
                                `${styles.productInfoActionButton}`}>
                                Additional Information
                            </button>
                            <button
                                onClick={() => setShowDetails('reviews')}
                                className={showDetails === 'reviews' ?
                                `${styles.productInfoActionButton} ${styles.productInfoActionButton_active}` :
                                `${styles.productInfoActionButton}`}>
                                Reviews (0)
                            </button>
                        </div>
                        <div className={styles.productInfoDetails}>
                            {showDetails === 'description' && <div>
                                <p className={styles.productInfoDescription}>{initialText}</p>
                            </div>}
                            {showDetails === 'additional information' && <div>
                                <span>Weight</span>
                                <p>0.5 kg</p>
                                <span>Dimensions</span>
                                <p>12 x 12 x 12 cm</p>
                            </div>}
                            {showDetails === 'reviews' && <div>123</div>}
                        </div>
                    </div>
                    <div className={styles.relatedProducts}>
                        <span>Next Day Products</span>
                        <h2>Related Products</h2>
                        <div className={styles.relatedItems}>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src={imageProduct} alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src={imageShoppingCart} alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src={imageProduct} alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src={imageShoppingCart} alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src={imageProduct} alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src={imageShoppingCart} alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src={imageProduct} alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src={imageShoppingCart} alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src={imageProduct} alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src={imageShoppingCart} alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src={imageProduct} alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src={imageShoppingCart} alt=''/>
                                    Move to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>

    )
}