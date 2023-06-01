import Link from "next/link";
import React from "react";

interface WebTitleProps {
  className?: string;
}

const WebTitle: React.FC<WebTitleProps> = ({ className }) => {
  return (
    <Link
      href="/"
      passHref
      className={`text-white font-extrabold text-2xl justify-self-center ${className}`}
    >
      METAVERSUS
    </Link>
  );
};

export default WebTitle;
