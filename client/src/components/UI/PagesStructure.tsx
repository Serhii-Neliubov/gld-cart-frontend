import React from "react";
import Header from "./Header";
import Label from "../Home/HomeElements/Label";
import Footer from "./Footer";

interface PageStructureProps {
  children: React.ReactNode;
}

const PageStructure = ({ children, shoppingCart }: PageStructureProps) => {
  return (
    <>
      <Header />
      <Label shoppingCart={shoppingCart} />
      {children}
      <Footer />
    </>
  );
};

export default PageStructure;
