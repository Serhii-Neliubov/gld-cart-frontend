import React, {useEffect, useState} from 'react';
import styles from './ProductPage.module.scss';
import Footer from '../../../components/Footer/Footer';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {userDataSelector} from "../../../store/slices/userDataSlice.ts";
import $api, {API_URL} from "../../../utils/interceptors.ts";

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
    const params = useParams();
    const user = useSelector(userDataSelector);

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async() => {
        const response = await $api.get(`${API_URL}/products/${params.id}`);
        setProduct(response.data);
    }

    const addToCartHandler = async() => {
        await $api.post(`${API_URL}/cart/add-item`, {
            userId: user.id,
            item: {
                productId: product?._id,
            }
        });
    }

    const addToWishlistHandler = async() => {
        await $api.post(`${API_URL}/wishlist`, {
            userId: user.id,
            productId: product?._id,
        });
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
                                <img src='../../../assets/ProductPage/imageProduct.png' alt=''/>
                                <img src='../../../assets/ProductPage/imageProduct.png' alt=''/>
                                <img src='../../../assets/ProductPage/imageProduct.png' alt=''/>
                                <img src='../../../assets/ProductPage/imageProduct.png' alt=''/>
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
                                <img src='../../../assets/ProductPage/fireIcon.png' alt='image'/>
                                <span>Flash Sale: Ends in 5 days</span>
                            </div>
                            <div className={styles.actionButtons}>
                                <span>Quantity</span>
                                <div className={styles.addToCart}>
                                    <input max="9" min='0' type='number' placeholder='1'/>
                                    <button onClick={addToCartHandler}>Add to Cart</button>
                                </div>
                            </div>
                            <button className={styles.buyNow}>Buy Now</button>
                            <div onClick={addToWishlistHandler} className={styles.addToWishlist}>
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
                                <img src='../../../assets/ProductPage/social1.png' alt='icon'/>
                                <img src='../../../assets/ProductPage/social2.png' alt='icon'/>
                                <img src='../../../assets/ProductPage/social3.png' alt='icon'/>
                                <img src='../../../assets/ProductPage/social4.png' alt='icon'/>
                            </div>
                            <div className={styles.returnTipText}>
                                <p>30 days easy returns</p>
                                <p>Order yours before 2.30pm for same day dispatch</p>
                            </div>
                            <div className={styles.guaranteedSafe}>
                                <p>Guaranteed safe & secure checkout</p>
                                <img src='../../../assets/ProductPage/paymentMethods.png' alt='icon'/>
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
                                    <img src='../../../assets/ProductPage/imageProduct.png' alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src='../../../assets/HomePage/saved/shopping_cart.svg' alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src='../../../assets/ProductPage/imageProduct.png' alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src='../../../assets/HomePage/saved/shopping_cart.svg' alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src='../../../assets/ProductPage/imageProduct.png' alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src='../../../assets/HomePage/saved/shopping_cart.svg' alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src='../../../assets/ProductPage/imageProduct.png' alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src='../../../assets/HomePage/saved/shopping_cart.svg' alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src='../../../assets/ProductPage/imageProduct.png' alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src='../../../assets/HomePage/saved/shopping_cart.svg' alt=''/>
                                    Move to cart
                                </button>
                            </div>
                            <div className={styles.relatedItem}>
                                <div>
                                    <img src='../../../assets/ProductPage/imageProduct.png' alt='image'/>
                                </div>
                                <span>$99.50</span>
                                <p>Revitalize nourish and soothe lips.</p>
                                <button>
                                    <img src='../../../assets/HomePage/saved/shopping_cart.svg' alt=''/>
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