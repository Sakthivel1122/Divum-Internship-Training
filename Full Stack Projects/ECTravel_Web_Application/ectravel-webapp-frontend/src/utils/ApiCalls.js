import axios from "axios";
import API_LINKS from "../constants/ApiConstant";

export const handleAddBusApiCall = async (dataObj) => {
  try {
    const response = await axios.post(API_LINKS.BUS_API_LINKS.ADD_BUS, dataObj);
    alert("Bus Added Successfully");
    return response;
  } catch (error) {
    console.log("ADD BUS API ERROR >>", error);
    return false;
  }
};

export const handleUserLogInApiCall = async (dataObj) => {
  try {
    const response = await axios.post(API_LINKS.USER_AUTHENTICATION, dataObj);
    return response;
  } catch (error) {
    console.log("USER LOG IN API ERROR >>", error);
    return false;
  }
};

export const handleCheckAvailBusApiCall = async (dataObj) => {
  try {
    const response = await axios.post(
      API_LINKS.BUS_API_LINKS.GET_AVAIL_BUSES,
      dataObj
    );
    return response;
  } catch (error) {
    console.log("CHECK AVAIL BUS API ERROR >>", error);
    return false;
  }
};

export const handleUpdateUserDetailsApiCall = async (dataObj) => {
  try {
    let response = await axios.put(API_LINKS.UPDATE_USER, dataObj);
    return response;
  } catch (error) {
    console.log("UPDATE USER DETAILS API ERROR >>", error);
    return false;
  }
};

export const handleGetUserDetailsApiCall = async (emailId) => {
  try {
    const response = await axios.get(API_LINKS.GET_USER_DETAILS + emailId);
    return response;
  } catch (error) {
    console.log("GET USER DETAILS API ERROR >>", error);
    return false;
  }
};

export const handleAddUserApiCall = async (dataObj) => {
  try {
    const response = await axios.post(API_LINKS.ADD_USER, dataObj);
    return response;
  } catch (error) {
    console.log("ADD USER API ERROR >>", error);
    return false;
  }
};

// ------------ TRAIN BOOKING -------------

export const handleGetAvailTrainApiCall = async (dataObj) => {
  try {
    const response = await axios.post(
      API_LINKS.TRAIN_API_LINKS.GET_AVAIL_TRAINS,
      dataObj
    );
    return response;
  } catch (error) {
    console.log("GET AVAIL TRAIN API ERROR >>", error);
    return false;
  }
};


// ----------- FLIGHT BOOKING -------------

export const handleGetAvailFlightApiCall = async (dataObj) => {
  try {
    const response = await axios.post(
      API_LINKS.FLIGHT_API_LINKS.GET_AVAIL_FLIGHTS,
      dataObj
    );
    return response;
  } catch (error) {
    console.log("GET AVAIL FLIGHT API ERROR >>", error);
    return false;
  }
};
