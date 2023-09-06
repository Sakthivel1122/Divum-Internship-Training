const COMMON_API_LINK = "http://localhost:8088/api/v1/user/";

const API_LINKS = {
    GET_API_LINK_WITH_PAGINATION: COMMON_API_LINK + "getUserWithPaginationAndSorting/",
    GET_ALL_USER_API_LINK: COMMON_API_LINK + "getAllUser",
    POST_API_LINK: COMMON_API_LINK + "addUser",
    DELETE_API_LINK: COMMON_API_LINK + "deleteUser/",
    PUT_API_LINK: COMMON_API_LINK + "updateUser"
}

export default API_LINKS;