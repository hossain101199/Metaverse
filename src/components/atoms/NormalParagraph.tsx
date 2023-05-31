import React from "react";

const NormalParagraph = ({
  children,
  textColor = "text-secondary-white",
  className = "",
}: {
  children: React.ReactNode;
  textColor?: string;
  className?: string;
}) => {
  return (
    <p className={`font-normal leading-[180%] ${textColor} ${className}`}>
      {children}
    </p>
  );
};

export default NormalParagraph;
