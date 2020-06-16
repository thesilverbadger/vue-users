import Axios from "axios";

Axios.defaults.baseURL = "https://localhost:5001/";

///TODO: Validate the token we've got
const dataService = {
  ///TODO: This should come from configuration
  async get(uri) {
    const token = localStorage.getItem("jwt");
    try {
      const response = await Axios.get(uri, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error.response);
    }
  },

  async post(uri, data) {
    const token = localStorage.getItem("jwt");

    try {
      const response = await Axios.post(uri, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error.response);
    }
  },

  async put(uri, data) {
    const token = localStorage.getItem("jwt");

    try {
      const response = await Axios.put(uri, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error.response);
    }
  },
};

export default dataService;
