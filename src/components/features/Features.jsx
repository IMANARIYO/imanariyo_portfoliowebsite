import Card from "./Card";
import React from "react";
import Title from "../layouts/Title";
import { featuresData } from "../../data/data";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black  "
    >
      <div className="flex items-center justify-center text-center">
      <Title title="Features" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-3 xl:grid-cols-3 xl:gap-20">
       
        {featuresData.map((item) => (
          <Card item={item} key={item.id} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default Features;
