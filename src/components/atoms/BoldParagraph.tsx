import React from "react";

const BoldParagraph = ({
  children,
  textColor = "text-secondary-white",
  className = "",
}: {
  children: React.ReactNode;
  textColor?: string;
  className?: string;
}) => {
  return <p className={`font-bold ${textColor} ${className}`}>{children}</p>;
};

export default BoldParagraph;
