import React, { FC } from "react";
import Header from "./Header";
import Label from "../Home/HomeElements/Label";
import Footer from "./Footer";

interface PageStructureProps {
  children: React.ReactNode;
}

const PageStructure: FC<PageStructureProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Label />
      {children}
      <Footer />
    </>
  );
};

export default PageStructure;
