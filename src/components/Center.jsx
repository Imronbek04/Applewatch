import React from "react";
import Img5 from "../img/img5.jpg";

export default function Center() {
  let arr = [
    {
      id: 1,
      title: "Know your runs. In and out.",
      text: `Train smarter with more in-run stats. Want to compare a run to
        your last five? Just swipe left. Mark splits by selecting pause or
        using gestures, like tapping the screen or double-clicking the
        side button. And get a full post-run report, including elevation.`,
      img: Img5,
    },
    {
      id: 2,
      title: "Run in good spirits.",
      text: `A little support can go a long way. You can receive encouraging
        emoji from friends. And reminders triggered by your friends’
        shared activity, the current weather, or your own history give you
        every reason to run.`,
      img: Img5,
    },
    {
      id: 3,
      title: "Just do it. Sunday.",
      text: `Run every Sunday and see how long you can keep your streak alive.
        Fuel your run with exclusive Nike+ Run Club playlists on Apple
        Music.`,
      link: "learn more",
    },
  ];

  return (
    <div>
      <div class="spirit" id="about">
        <div class="container spirit__container">
          {arr.map((item) => {
            return (
              <div key={item.id}>
                <div class="card">
                  <h2 class="card__title">{item.title}</h2>
                  <p class="card__text">{item.text}</p>
                {
                  item.img?   <div class="dots">
                  <img src={item.img} alt="" />
                </div> : null
                }
                  {item.link ? (
                    <div class="more-wrap">
                      <a href="#offers" class="more">
                        <span class="more__line"></span>

                        <span class="more__text">{item.link}</span>
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
