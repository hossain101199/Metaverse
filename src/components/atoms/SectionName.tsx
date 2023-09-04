"use client";
import React from "react";

interface SectionNameProps {
  name: string;
  className?: string;
}

const SectionName: React.FC<SectionNameProps> = ({ name, className }) => {
  return (
    <h3 className={`font-normal text-sm text-secondary-white ${className}`}>
      I{" "}
      {Array.from(name).map((char, index) => (
        <span key={index} style={{ display: "inline-block", width: "auto" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h3>
  );
};

export default SectionName;
