import React, { useState } from "react";
import Modal from "../atoms/Modal";
import { NavigationRoutes } from "@/constants";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import MenuIcon from "@/assets/svgs/MenuIcon";

const NavigationMenu = ({ isSearchOn }: { isSearchOn: boolean }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        className={`justify-self-end ${isSearchOn && "hidden md:block"}`}
        onClick={() => setModalOpen(!modalOpen)}
      >
        <MenuIcon />
      </button>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            handleClose={() => setModalOpen(!modalOpen)}
            className="flex flex-col bg-primary-black text-white p-16 rounded-lg"
          >
            {NavigationRoutes.map((route) => (
              <Link key={route.id} href={route.href}>
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
