import { FC, useEffect } from "react";
import Header from "../../components/UI/Header";
import HomeMain from "../../components/Home/HomeMain";
import Footer from "../../components/UI/Footer";

const Home: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HomeMain />
      <Footer />
    </>
  );
};

export default Home;
