import { AxiosConfig as axios } from "./axiosAuth0Config";
import { getUserByEmail } from "../usersService";

export const isUserAdmin = async (user) => {
  try {

    const userExists = await getUserByEmail(user.email);

    if (userExists.status == 204){
      let axiosUser = {
        connection: "Username-Password-Authentication", 
        email: user.email, 
        password: user.password,
        username: user.username,
        given_name: user.given_name,
        family_name: user.family_name,
        picture: user.avatar,
      }
      const response = await axios.post("/api/v2/roles/rol_T6Ap5UbGAUbh8dW1/users", user);
      console.log(response);
      console.log("STATUS: " + response.status);
      if (response.status != 200){
          return "Error" + response.status;
      }
  
      return response;
    }
    else{
      console.log("Usuario ya existe");
      return 404;
    }
    
    

  } catch (err) {
    console.error(err);
    return "Ocurrió un error inesperado";
  }
};

export default createAuth0User;
