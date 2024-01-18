import React, { useEffect, useState } from "react";
import "./TimerClock.scss";

const TimerClock = ({ hour = 0, minute = 0, second = 0, className }) => {
  const [clock, setClock] = useState({
    hours: hour,
    minutes: minute,
    seconds: second,
  });

  const handleTimer = () => {
    console.log("Entered", clock);
    let tempClock = { ...clock };
    if (tempClock.seconds !== 0) {
      tempClock.seconds = tempClock.seconds - 1;
    } else if (tempClock.seconds === 0) {
      if (tempClock.minutes !== 0) {
        tempClock.seconds = 59;
        tempClock.minutes = tempClock.minutes - 1;
      } else {
        if (tempClock.hours !== 0) {
          tempClock.seconds = 59;
          tempClock.minutes = 59;
          tempClock.hours = tempClock.hours - 1;
        }
      }
    }
    setClock(tempClock);
  };
  useEffect(() => {
    const intervalId = setInterval(handleTimer, 1000); // Every 1 seconds
    return () => clearInterval(intervalId);
  }, [clock]);
  return (
    <p className={"TimerClock " + className}>{`
  ${clock.hours.toString().padStart(2, "0")}:
  ${clock.minutes.toString().padStart(2, "0")}:
  ${clock.seconds.toString().padStart(2, "0")}`}</p>
  );
};

export default TimerClock;
