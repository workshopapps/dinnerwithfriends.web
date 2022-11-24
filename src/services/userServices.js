import fetchApi from './fetchApi';
import {
    BASE_URL,
    GET_EVENTS,
  } from './rootEndpoints';

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
    getAllEvents,
  };

  export default userServices;
