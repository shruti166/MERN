/* eslint-disable no-unused-vars */
import { axiosInstance } from "./index.js";

export const RegisterUser = async (body) => {
  try {
    const response = await axiosInstance.post("http://localhost:3000/api/users/register", body);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const LoginUser = async(body) => {
    try {
        const response = await axiosInstance.post("http://localhost:3000/api/users/login", body);
        return response.data

    } catch(err) {
        console.log(err);
    }
}

export const getCurrentUser = async() => {
  try { 
    const response = await axiosInstance.get("http://localhost:3000/api/users/get-valid-user");
    return response.data

  } catch(err) {
    console.log(err);
  }
}

