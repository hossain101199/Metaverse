import React, { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
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
