import { AxiosConfig as axios } from "./axiosAuth0Config";

export const createAuth0User = async (user) => {
  try {
    console.log(user);
    let axiosUser = {
      connection: "Username-Password-Authentication", 
      email: user.email, 
      password: user.password,
      username: user.username,
      given_name: user.given_name,
      family_name: user.family_name,
      name: user.given_name + " " + user.family_name,
      picture: user.avatar,
    }
    const response = await axios.post("/dbconnections/signup ", user);
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

export default createAuth0User;
