"use client";
import Link from "next/link";
import { useState } from "react";
import NavigationMenu from "@/components/molecules/NavigationMenu";
import NavigationSearch from "@/components/atoms/NavigationSearh";

const Navbar = () => {
  const [isSearchOn, setIsSearchOn] = useState(false);

  return (
    <nav
      className={`text-secondary-white grid justify-items-stretch content-center ${
        isSearchOn ? "grid-cols-1 md:grid-cols-3" : "grid-cols-3"
      } gap-4 py-9 `}
    >
      <NavigationSearch setIsSearchOn={setIsSearchOn} isSearchOn={isSearchOn} />

      <Link
        href="/"
        className={`text-white font-extrabold text-2xl justify-self-center ${
          isSearchOn && "hidden md:block"
        }`}
      >
        METAVERSUS
      </Link>

      <NavigationMenu isSearchOn={isSearchOn} />
    </nav>
  );
};

export default Navbar;
