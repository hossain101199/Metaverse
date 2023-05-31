import React from "react";

const SectionTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={`font-bold text-5xl lg:text-[64px] leading-[50px] md:leading-[81px] text-white ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
