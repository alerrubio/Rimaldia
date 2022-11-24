import { AxiosConfig as axios } from "./AxiosConfig";

export const getThemes = async () => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const response = await axios.get("/themes");

    return response.data;
  } catch (err) {
    if (!error.response) {
      // network error
      this.errorStatus = 'Error: Network Error';
    } else {
        this.errorStatus = error.response.data.message;
    }
  }
};

export const createTheme = async (theme) => {
  try {
    console.log(theme);
    const response = await axios.post("/theme", theme);
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

export default createTheme;