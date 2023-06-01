import React from "react";

interface SectionNameProps {
  name: string;
  className?: string;
}

const SectionName: React.FC<SectionNameProps> = ({ name, className }) => {
  return (
    <h3 className={`font-normal text-sm text-secondary-white ${className}`}>
      I {name}
    </h3>
  );
};

export default SectionName;
