import React from "react";
import BoldParagraph from "./BoldParagraph";
import HeadsetIcon from "@/assets/svgs/HeadsetIcon";
import NormalParagraph from "./NormalParagraph";
import { StaticImageData } from "next/image";

interface ExploreCardProps {
  id: string;
  className?: string;
  img: StaticImageData;
  active: string;
  setActive: () => void;
  title: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  id,
  className,
  img,
  active,
  setActive,
  title,
}) => {
  return (
    <div
      onClick={setActive}
      style={{
        backgroundImage: `url("${img.src}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
      className={`relative md:h-[563px] roundedRadius p-[32px] flex flex-col justify-end gap-4 overflow-hidden cursor-pointer ${className}`}
    >
      <div className={`flex flex-col gap-6 ${active !== id && "md:hidden"}`}>
        <div className="w-[60px] h-[60px] bg-transparent backdrop-blur-3xl roundedRadius flex justify-center items-center">
          <HeadsetIcon />
        </div>
        <button>
          <NormalParagraph textColor="text-white" className="text-start">
            ENTER METAVERSE
          </NormalParagraph>
        </button>
      </div>
      <BoldParagraph
        textColor="text-white"
        className={`text-[32px] ${active !== id && "text-mode"}`}
      >
        {title}
      </BoldParagraph>
    </div>
  );
};

export default ExploreCard;
