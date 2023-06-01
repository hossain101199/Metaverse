import React from "react";
import SectionName from "../atoms/SectionName";
import SectionTitle from "../atoms/SectionTitle";
import map from "../../assets/images/map.png";
import Image from "next/image";

const PeopleOnTheWorld = () => {
  return (
    <section id="PeopleOnTheWorld" className="xPaddings sectionMargin-top">
      <SectionName name="People on the World" className="text-center" />
      <SectionTitle className="mt-2 text-center">
        Track friends around you and invite them to play together in the same
        world
      </SectionTitle>
      <div className="mt-[68px]">
        <Image src={map} alt="map" />
      </div>
    </section>
  );
};

export default PeopleOnTheWorld;
