import styles from "./Wishlist.module.scss";
import Footer from "@components/footer/Footer";
import NoItems from "@components/no-items-page/NoItems.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "@store/slices/userDataSlice.ts";
import {useQuery} from "@tanstack/react-query";
import {WishlistItem} from "@pages/wishlist/components/WishlistItem.tsx";
import {TypeWishlistItem} from "@models/IWishlistItem.ts";
import WishlistService from "@services/WishlistService.ts";

export default function Wishlist() {
  const user = useSelector(userDataSelector);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["wishlistItems"],
    queryFn: () => WishlistService.getItems(user.id),
  });

  if(!data?.length) {
    return <NoItems title="Wishlist" />
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          <h1>Wishlist</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Wishlist</span>
          </div>
          <div className={styles.content}>
              <div className={styles.productBox}>
                <div className={styles.label}>
                  <span>Product</span>
                  <span>Price</span>
                  <span>Action</span>
                  <span></span>
                </div>
                <div className={styles.productList}>
                  {data.map((item: TypeWishlistItem) => <WishlistItem item={item} key={item._id}/>)}
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}