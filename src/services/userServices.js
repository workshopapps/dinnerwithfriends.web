import fetchApi from './fetchApi';
import {
    BASE_URL,
    CREATE_EVENT,
    GET_EVENTS,
  } from './rootEndpoints';

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
    createEvents,
    getAllEvents,
  };

  export default userServices;
