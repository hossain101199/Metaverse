"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import HeadsetIcon from "@/assets/svgs/HeadsetIcon";
import NormalParagraph from "./NormalParagraph";
import useModal from "@/hooks/useModal";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import gifImage from "../../../public/Metaverse.gif";
import Image from "next/image";

const EnterMetaverse = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  return (
    <div className="mb-20 flex flex-col md:flex-row justify-between items-center gap-9">
      <SectionTitle>Enter the Metaverse </SectionTitle>
      <button
        onClick={handleOpenModal}
        className="flex justify-center items-center flex-nowrap gap-3 bg-[#25618B] roundedRadius px-8 py-[22px]"
      >
        <HeadsetIcon />
        <NormalParagraph textColor="text-white">
          ENTER METAVERSE
        </NormalParagraph>
      </button>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            className="w-3/4"
          >
            <Image src={gifImage} alt="GIF" className="w-full h-full" />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnterMetaverse;
