// services/reflectionService.js
import axiosInstance from "../utils/axiosInstance";

export const createReflection = async (data, token) => {
  return await axiosInstance.post("/reflections", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
