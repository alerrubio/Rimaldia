import { AxiosConfig as axios } from "./AxiosConfig";

export const createTag = async (tag) => {
    try {
      console.log(tag);
      const response = await axios.post("/tag", tag);
      console.log(response);
      return response;
  
    } catch (err) {
      console.error(err);
      return err;
    }
  };