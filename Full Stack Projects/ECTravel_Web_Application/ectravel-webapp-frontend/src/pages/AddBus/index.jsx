import React, { useState } from "react";
import "./AddBus.css";
import axios from "axios";
import API_LINKS from "../../constants/ApiConstant";

const AddBus = () => {
  const [formData, setFormData] = useState({
    busName: "",
    fromPlace: "",
    toPlace: "",
    price: "",
    busType: "AC",
    seatType: "seater",
    pickUpDateTime: "",
    dropDateTime: "",
    rating: "",
    noOfPickUps: "",
    noOfDrops: "",
  });
  const [pickUps, setPickUps] = useState([]);
  const [drops, setDrops] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPickup = () => {
    const arr = [...pickUps, { place: "", time: "" }];
    setPickUps(arr);
  };
  const handlePickUpChange = (e, index) => {
    const { type, value } = e.target;
    const arr = [...pickUps];
    if (type === "text") arr[index] = { ...arr[index], place: value };
    else arr[index] = { ...arr[index], time: value };
    setPickUps(arr);
  };
  const handlePickUpDelete = (index) => {
    let arr = [...pickUps];
    arr = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
    setPickUps(arr);
  };

  // Drop
  const handleAddDrop = () => {
    const arr = [...drops, { place: "", time: "" }];
    setDrops(arr);
  };
  const handleDropChange = (e, index) => {
    const { type, value } = e.target;
    const arr = [...drops];
    if (type === "text") arr[index] = { ...arr[index], place: value };
    else arr[index] = { ...arr[index], time: value };
    setDrops(arr);
  };

  const handleDropDelete = (index) => {
    let arr = [...drops];
    arr = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
    setDrops(arr);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      busName: formData.busName,
      fromPlace: formData.fromPlace,
      toPlace: formData.toPlace,
      price: formData.price,
      busType: formData.busType,
      seatType: formData.seatType,
      pickUpDate: formData.pickUpDateTime.split("T")[0],
      pickUpTime: formData.pickUpDateTime.split("T")[1],
      dropDate: formData.dropDateTime.split("T")[0],
      dropTime: formData.dropDateTime.split("T")[1],
      rating: formData.rating,
      pickUps: pickUps,
      drops: drops,
    };
    try {
      const busId = await axios.post(API_LINKS.BUS_API_LINKS.ADD_BUS, payload);
      alert("Bus Added Successfully " + busId);
      setFormData({
        busName: "",
        fromPlace: "",
        toPlace: "",
        price: "",
        busType: "AC",
        seatType: "seater",
        dateTime: "",
        rating: "",
      });
    } catch (error) {
      alert(error);
    }
    // console.log(formData);
  };
  return (
    <div className="AddBus">
      <form>
        <div className="form-flex-wrapper">
          <div className="form-flex-1">
            <input type="text" hidden />
            <div className="input-box-wrapper">
              <label htmlFor="">Bus Name</label>
              <input
                name="busName"
                type="text"
                placeholder="Bus Name"
                value={formData.busName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">From</label>
              <input
                name="fromPlace"
                type="text"
                placeholder="From"
                value={formData.fromPlace}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">To</label>
              <input
                name="toPlace"
                type="text"
                placeholder="To"
                value={formData.toPlace}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">Price</label>
              <input
                name="price"
                type="text"
                placeholder="Price"
                value={formData.price}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">Bus Type</label>
              <select name="busType" onChange={handleOnChange}>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">Seat Type</label>
              <select name="seatType" onChange={handleOnChange}>
                <option value="seater">Seater</option>
                <option value="sleeper">Sleeper</option>
              </select>
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">PickUp Date and Time</label>
              <input
                name="pickUpDateTime"
                type="datetime-local"
                value={formData.pickUpDateTime}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">Drop Date and Time</label>
              <input
                name="dropDateTime"
                type="datetime-local"
                value={formData.dropDateTime}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-box-wrapper">
              <label htmlFor="">Rating</label>
              <input
                name="rating"
                type="text"
                placeholder="Rating (0 - 5)"
                value={formData.rating}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="form-flex-2">
            <div className="add-btn-wrapper">
              <label htmlFor="">Pickup point </label>
              <button
                onClick={handleAddPickup}
                className="add-btn"
                type="button"
              >
                Add
              </button>
            </div>
            <div className="pickup-wrapper">
              {pickUps.map((data, index) => {
                return (
                  <div className="pickup-input-wrapper" key={index}>
                    <label htmlFor="">Pickup point {index + 1}</label>
                    <div>
                      <input
                        value={data.value}
                        type="text"
                        placeholder={`Pickup point ${index + 1}`}
                        onChange={(e) => handlePickUpChange(e, index)}
                      />
                      <input
                        type="time"
                        onChange={(e) => handlePickUpChange(e, index)}
                      />
                      <button
                        className="delete-btn"
                        type="button"
                        onClick={() => handlePickUpDelete(index)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="form-flex-2">
            <div className="add-btn-wrapper">
              <label htmlFor="">Drop point </label>
              <button onClick={handleAddDrop} className="add-btn" type="button">
                Add
              </button>
            </div>
            <div className="pickup-wrapper">
              {drops.map((data, index) => {
                return (
                  <div className="pickup-input-wrapper" key={index}>
                    <label htmlFor="">Drop point {index + 1}</label>
                    <div>
                      <input
                        value={data.place}
                        type="text"
                        placeholder={`Drop point ${index + 1}`}
                        onChange={(e) => handleDropChange(e, index)}
                      />
                      <input
                        type="time"
                        onChange={(e) => handleDropChange(e, index)}
                      />
                      <button
                        className="delete-btn"
                        type="button"
                        onClick={() => handleDropDelete(index)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBus;
