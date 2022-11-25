import { AxiosConfig as axios } from "./AxiosConfig";

export const createForum = async (forum) => {
    try {
      console.log(forum);
      const response = await axios.post("/group", forum);
      console.log(response);
      console.log("STATUS: " + response.status);
      if (response.status != 200){
          return "Error" + response.status;
      }
  
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
};

export const getAllUserForums = async (user_id) => {
    try {
        const response = await axios.get(`/user/${user_id}/groups`);
        console.log(response);
        if (response.status != 200){
            return "Error" + response.status;
        }

        return response;

    } catch (err) {
        console.error(err);
        return err;
    }
};