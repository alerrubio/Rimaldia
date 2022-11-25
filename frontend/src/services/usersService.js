import { AxiosConfig as axios } from "./AxiosConfig";

export const getUsers = async (page) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/users?page=" + page;
    const response = await axios.get(route);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUser = async (user_id) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/user/" + user_id;
    const response = await axios.get(route);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUsersCount = async (page) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/usersCount";
    const response = await axios.get(route);
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

export const changeUserRole = async (user_id, role_id) => {
  try {
    const route = "/user/".concat(user_id);
    const response = await axios.put(route, {role: role_id});
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const deleteUser = async (user_id) => {
  try {
    const route = "/user/".concat(user_id);
    const response = await axios.delete(route);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};
