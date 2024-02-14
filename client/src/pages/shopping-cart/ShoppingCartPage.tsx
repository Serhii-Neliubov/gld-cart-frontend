import React, {useEffect, useState} from "react";
import styles from "./ShoppingCartPage.module.scss";
import Footer from "../../components/Footer/Footer.tsx";
import { FC } from "react";
import NoItems from "../../components/NoItems/NoItems.tsx";
import {ShoppingCartWindow} from "./components/ShoppingCartWindow.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "../../redux/slices/userDataSlice.ts";
import $api, {API_URL} from "../../lib/http.ts";

export type cartItem = {
    "productId": {
        "reviews": [],
        "_id": string,
        "product_name": string,
        "category": string,
        "subcategory": string,
        "description": string,
        "images": string[],
        "attributes": object,
    },
    "quantity": number,
    "_id": string,
    "createdAt": string,
    "updatedAt": string
}

const ShoppingCartPage: FC = () => {
    const [cartItems, setCartItems] = useState<cartItem[]>([]);
    const user = useSelector(userDataSelector);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCartItems();
    }, []);

    const getCartItems = async () => {
        try {
            const response = await $api.get(`${API_URL}/cart/user/${user.id}`);
            setCartItems(response.data.items);
            console.log(response.data)
            setLoading(false);
        } catch (error) {
            console.error("Error fetching cart items:", error);
            setLoading(false);
        }
    };

    return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1>Shopping Cart</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Shopping Cart</span>
          </div>
            {loading ? (
                <p>Loading...</p>
            ) : cartItems?.length ? (
                <ShoppingCartWindow setCartItems={setCartItems} cartItems={cartItems} />
            ) : (
                <NoItems title="No Cart Items Found" />
            )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ShoppingCartPage;
