const COMMON_API_LINK = "http://localhost:8088/api/v1/user/";
const COMMON_BUS_API_LINK = "http://localhost:8088/api/v1/bus/";

const API_LINKS = {
  ADD_USER: COMMON_API_LINK + "adduser",
  USER_AUTHENTICATION: COMMON_API_LINK + "userauthentication",
  GET_USER_DETAILS: COMMON_API_LINK + "getuserdetails/",
  UPDATE_USER: COMMON_API_LINK + "updateUser",
  BUS_API_LINKS: {
    ADD_BUS: COMMON_BUS_API_LINK + "addBus",
    GET_AVAIL_BUSES: COMMON_BUS_API_LINK + "getAvailBus",
  },
};

export default API_LINKS;
