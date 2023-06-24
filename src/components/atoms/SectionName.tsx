"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/motion";

interface SectionNameProps {
  name: string;
  className?: string;
}

const SectionName: React.FC<SectionNameProps> = ({ name, className }) => {
  return (
    <motion.h3
      initial={{ opacity: 0 }} // Initial state (hidden)
      animate={{ opacity: 1 }} // Animation state (visible)
      transition={{ duration: 0.5 }} // Transition duration (in seconds)
      className={`font-normal text-sm text-secondary-white ${className}`}
    >
      I{" "}
      {Array.from(name).map((char, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", width: "auto" }}
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 2 }} // Animation state (visible)
          transition={{ delay: index * 0.1 }} // Delay between each character (in seconds)
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default SectionName;
