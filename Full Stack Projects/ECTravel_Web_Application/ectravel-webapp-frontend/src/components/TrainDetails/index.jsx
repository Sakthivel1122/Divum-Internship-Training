import React from "react";
import "./TrainDetails.scss";
import { calcDuration, monthNoToMonthStr } from "../../utils/TicketBooking";
import TrainSeatDetails from "../TrainSeatDetails";
const TrainDetails = ({ train }) => {
  return (
    <div className="TrainDetails">
      <div className="train-details-1">
        <p className="train-name">{train.train.trainName}</p>
        <div className="train-timing">
          <p>{`${train.train.pickUpTime} - ${
            train.train.pickUpDate.split("-")[2]
          } ${monthNoToMonthStr(train.train.pickUpDate.split("-")[1])}`}</p>
          <hr />
          <p>
            {calcDuration(
              train.train.pickUpDate,
              train.train.dropDate,
              train.train.pickUpTime,
              train.train.dropTime
            )}
          </p>
          <hr />
          <p>{`${train.train.dropTime} - ${
            train.train.dropDate.split("-")[2]
          } ${monthNoToMonthStr(train.train.dropDate.split("-")[1])}`}</p>
        </div>
      </div>

      <div className="train-details-2">
        {
          train.trainSeatDetails.map((seat, index) => {
            return <TrainSeatDetails key={index} seat={seat}/>;
          })
        }
      </div>
    </div>
  );
};

export default TrainDetails;
