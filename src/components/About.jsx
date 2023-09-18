import React from "react";
import Img from "../img/band.png";
import Compon from "./Compon";

export default function About() {
  const info = {
    title: "Nike Sport Band. Light. Flexible. Breathable.",
    text: `Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations.`,
    link: "BUY NOW",
  };
  return (
    <div>
      <div class="info" id="offers">
        <div class="container info__container">
          <Compon title={info.title} text={info.text} link={info.link} />

          <div class="info__img-box">
            <img class="info__img" src={Img} alt="Band" />
          </div>
        </div>
      </div>
    </div>
  );
}
