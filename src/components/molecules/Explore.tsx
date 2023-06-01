"use client";
import React, { useState } from "react";
import SectionName from "../atoms/SectionName";
import SectionTitle from "../atoms/SectionTitle";
import ExploreCard from "../atoms/ExploreCard";
import { exploreWorlds } from "@/constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section id="explore" className="xPaddings mx-auto sectionMargin-top">
      <SectionName name="The World" className="text-center" />
      <SectionTitle className="max-w-[885px] mx-auto text-center mt-2">
        Choose the world you want to explore
      </SectionTitle>
      <div className="grid md:grid-cols-6 gap-[30px] mt-[50px]">
        {exploreWorlds.map((world) => (
          <ExploreCard
            {...world}
            key={world.id}
            img={world.img}
            active={active}
            className={`${active === world.id && "md:col-span-2"}`}
            setActive={() => setActive(world.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
