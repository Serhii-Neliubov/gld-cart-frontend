import { FC, useEffect } from "react";
import HomeMain from "../../components/Home/HomeMain";

const Home: FC = ({ shoppingCart, setShoppingCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeMain shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
    </>
  );
};

export default Home;
