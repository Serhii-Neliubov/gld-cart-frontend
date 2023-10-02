import { FC, useEffect } from "react";
import HomeMain from "../../components/Home/HomeMain";
import Footer from "../../components/UI/Footer";

const Home: FC = ({ shoppingCart, setShoppingCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeMain shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Footer />
    </>
  );
};

export default Home;
