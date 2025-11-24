import axios from "axios";


export const request = axios.create({
  baseURL: "https://users-beckend-1.onrender.com/"
})