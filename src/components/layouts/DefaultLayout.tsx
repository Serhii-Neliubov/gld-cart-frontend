import {ReactNode} from "react";

import Header from "components/header/Header.tsx";
import Footer from "components/Footer.tsx";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({children}: DefaultLayoutProps) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default DefaultLayout;