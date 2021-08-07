import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const MyCountdown = (sec) => {
  // Random component
  // console.log(sec.sec, "myCountdown");
  const Completionist = () => <p>TIME EXPIRED!</p>;
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {days} days {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return <Countdown date={Date.now() + sec.sec} renderer={renderer} />;
};
export default MyCountdown;
