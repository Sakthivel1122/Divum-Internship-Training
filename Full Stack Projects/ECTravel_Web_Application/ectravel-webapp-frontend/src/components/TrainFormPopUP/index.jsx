import React, { useEffect, useState } from "react";
import "./TrainFormPopUp.scss";
import { useAdmin } from "../../contexts/AdminContext";
import {
  handleAddTrainApiCall,
  handleGetAllTrainApiCall,
  handleUpdateTrainApiCall,
} from "../../utils/AdminApiCall";
const TrainFormPopUP = () => {
  const adminContext = useAdmin();
  const [formData, setFormData] = useState({
    trainId: null,
    trainName: "",
    fromPlace: "",
    toPlace: "",
    rating: "",
    pickUpDateAndTime: "",
    dropDateAndTime: "",
    prices: [],
    trainStationList: [],
  });
  const handleClose = (e) => {
    const { className } = e.target;
    if (className === "TrainFormPopUP" || className.includes("close-btn")) {
      adminContext.handleSetTrainFormPopUp({
        ...adminContext.trainFormPopUp,
        visible: false,
        details: null,
      });
      setFormData({
        trainId: null,
        trainName: "",
        fromPlace: "",
        toPlace: "",
        rating: "",
        pickUpDateAndTime: "",
        dropDateAndTime: "",
        prices: [],
        trainStationList: [],
      });
    }
  };

  const handleAddStationBtn = () => {
    const obj = {
      stationName: "",
      stationTime: "",
    };
    setFormData({
      ...formData,
      trainStationList: [...formData.trainStationList, obj],
    });
  };
  const handleStationOnChange = (e, index) => {
    const { name, value } = e.target;
    const arr = formData.trainStationList;
    arr[index][name] = value;
    setFormData({
      ...formData,
      trainStationList: arr,
    });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDeleteStationBtn = (index) => {
    let arr = formData.trainStationList;
    arr = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
    setFormData({
      ...formData,
      trainStationList: arr,
    });
  };
  const handlePriceOnChange = (e, index) => {
    const arr = formData.prices;
    arr[index] = e.target.value;
    setFormData({
      ...formData,
      prices: arr,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataObj = {
      trainName: formData.trainName,
      fromPlace: formData.fromPlace,
      toPlace: formData.toPlace,
      rating: formData.rating,
      pickUpDate: formData.pickUpDateAndTime.split("T")[0],
      pickUpTime: formData.pickUpDateAndTime.split("T")[1],
      dropDate: formData.dropDateAndTime.split("T")[0],
      dropTime: formData.dropDateAndTime.split("T")[1],
      prices: formData.prices,
      trainStationList: formData.trainStationList,
    };
    if (
      adminContext.trainFormPopUp.details &&
      adminContext.trainFormPopUp.details !== null
    ){
      const updateDataObj = {
        trainId: formData.trainId,
        trainData: dataObj,
      }
      const response = handleUpdateTrainApiCall(updateDataObj);
      response.then((res) => {
        handleGetAllTrain();
        adminContext.handleSetTrainFormPopUp({
          ...adminContext.trainFormPopUp,
          visible: false,
          details: null,
        });
      });
    } else {
      const response = handleAddTrainApiCall(dataObj);
      response.then((res) => {
        handleGetAllTrain();
        adminContext.handleSetTrainFormPopUp({
          ...adminContext.trainFormPopUp,
          visible: false,
          details: null,
        });
      });
    }
  };
  const handleGetAllTrain = () => {
    const response = handleGetAllTrainApiCall();
    response.then((res) => {
      adminContext.handleSetTrainList(res.data);
    });
  };
  useEffect(() => {
    if (
      adminContext.trainFormPopUp.details &&
      adminContext.trainFormPopUp.details !== null
    ) {
      const train = adminContext.trainFormPopUp.details;
      const priceList = [];
      priceList.push(train.trainSeatDetails.oneA.price);
      priceList.push(train.trainSeatDetails.twoA.price);
      priceList.push(train.trainSeatDetails.threeA.price);
      priceList.push(train.trainSeatDetails.sleeper.price);
      priceList.push(train.trainSeatDetails.secondSeater.price);
      priceList.push(train.trainSeatDetails.chairCar.price);
      setFormData({
        trainId: train.train.trainId,
        trainName: train.train.trainName,
        fromPlace: train.train.fromPlace,
        toPlace: train.train.toPlace,
        rating: train.train.rating,
        pickUpDateAndTime:
          train.train.pickUpDate + "T" + train.train.pickUpTime,
        dropDateAndTime: train.train.dropDate + "T" + train.train.dropTime,
        prices: priceList,
        trainStationList: train.trainStationList,
      });
    }
  }, []);
  return (
    <div className="TrainFormPopUP" onClick={handleClose}>
      <form className="train-form">
        <div className="train-form-1">
          <h2 className="form-title">Add Train</h2>
          <span className="material-symbols-outlined close-btn">close</span>
        </div>
        <div className="train-form-2">
          <div className="train-form-2-1">
            <div className="input-box-wrapper">
              <label htmlFor="">Train Name</label>
              <input
                name="trainName"
                type="text"
                value={formData.trainName}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">From</label>
              <input
                name="fromPlace"
                type="text"
                value={formData.fromPlace}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">To</label>
              <input
                name="toPlace"
                type="text"
                value={formData.toPlace}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">PickUp date & time</label>
              <input
                name="pickUpDateAndTime"
                type="datetime-local"
                value={formData.pickUpDateAndTime}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">Drop date & time</label>
              <input
                name="dropDateAndTime"
                type="datetime-local"
                value={formData.dropDateAndTime}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">Rating</label>
              <input
                name="rating"
                type="text"
                value={formData.rating}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">1A Price</label>
              <input
                name="trainName"
                type="number"
                value={formData.prices[0]}
                onChange={(e) => handlePriceOnChange(e, 0)}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">2A Price</label>
              <input
                name="trainName"
                type="number"
                value={formData.prices[1]}
                onChange={(e) => handlePriceOnChange(e, 1)}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">3A Price</label>
              <input
                name="trainName"
                type="number"
                value={formData.prices[2]}
                onChange={(e) => handlePriceOnChange(e, 2)}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">SL Price</label>
              <input
                name="trainName"
                type="number"
                value={formData.prices[3]}
                onChange={(e) => handlePriceOnChange(e, 3)}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">2S Price</label>
              <input
                name="trainName"
                type="number"
                value={formData.prices[4]}
                onChange={(e) => handlePriceOnChange(e, 4)}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">CC Price</label>
              <input
                name="trainName"
                type="number"
                value={formData.prices[5]}
                onChange={(e) => handlePriceOnChange(e, 5)}
              />
            </div>
          </div>
          <div className="train-form-2-2">
            <div className="train-station-list-header">
              <label htmlFor="">Train Station</label>
              <button
                type="button"
                onClick={handleAddStationBtn}
                className="add-btn"
              >
                Add
              </button>
            </div>
            <div className="train-station-list-wrapper">
              {formData.trainStationList.map((station, index) => {
                return (
                  <div className="train-station">
                    <label htmlFor="">Enter Station {index + 1}</label>
                    <div className="input-box-wrapper">
                      <input
                        name="stationName"
                        type="text"
                        placeholder="Type here..."
                        value={station.stationName}
                        onChange={(e) => handleStationOnChange(e, index)}
                      />
                      <input
                        name="stationTime"
                        type="time"
                        value={station.stationTime}
                        onChange={(e) => handleStationOnChange(e, index)}
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteStationBtn(index)}
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="train-form-3">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainFormPopUP;
