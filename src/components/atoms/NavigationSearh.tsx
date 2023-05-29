import CrossIcon from "@/assets/svgs/CrossIcon";
import SearchIcon from "@/assets/svgs/SearchIcon";
import React from "react";

interface NavigationSearchProps {
  setIsSearchOn: (isSearchOn: boolean) => void;
  isSearchOn: boolean;
}

const NavigationSearch: React.FC<NavigationSearchProps> = ({
  setIsSearchOn,
  isSearchOn,
}) => {
  return (
    <div className="justify-self-start flex items-center gap-2 w-full">
      <button onClick={() => setIsSearchOn(!isSearchOn)}>
        {isSearchOn ? <CrossIcon /> : <SearchIcon />}
      </button>
      <form className={`${!isSearchOn && "hidden"} h-fit w-full`}>
        <input className="outline-none bg-transparent border-white border-2 rounded-full text-white px-4 h-fit w-full" />
      </form>
    </div>
  );
};

export default NavigationSearch;
