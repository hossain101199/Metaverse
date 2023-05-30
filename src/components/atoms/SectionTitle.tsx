import React from "react";

const SectionTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`font-bold text-[64px] text-white ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
