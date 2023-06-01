import React from "react";
import SectionName from "../atoms/SectionName";
import SectionTitle from "../atoms/SectionTitle";
import InsightCard from "../atoms/InsightCard";
import { insights } from "@/constants";

const Insight = () => {
  return (
    <section id="Insight" className="xPaddings sectionMargin-top">
      <SectionName name="Insight" className="text-center" />
      <SectionTitle className="mt-2 text-center">
        Insight about metaverse
      </SectionTitle>
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight) => (
          <InsightCard key={insight.id} {...insight} />
        ))}
      </div>
    </section>
  );
};

export default Insight;
