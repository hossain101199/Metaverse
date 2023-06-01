import React from "react";
import SectionTitle from "./SectionTitle";
import HeadsetIcon from "@/assets/svgs/HeadsetIcon";
import NormalParagraph from "./NormalParagraph";

const EnterMetaverse = () => {
  return (
    <div className="mb-20 flex flex-col md:flex-row justify-between items-center gap-9">
      <SectionTitle>Enter the Metaverse </SectionTitle>
      <button className="flex justify-center items-center flex-nowrap gap-3 bg-[#25618B] roundedRadius px-8 py-[22px]">
        <HeadsetIcon />
        <NormalParagraph textColor="text-white">
          ENTER METAVERSE
        </NormalParagraph>
      </button>
    </div>
  );
};

export default EnterMetaverse;
