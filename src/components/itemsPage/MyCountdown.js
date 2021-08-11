import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import { fetchExpiredAPI } from "../../endpoints/ItemsAPI";

const MyCountdown = (sec) => {
  // Random component
  console.log(sec, "SECOONNNNNN");
  console.log(sec.id, "COUNTDOWWWNNNNNN");

  // console.log(sec.sec, "myCountdown");
  const Completionist = () => <p>TIME EXPIRED!</p>;
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      // fetchExpiredAPI(sec.id);
      // window.location.reload(false);
      // sec.setDisable(true);
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div>
          <span>
            {days} days {hours}:{minutes}:{seconds}
          </span>
        </div>
      );
    }
  };
  return <Countdown date={Date.now() + sec.sec} renderer={renderer} />;
};
export default MyCountdown;
