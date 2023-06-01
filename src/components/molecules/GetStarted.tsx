import Image from "next/image";
import React from "react";
import getStarted from "../../assets/images/get-started.png";
import SectionName from "../atoms/SectionName";
import SectionTitle from "../atoms/SectionTitle";
import StartSteps from "../atoms/StartSteps";
import { startingFeatures } from "@/constants";

const GetStarted = () => {
  return (
    <section
      id="GetStarted"
      className="grid lg:grid-cols-7 xPaddings sectionMargin-top"
    >
      <div className="lg:col-span-4  lg:col-start-4 lg:row-start-1">
        <SectionName name="How Metaverus Works" />
        <SectionTitle>Get started with just a few clicks</SectionTitle>
        <div className="flex flex-col justify-start items-start gap-6 mt-6">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </div>
      <div className="lg:col-span-3 lg:col-start-1 lg:row-start-1 flex items-center">
        <Image alt=" " src={getStarted} />
      </div>
    </section>
  );
};

export default GetStarted;
