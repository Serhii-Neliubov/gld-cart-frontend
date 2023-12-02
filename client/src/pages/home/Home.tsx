import { FC, useEffect } from "react";
import HomeMain from "../../components/Home/HomeMain";
import Footer from "../../components/UI/Footer";

const Home: FC = () => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeMain />
      <Footer />
    </>
  );
};

export default Home;
