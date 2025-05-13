import axios from "axios";


export const client = axios.create({
  baseURL: `http://192.168.1.186:5000/api/v1`,
});