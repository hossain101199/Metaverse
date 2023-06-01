import React, { ReactNode } from "react";

interface BoldParagraphProps {
  children: ReactNode;
  textColor?: string;
  className?: string;
}

const BoldParagraph: React.FC<BoldParagraphProps> = ({
  children,
  textColor = "text-secondary-white",
  className = "",
}) => {
  return <p className={`font-bold ${textColor} ${className}`}>{children}</p>;
};

export default BoldParagraph;
