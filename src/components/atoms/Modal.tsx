import { dropIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      // Add a CSS class to the body element to disable background events
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      // Remove the CSS class from the body element when the modal is closed
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <motion.div
      onClick={onClose}
      className="modal-overlay"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className={className}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default Modal;
