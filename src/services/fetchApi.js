const authHeader = () => {
  const token = localStorage.getItem('jwt-token');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

const get = async (url) => {
    const config = {
      method: 'GET',
      headers: authHeader(),
    };

    try {
      const response = await fetch(url, config);
      const datas = await response.json();
      return datas;
    } catch (err) {
      return err;
    }
  };

  const fetchApi = {
    get
  };

  export default fetchApi;
