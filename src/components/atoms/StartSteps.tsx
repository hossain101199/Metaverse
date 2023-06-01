import React from "react";
import NormalParagraph from "./NormalParagraph";
import BoldParagraph from "./BoldParagraph";

interface StartStepsProps {
  number: string;
  text: string;
}

const StartSteps: React.FC<StartStepsProps> = ({ number, text }) => {
  return (
    <div className="flex justify-center items-center gap-[30px]">
      <div className="flex justify-center items-center min-h-[70px] min-w-[70px] roundedRadius bg-white-opacity-8">
        <BoldParagraph className="text-xl" textColor="text-white">
          {number}
        </BoldParagraph>
      </div>
      <NormalParagraph className="text-lg">{text}</NormalParagraph>
    </div>
  );
};

export default StartSteps;
