import Container from "@/components/atoms/Container";
import NormalParagraph from "@/components/atoms/NormalParagraph";
import WebTitle from "@/components/atoms/WebTitle";
import { socialMedia } from "@/constants";
import styles from "@/styles";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.xPaddings}`}>
      <hr className="w-full border-secondary-white" />
      <div className="py-[50px] flex flex-col md:flex-row gap-9 justify-between items-center">
        <WebTitle />
        <NormalParagraph className="text-sm text-center">
          Copyright © {year} Metaversus. All rights reserved.
        </NormalParagraph>
        <div className="flex gap-8">
          {socialMedia.slice(0, 4).map((media) => (
            <Link key={media.id} href={media.href}>
              <media.icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
