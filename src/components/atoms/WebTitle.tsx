import Link from "next/link";
import React from "react";

const WebTitle = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`text-white font-extrabold text-2xl justify-self-center ${className}`}
    >
      METAVERSUS
    </Link>
  );
};

export default WebTitle;
