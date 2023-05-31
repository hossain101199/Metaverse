import React from "react";
import SectionName from "../atoms/SectionName";
import { socialMedia } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../assets/images/cover.png";
import stamp from "../../assets/images/stamp.png";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="relative z-10 flex flex-col sm:flex-row mt-[40px] md:mt-[84px]">
        <div className="flex w-full sm:pt-[90px] pl-4 lg:justify-end xl:pe-[71px]">
          <SectionName name="Home" />
        </div>
        <div className="flex justify-center items-center flex-col w-full sm:pt-[70px] px-4">
          <h1 className="heroHeading">Metaverse</h1>
          <div className="flex flex-row justify-center items-center">
            <h1 className="heroHeading">Ma</h1>
            <div className="heroDText" />
            <h1 className="heroHeading">Ness</h1>
          </div>
        </div>
        <div className="flex sm:flex-col pr-4 items-end justify-end sm:justify-start sm:pr-9 gap-8 w-full">
          {socialMedia
            .filter((media) =>
              ["Reddit", "Discord", "Twitter", "Instagram"].includes(media.name)
            )
            .sort(
              (a, b) =>
                ["Reddit", "Discord", "Twitter", "Instagram"].indexOf(a.name) -
                ["Reddit", "Discord", "Twitter", "Instagram"].indexOf(b.name)
            )
            .map((media) => (
              <Link key={media.id} href={media.href}>
                <media.icon />
              </Link>
            ))}
        </div>
      </div>
      <div className="relative h-[288px] md:h-[488px] mb-10 lg:pl-[135px]">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-full rounded-tl-[100px] md:rounded-tl-[140px] h-full object-cover absolute top-[-50px]"
        />
        <Image
          src={stamp}
          alt="stamp"
          className="absolute bottom-[-30px] right-[12%]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
