import { dropIn } from "@/utils/motion";
import { motion } from "framer-motion";

interface ModalProps {
  handleClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ handleClose, className, children }) => {
  return (
    <motion.div
      onClick={handleClose}
      className="absolute z-50 top-0 left-0 h-full w-full bg-[#000000e1] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
