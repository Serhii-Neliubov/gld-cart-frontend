import React, { useState } from "react";

import {BurgerMenu} from "@/components/header/BurgerMenu.tsx";
import {HeaderBar} from "@/components/header/HeaderBar.tsx";
import {HeaderNav} from "@/components/header/HeaderNav.tsx";

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <HeaderBar />
      <HeaderNav setBurgerMenuOpen={setIsBurgerMenuOpen} />

      {
        isBurgerMenuOpen && <BurgerMenu setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
      }
    </>
  );
};

export default Header;
