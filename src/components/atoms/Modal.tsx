import { dropIn } from "@/utils/motion";
import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

interface ModalProps {
  handleClose: () => void;
  className?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ handleClose, className, children }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      onClick={handleClose}
      className="absolute z-50 top-0 left-0 h-full w-full bg-[#000000e1] flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={className}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
