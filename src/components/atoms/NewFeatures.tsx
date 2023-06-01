import React, { ReactElement } from "react";
import BoldParagraph from "./BoldParagraph";
import NormalParagraph from "./NormalParagraph";

interface NewFeaturesProps {
  icon: ReactElement;
  title: string;
  subtitle: string;
}

const NewFeatures: React.FC<NewFeaturesProps> = ({ icon, title, subtitle }) => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[70px] min-w-[70px] max-h-[70px] max-w-[70px] roundedRadius bg-white-opacity-8">
        {icon}
      </div>
      <BoldParagraph textColor="text-white" className="text-2xl mt-6">
        {title}
      </BoldParagraph>
      <NormalParagraph className="mt-4">{subtitle}</NormalParagraph>
    </div>
  );
};

export default NewFeatures;
