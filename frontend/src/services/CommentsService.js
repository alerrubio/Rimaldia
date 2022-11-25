import { AxiosConfig as axios } from "./AxiosConfig";

export const createUser = async (user) => {
    try {
      console.log(user);
      const response = await axios.post("/user", user);
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