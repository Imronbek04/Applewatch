import React from "react";
import Img10 from "../img/watch.png"
import Compon from "./Compon";


export default function Hero() {
  const info = {
    title: "Freedom calls.",
    text:`Answer a call from your surfboard. Ask Siri to send a message.
    Stream your favorite songs on your run. And do it all while
    leaving your phone behind. Introducing Apple Watch Series 3 with
    cellular. Now you have the freedom to go with just your watch.`,
    link:"Watch the keynote"
  }
  return (
    <div>
      <div className="hero" id="home">
        <div className="container hero__container">
        <Compon title={info.title} text={info.text} link={info.link}/>

          <div className="hero__box">
            <img src={Img10} alt="Watch" className="hero__img" />
          </div>
        </div>
      </div>
    </div>
  );
}
