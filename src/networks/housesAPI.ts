import { URLE } from "../utils/constants";
import { customError } from "../utils/methods";
import axios from "axios";

const fetchHouseAPI = async () => {
  try {
    return await axios
      .get(URLE.baseURL)
      .then((response) => ({ status: response.status, data: response.data }))
      .catch((err) => ({
        status: err.response.status,
        data: err.response.data,
      }));
  } catch (error) {
    return customError();
  }
};

export {fetchHouseAPI}