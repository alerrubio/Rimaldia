import { AxiosConfig as axios } from "./AxiosConfig";

export const getUsers = async () => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const response = await axios.get("/users");

    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

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

export const getUserByEmail = async (user_email) => {
  try {
    const requestBody = new FormData();
    requestBody.append('email', user_email);
    const response = await axios.post('/getUserByEmail',{
      email: user_email 
    });

    return response;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const isAdmin = async (user_email) => {
  try {
    const response = await axios.post("/isUserAdmin", {user_email: user_email});
    if (response.status != 200){
      return false;
    }
    console.log(response);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
