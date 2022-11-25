import fetchApi from "./fetchApi";

import {
  BASE_URL,
  SIGNUP_URL,
  LOGIN_URL,
  CREATE_EVENT,
  GET_EVENTS,
} from "./rootEndPoints.js";

const register = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const login = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params);
    console.log(result)
    if (result.success === true) {
      localStorage.setItem("jwt-token", result.accessToken);
    }
    return result;
  } catch (err) {
    return err;
  }
};

const createEvents = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${CREATE_EVENT}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const getAllEvents = async () => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${GET_EVENTS}`);
    const datas = await dataObj.events;
    return datas;
  } catch (err) {
    return err;
  }
};

const userServices = {
  register,
  login,
  createEvents,
  getAllEvents,
};

export default userServices;
