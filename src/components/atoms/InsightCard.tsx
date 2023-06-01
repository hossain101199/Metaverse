import Image, { StaticImageData } from "next/image";
import React from "react";
import planet from "../../assets//images/planet-06.png";
import NormalParagraph from "./NormalParagraph";
import Link from "next/link";
import RightArrow from "@/assets/svgs/RightArrow";

const InsightCard = ({
  imgUrl,
  title,
  subtitle,
  href,
}: {
  href: string;
  imgUrl: StaticImageData;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="grid grid-cols-5 xl:grid-cols-7 gap-8 lg:gap-16 items-center">
      <Image
        src={imgUrl}
        alt=""
        className="roundedRadius col-span-5 xl:col-span-2 h-full object-cover"
      />
      <div className="col-span-3 md:col-span-4">
        <NormalParagraph
          textColor="text-white"
          className="text-2xl lg:text-[42px]"
        >
          {title}
        </NormalParagraph>
        <NormalParagraph className="lg:text-xl">{subtitle}</NormalParagraph>
      </div>
      <Link href={href} className="col-span-2 md:col-span-1">
        <RightArrow />
      </Link>
    </div>
  );
};

export default InsightCard;
