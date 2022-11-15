import axios from "axios";

const urlDev = "https://dev-f26bct3qtvafsa13.us.auth0.com";
const urlTest = "";
const urlProd = "";

export const AxiosConfig = axios.create({ baseURL: urlDev });

export default AxiosConfig;
