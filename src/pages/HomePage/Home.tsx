import { FC } from "react";
import Header from "../../components/UI/Header";
import HomeMain from "../../components/Home/HomeMain";
import Footer from "../../components/UI/Footer";

const Home: FC = () => {
  return (
    <>
      <Header />
      <HomeMain />
      <Footer />
    </>
  );
};

export default Home;
