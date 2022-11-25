import fetchApi from './fetchApi';

import {
    BASE_URL,
    SIGNUP_URL,
    LOGIN_URL,
    PASSWORD_RECOVERY_URL,
    CREATE_EVENT,
    GET_EVENTS,
  } from './rootEndPoints.js';

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
      if (result.status === 200) {
        localStorage.setItem('jwt-token', result.accessToken);
      }
      return result;
    } catch (err) {
      return err;
    }
  };

  const forgotPassword = async (params) => {
    await fetchApi.post(`${BASE_URL}/${PASSWORD_RECOVERY_URL}`, params)
  }


  const createEvents = async (params) => {
    try {
      const result = await fetchApi.post(
        `${BASE_URL}/${CREATE_EVENT}`,
        params,
      );
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
    forgotPassword,
    createEvents,
    getAllEvents,
  };

  export default userServices;
