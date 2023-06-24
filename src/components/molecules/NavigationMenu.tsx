import React from "react";
import Modal from "../atoms/Modal";
import { NavigationRoutes } from "@/constants";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import MenuIcon from "@/assets/svgs/MenuIcon";
import useModal from "@/hooks/useModal";

interface NavigationMenuProps {
  isSearchOn: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isSearchOn }) => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  return (
    <>
      <button
        className={`justify-self-end ${isSearchOn && "hidden md:block"}`}
        onClick={handleOpenModal}
      >
        <MenuIcon />
      </button>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            className="flex flex-col bg-primary-black text-white p-16 rounded-lg"
          >
            {NavigationRoutes.map((route) => (
              <Link
                key={route.id}
                href={route.href}
                passHref
                onClick={handleCloseModal}
              >
                {route.name}
              </Link>
            ))}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationMenu;
