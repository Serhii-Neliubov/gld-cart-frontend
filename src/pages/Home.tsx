import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
