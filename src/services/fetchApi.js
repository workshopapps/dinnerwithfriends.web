const authHeader = () => {
  const token = localStorage.getItem('jwt-token');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

const post = async (url, data) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, config);
    const datas = await response.json();
    return datas;
  } catch (err) {
    return err;
  }
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

  const deleteE = async (url) => {
    const config = {
      method: 'DELETE',
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

  const patch = async (url, data) => {
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify(data),
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
    post,
    get,
    deleteE,
    patch,
  };

  export default fetchApi;
