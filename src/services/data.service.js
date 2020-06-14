import Axios from "axios";

const dataService = {
  baseUrl: "https://localhost:5001/",
  async get(uri) {
    const token = localStorage.getItem("jwt");
    const fullUri = this.baseUrl + uri;

    try {
      const response = await Axios.get(fullUri, {
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
    const fullUri = this.baseUrl + uri;

    try {
      const response = await Axios.post(fullUri, data, {
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
    const fullUri = this.baseUrl + uri;

    try {
      const response = await Axios.put(fullUri, data, {
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
