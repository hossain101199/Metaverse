import Image, { StaticImageData } from "next/image";
import React from "react";
import NormalParagraph from "./NormalParagraph";
import Link from "next/link";
import RightArrow from "@/assets/svgs/RightArrow";

interface InsightCardProps {
  href: string;
  imgUrl: StaticImageData;
  title: string;
  subtitle: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  href,
  imgUrl,
  title,
  subtitle,
}) => {
  return (
    <div className="grid grid-cols-5 xl:grid-cols-7 gap-8 lg:gap-16 items-center">
      <Image
        src={imgUrl}
        alt=""
        className="roundedRadius col-span-5 xl:col-span-2 h-full object-cover"
      />
      <div className="col-span-3 sm:col-span-4">
        <NormalParagraph
          textColor="text-white"
          className="text-2xl lg:text-[42px]"
        >
          {title}
        </NormalParagraph>
        <NormalParagraph className="lg:text-xl">{subtitle}</NormalParagraph>
      </div>
      <Link href={href} passHref className="col-span-1 sm:col-span-1">
        <RightArrow className="w-[50px] md:w-[100px]" />
      </Link>
    </div>
  );
};

export default InsightCard;
