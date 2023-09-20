import { FC } from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import HomeMain from "../components/Home/HomeMain";

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
