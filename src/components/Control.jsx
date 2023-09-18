import React from "react";
import Compon from "./Compon";

export default function Control() {
  const info = {
    title: "Take control of your health.",
    text: `With built-in GPS and altimeter, Apple Watch Nike+ has all the features to help you take your run to the next level. You can even pair your watch wirelessly with compatible gym equipment. And it’s swimproof, so you can take a post-run dip in the pool.`,
    link: "EXPLORE FEATURES",
  };
  return (
    <div>
      <div class="filter"></div>
      <div class="control" id="services">
        <div class="container control__container">
          <Compon title={info.title} text={info.text} link={info.link}/>
      
        </div>
      </div>
    </div>
  );
}
