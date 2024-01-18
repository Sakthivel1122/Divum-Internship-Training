import React, { useEffect, useState } from "react";
import "./ProctoringLayout.scss";
import { useLocation } from "react-router-dom";
import Proctor from "../../pages/Proctor";
import { useMain } from "../../context/MainContext";
import TimerClock from "../../components/TimerClock";

const ProctoringLayout = ({ children = "" }) => {
  const location = useLocation();
  const mainContext = useMain();
  const [duration, setDuration] = useState(
    getDuration(location.state.duration)
  );
  // console.log("duration", location.state.duration);
  return (
    <div className="ProctoringLayout">
      <TimerClock
        hour={duration.hrs}
        minute={duration.mins}
        second={duration.secs}
        className="timer-clock"
      />
      <div className="proctor-container">
        <Proctor idImageSrc={location.state.idImageSrc} />
      </div>
    </div>
  );
};

export default ProctoringLayout;

const getDuration = (mins) => {
  let resHrs = 0;
  let tempMins = mins;
  while (tempMins >= 60) {
    resHrs++;
    tempMins = tempMins - 60;
  }
  return { hrs: resHrs, mins: tempMins, secs: 0 };
};
