import React, { useEffect, useState } from "react";
import "./BusDetails.css";
import {
  arrayFirstHalf,
  arraySecondHalf,
  calcDuration,
  monthNoToMonthStr,
} from "../../../../utils/TicketBooking";
import { useNavigate } from "react-router-dom";
const BusDetails = ({
  key,
  busName,
  rating,
  price,
  busType,
  pickUpDate,
  pickUpTime,
  dropDate,
  dropTime,
  seatList,
  seatType,
  pickUpList,
  dropList,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectSeat, setSelectSeat] = useState({
    selectedSeatIdList: [],
    selectedSeatDetailsList: [],
  });
  const [selectPickUpDrop, setSelectPickUpDrop] = useState({
    pickUp: pickUpList[0],
    drop: dropList[0],
  });
  const seatesLeft = seatList.filter((seat) => {
    return !seat.status;
  });
  const [selectedSeatNoList, setSelectedSeatNoList] = useState("");
  const navigate = useNavigate();
  const handleOnClick = () => {
    setVisible(!visible);
  };
  const handleSelectSeat = (seatSetNo, seat, seatNo) => {
    seatNo = seatSetNo === 1 ? seatNo : seatNo + seatList.length / 2;
    seatNo++;
    console.log("seatNo", seatNo);
    seat.seatNo = seatNo;
    let tempSelectSeat = selectSeat;
    if (tempSelectSeat.selectedSeatIdList.includes(seat.seatId)) {
      let tempDetailsList = tempSelectSeat.selectedSeatDetailsList.filter(
        (seatObj) => seatObj.seatId !== seat.seatId
      );
      let tempIdList = [];
      tempDetailsList.map((seat) => {
        tempIdList.push(seat.seatId);
      });
      tempSelectSeat = {
        ...tempSelectSeat,
        selectedSeatIdList: tempIdList,
        selectedSeatDetailsList: tempDetailsList,
      };
      setSelectSeat(tempSelectSeat);
    } else {
      tempSelectSeat = {
        ...tempSelectSeat,
        selectedSeatIdList: [...tempSelectSeat.selectedSeatIdList, seat.seatId],
        selectedSeatDetailsList: [
          ...tempSelectSeat.selectedSeatDetailsList,
          seat,
        ],
      };
      setSelectSeat(tempSelectSeat);
    }
    let tempList = "";
    let once = true;
    tempSelectSeat.selectedSeatDetailsList.map((seat) => {
      if (once) {
        once = false;
      } else {
        tempList += ",";
      }
      tempList += "S" + seat.seatNo;
    });
    console.log(tempList);
    setSelectedSeatNoList(tempList);
  };
  const handleSelectPickUp = (pickUp) => {
    setSelectPickUpDrop({ ...selectPickUpDrop, pickUp: pickUp });
  };
  const handleSelectDrop = (drop) => {
    setSelectPickUpDrop({ ...selectPickUpDrop, drop: drop });
  };
  // ----------------------
  const firstHalfSeat = arrayFirstHalf(seatList);
  const secondHalfSeat = arraySecondHalf(seatList);
  // ----------------------
  // console.log("selectSeat", selectSeat.selectedSeatDetailsList);
  const handleSubmit = () => {
    navigate("/services/busBooking");
  };
  return (
    <div className={`BusDetails ${visible ? `active-bus` : ``}`} key={key}>
      <div
        className={`bus-details-top-container ${visible ? `bg-color` : ``}`}
        onClick={handleOnClick}
      >
        <div className="bus-details-top">
          <div className="top-flex-1">
            <div className="bus-name">
              <h3>{busName}</h3>
              <p>{busType}</p>
              <p>{seatType[0].toUpperCase() + seatType.slice(1)}</p>
            </div>
            <div className="center-wrapper">
              <p>{`${pickUpTime} - ${
                pickUpDate.split("-")[2]
              } ${monthNoToMonthStr(pickUpDate.split("-")[1])}`}</p>
              <hr />
              <p>{calcDuration(pickUpDate, dropDate, pickUpTime, dropTime)}</p>
              <hr />
              <p>{`${dropTime} - ${dropDate.split("-")[2]} ${monthNoToMonthStr(
                dropDate.split("-")[1]
              )}`}</p>
            </div>
            <p className="price">Rs.{price}</p>
          </div>
          <div className="top-flex-2">
            <div className="flex-left">
              <span>{rating}</span>
            </div>
            <div className="flex-right">
              <p>seats left {seatesLeft.length}</p>
            </div>
          </div>
        </div>
        <div className="bus-details-bottom">
          <button>SELECT SEATS</button>
        </div>
      </div>
      {/* {visible && ( */}
      <div
        className={`bus-details-bottom-container ${
          visible ? `visible-bus-details` : ` invisible-bus-details`
        }`}
      >
        <div className="bus-details-bottom-flex-1">
          <div className="bus-details-bottom-header">
            <h3>Select Seats</h3>
            <p></p>
          </div>
          <div className="bus-details-bottom-content-1">
            <div className="bus-layout-container">
              <div className="bus-layout-top-flex">
                <span class="material-symbols-outlined">
                  swap_driving_apps_wheel
                </span>
              </div>
              <div className="bus-layout-bottom-flex">
                <div className="bus-layout-bottom-flex-1">
                  {firstHalfSeat.map((seat, index) => {
                    return (
                      <>
                        <span
                          class={`material-symbols-outlined seat ${
                            selectSeat.selectedSeatIdList.includes(seat.seatId)
                              ? `selected-seat`
                              : ``
                          }`}
                          onClick={() => handleSelectSeat(1, seat, index)}
                        >
                          weekend
                        </span>
                      </>
                    );
                  })}
                </div>
                <div className="bus-layout-bottom-flex-2">
                  <div className="bus-layout-bottom-flex-2">
                    {secondHalfSeat.map((seat, index) => {
                      return (
                        <>
                          <span
                            class={`material-symbols-outlined seat ${
                              selectSeat.selectedSeatIdList.includes(
                                seat.seatId
                              )
                                ? `selected-seat`
                                : ``
                            }`}
                            onClick={() => handleSelectSeat(2, seat, index)}
                          >
                            weekend
                          </span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bus-details-bottom-flex-2">
          <div className="bus-details-bottom-header">
            <h3>Select Pickup & Drop Points</h3>
            <p></p>
          </div>
          <div className="bus-details-bottom-content-2">
            <div className="bus-details-bottom-content-2-top-flex">
              <div className="bus-details-bottom-content-2-top-flex-1">
                <div className="bus-details-bottom-content-2-top-flex-1-header">
                  <h4>PICK UP POINT</h4>
                </div>
                <div className="bus-details-bottom-content-2-top-flex-1-content">
                  {pickUpList.map((pickUp) => {
                    return (
                      <div
                        className="pick-up"
                        onClick={() => handleSelectPickUp(pickUp)}
                      >
                        <p>
                          {`${pickUp.place} -
                            ${pickUp.time} | ${
                            pickUpDate.split("-")[2]
                          } ${monthNoToMonthStr(pickUpDate.split("-")[1])}`}
                        </p>
                        {selectPickUpDrop.pickUp.place === pickUp.place && (
                          <span class="material-symbols-outlined">
                            check_circle
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bus-details-bottom-content-2-top-flex-2">
                <div className="bus-details-bottom-content-2-top-flex-2-header">
                  <h4>DROP POINT</h4>
                </div>
                <div className="bus-details-bottom-content-2-top-flex-2-content">
                  {dropList.map((drop) => {
                    return (
                      <div
                        className="drop"
                        onClick={() => handleSelectDrop(drop)}
                      >
                        <p>
                          {`${drop.place} -
                            ${drop.time} | ${
                            dropDate.split("-")[2]
                          } ${monthNoToMonthStr(dropDate.split("-")[1])}`}
                        </p>
                        {selectPickUpDrop.drop.place === drop.place && (
                          <span class="material-symbols-outlined">
                            check_circle
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bus-details-bottom-content-2-bottom-flex">
              <div className="bus-details-bottom-content-2-bottom-flex-top">
                <div className="bus-details-bottom-content-2-bottom-flex-left">
                  <h5>Selected Seats</h5>
                  <p>
                    {selectedSeatNoList !== ""
                      ? selectedSeatNoList
                      : "No seats selected yet"}
                  </p>
                </div>
                <div className="bus-details-bottom-content-2-bottom-flex-right">
                  {selectedSeatNoList !== ""
                    ? "Rs." + selectSeat.selectedSeatIdList.length * price
                    : ""}
                </div>
              </div>
              <button
                className={`continue-btn ${
                  selectedSeatNoList !== "" ? `active-btn` : ``
                }`}
                onClick={handleSubmit}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default BusDetails;
