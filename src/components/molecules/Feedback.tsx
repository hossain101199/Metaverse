import React from "react";
import BoldParagraph from "../atoms/BoldParagraph";
import NormalParagraph from "../atoms/NormalParagraph";
import Image from "next/image";
import planet from "../../assets/images/planet-09.png";
import stamp from "../../assets/images/stamp.png";

const Feedback = () => {
  return (
    <section
      id="Feedback"
      className="xPaddings grid lg:grid-cols-5 gap-8 sectionMargin-top"
    >
      <div className="relative roundedRadius border-[1px] border-[#6A6A6A] bg-gradient p-[30px] lg:col-span-2">
        <BoldParagraph
          textColor="text-white"
          className="text-[32px] lg:mt-[133px]"
        >
          Samantha
        </BoldParagraph>
        <NormalParagraph textColor="text-white" className="text-lg">
          Founder Metaverus
        </NormalParagraph>
        <NormalParagraph textColor="text-white" className="text-2xl">
          “With the development of today&apos;s technology, metaverse is very
          useful for today&apos;s work, or can be called web 3.0. by using
          metaverse you can use it as anything”
        </NormalParagraph>
        <Image
          alt="planet"
          src={stamp}
          className="absolute right-[10%] bottom-[-95px] lg:top-10 lg:right-[-95px]"
        />
      </div>
      <Image
        alt="planet"
        src={planet}
        className="roundedRadius lg:col-span-3 h-full object-cover"
      />
    </section>
  );
};

export default Feedback;
