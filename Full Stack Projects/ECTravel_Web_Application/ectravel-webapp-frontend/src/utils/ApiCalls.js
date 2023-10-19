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
    console.log(">>",response);
    return response;
  } catch (error) {
    return false;
  }
};
