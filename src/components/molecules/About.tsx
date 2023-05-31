import React from "react";
import SectionName from "../atoms/SectionName";
import BoldParagraph from "../atoms/BoldParagraph";
import DownArrow from "@/assets/svgs/DownArrow";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center mx-auto xPaddings mt-[127px] md:mt-[255px]"
    >
      <SectionName name="About Metaverus" className="text-center" />
      <BoldParagraph className="text-center leading-[1.8] text-2xl lg:text-[32px] mt-2 mb-7">
        <span className="text-white">Metaverse</span> is a new thing in the
        future, where you can enjoy the virtual world by feeling like it&apos;s
        really real, you can feel what you feel in this metaverse world, because
        this is really the{" "}
        <span className="text-white">madness of the metaverse</span> of today,
        using only <span className="text-white">VR</span> devices you can easily
        <span className="text-white">explore</span>explore the metaverse world
        you want, turn your dreams into reality. Let&apos;s explore the madness
        of the metaverse by scrolling down
      </BoldParagraph>
      <DownArrow />
    </section>
  );
};

export default About;
