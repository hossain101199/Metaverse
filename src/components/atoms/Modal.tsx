import { motion, Variants } from "framer-motion";

const dropIn: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface ModalProps {
  handleClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ handleClose, className, children }) => {
  return (
    <motion.div
      onClick={handleClose}
      className="absolute top-0 left-0 h-full w-full bg-[#000000e1] flex items-center justify-center"
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
