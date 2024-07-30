import {ReactNode} from "react";
import Header from "@/components/header/Header.tsx";
import Footer from "@/components/Footer.tsx";
import Label from "@/components/header-label/Label.tsx";

interface DefaultLayoutProps {
  children: ReactNode;

}

const DefaultLayout = ({children}: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <Label />
        {children}
      <Footer />
    </>
  )
}

export default DefaultLayout;