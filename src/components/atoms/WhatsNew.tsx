import React from "react";
import SectionName from "./SectionName";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import whatsNew from "../../assets/images/whats-new.png";
import NewFeatures from "./NewFeatures";
import { newFeatures } from "@/constants";

const WhatsNew = () => {
  return (
    <section className="grid lg:grid-cols-7 mt-[50px] lg:mt-[170px] xPaddings">
      <div className="lg:col-span-4">
        <SectionName name="Whats New?" />
        <SectionTitle>What&apos;s new about Metaversus?</SectionTitle>
        <div className="flex gap-11 mt-12">
          {newFeatures.map((feature) => (
            <NewFeatures
              key={feature.title}
              icon={<feature.icon />}
              subtitle={feature.subtitle}
              title={feature.title}
            />
          ))}
        </div>
      </div>
      <div className="lg:col-span-3 flex items-center">
        <Image alt=" " src={whatsNew} />
      </div>
    </section>
  );
};

export default WhatsNew;
