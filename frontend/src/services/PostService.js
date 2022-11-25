import { AxiosConfig as axios } from "./AxiosConfig";

export const getPostsbyuser = async (user_id) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/postsbyuser/" + user_id;
    const response = await axios.get(route);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createPost = async (post) => {
  try {
    console.log(post);
    const response = await axios.post("/post", post);
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

export default createPost;
