import { AxiosConfig as axios } from "./AxiosConfig";

export const getAllForums = async () => {
    try {
        const response = await axios.get(`/groups`);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const createForum = async (forum) => {
    try {
      const response = await axios.post("/group", forum);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      return err;
    }
};

export const getAllUserForums = async (user_id) => {
    try {
        const response = await axios.get(`/user/${user_id}/groups`);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const editForum = async (forum_id, forum) => {
    try {
        const response = await axios.put(`/group/${forum_id}`, forum);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};
