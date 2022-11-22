import { AxiosConfig as axios } from "./axiosAuth0Config";

export const getAdminUsers = async () => {
  try {
    const response = await axios.get("/api/v2/roles/rol_T6Ap5UbGAUbh8dW1/users", user);
    console.log(response);
    console.log("STATUS: " + response.status);
    if (response.status != 200){
        return "Error" + response.status;
    }

    return response;
  } catch (err) {
    console.error(err);
    return "Ocurrió un error inesperado";
  }
};

export default getAdminUsers;
