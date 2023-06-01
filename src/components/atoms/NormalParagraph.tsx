import React, { ReactNode } from "react";

interface NormalParagraphProps {
  children: ReactNode;
  textColor?: string;
  className?: string;
}

const NormalParagraph: React.FC<NormalParagraphProps> = ({
  children,
  textColor = "text-secondary-white",
  className = "",
}) => {
  return (
    <p className={`font-normal leading-[180%] ${textColor} ${className}`}>
      {children}
    </p>
  );
};

export default NormalParagraph;
