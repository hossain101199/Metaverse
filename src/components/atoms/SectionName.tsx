import React from "react";

const SectionName = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <h3 className={`font-normal text-sm text-secondary-white ${className}`}>
      I {name}
    </h3>
  );
};

export default SectionName;
