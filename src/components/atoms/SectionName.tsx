import React from "react";

const SectionName = ({ name }: { name: string }) => {
  return <h3 className="font-normal text-sm text-secondary-white">I {name}</h3>;
};

export default SectionName;
