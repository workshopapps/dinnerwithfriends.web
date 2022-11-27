import fetchApi from "./fetchApi";

import {
  BASE_URL,
  SIGNUP_URL,
  LOGIN_URL,
  CREATE_EVENT,
  GET_EVENTS,
  PASSWORD_RECOVERY_URL
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
    return result;
  } catch (err) {
    return err;
  }
};

const recoverPassword = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${PASSWORD_RECOVERY_URL}`, params);
    console.log(result)
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
    console.log(dataObj)
    const datas = await dataObj.data;
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
  recoverPassword
};

export default userServices;
