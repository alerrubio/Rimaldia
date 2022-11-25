import { AxiosConfig as axios } from "./axiosAuth0Config";
import Constants from "../../lib/constants";
import { deleteUser, editUser as editUserService } from '../usersService.js';


export const getAuthUser = async (user_id) => {
  try{
    const config = {
      headers: { Authorization: `Bearer ${Constants.TOKEN}` }
    };
    const route = `/api/v2/users/auth0|${user_id}`;
    const response = await axios.get(route, config);
    return response;
  }
  catch(error){
    console.log(error);
    return error;
  }
};

export const deleteAuthUser = async (user_id) => {
  try{
    const config = {
      headers: { Authorization: `Bearer ${Constants.TOKEN}` }
    };
    const route = `/api/v2/users/auth0|${user_id}`;
    const response = await axios.delete(route, config);
    console.log(route);
    if (response.status = 204 ){
      const responseDB = await deleteUser(user_id);
      console.log(responseDB);
    }
    return response;
  }
  catch(error){
    console.log(error);
    return error;
  }
};

export const editAuthUser = async (user, user_id) => {
  try{
    const config = {
      headers: { 
        Authorization: `Bearer ${Constants.TOKEN}`,
        'Content-Type': 'application/json'
      }
    };
    const route = `/api/v2/users/auth0|${user_id}`;
    const response = await axios.patch(route, user, config);

    if (response.status == 200){
      const res = await editUserService(user, user_id);
      return response;
    }
  }
  catch(error){
    console.log(error);
    return error;
  }
};
