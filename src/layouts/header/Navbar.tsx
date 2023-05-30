"use client";
import { useState } from "react";
import NavigationMenu from "@/components/molecules/NavigationMenu";
import NavigationSearch from "@/components/atoms/NavigationSearh";
import Container from "@/components/atoms/Container";
import WebTitle from "@/components/atoms/WebTitle";
import styles from "@/styles";

const Navbar = () => {
  const [isSearchOn, setIsSearchOn] = useState(false);

  return (
    <nav
      className={`text-secondary-white grid justify-items-stretch content-center ${
        isSearchOn ? "grid-cols-1 md:grid-cols-3" : "grid-cols-3"
      } ${styles.xPaddings} gap-4 py-9 `}
    >
      <NavigationSearch setIsSearchOn={setIsSearchOn} isSearchOn={isSearchOn} />

      <WebTitle className={`${isSearchOn && "hidden md:block"}`} />

      <NavigationMenu isSearchOn={isSearchOn} />
    </nav>
  );
};

export default Navbar;
