import fetchApi from "./fetchApi";

import {
  BASE_URL,
  SIGNUP_URL,
  LOGIN_URL,
  CREATE_EVENT,
  GET_EVENTS,
  GET_PARTICIPANTS,
  PASSWORD_RECOVERY_URL,
  RESET_PASSWORD_URL,
  GOOGLE_CALENDER,
  ADD_PARTICIPANTS,
  DELETE_EVENT
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
    const result = await fetchApi.post(
      `${BASE_URL}/${PASSWORD_RECOVERY_URL}`,
      params
    );
    return result;
  } catch (err) {
    return err;
  }
};

const resetPassword = async (params) => {
  try {
    const result = await fetchApi.post(
      `${BASE_URL}/${RESET_PASSWORD_URL}`,
      params
    );
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
    const datas = await dataObj.data;
    return datas;
  } catch (err) {
    return err;
  }
};
const getEventsById = async (id) => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${GET_EVENTS}/${id}`);
    const datas = await dataObj.data;
    return datas;
  } catch (err) {
    return err;
  }
};

const getParticipants = async (id) => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${GET_PARTICIPANTS}/${id}`);
    const datas = await dataObj.data;
    console.log(datas);
    return datas;
  } catch (err) {
    return err;
  }
};

const addToGoogleCalender = async (params) => {
  try {
    const result = await fetchApi.post(
      `${BASE_URL}/${GOOGLE_CALENDER}`,
      params
    );
    return result;
  } catch (err) {
    return err;
  }
};

const addParticipants = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${ADD_PARTICIPANTS}`, params);
    return result;
  } catch (err) {
    return err;
  }
}
const deleteEvent = async (id) => {
  try {
    const result = await fetchApi.deleteE(`${BASE_URL}/${DELETE_EVENT}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
}

const userServices = {
  register,
  login,
  createEvents,
  getAllEvents,
  getEventsById,
  getParticipants,
  recoverPassword,
  resetPassword,
  addToGoogleCalender,
  addParticipants,
  deleteEvent
};

export default userServices;
