import React from "react";
import BoldParagraph from "./BoldParagraph";
import NormalParagraph from "./NormalParagraph";

const NewFeatures = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.JSX.Element;
  title: string;
  subtitle: string;
}) => {
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
