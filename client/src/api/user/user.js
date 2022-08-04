import { URL } from "../serverUrl";

const axios = require("axios");

export const getUser = async (userId) => {
    const response = await axios.get(`${URL}/user/${userId}`);

    return response.data;
}

export const getAllUsers = async () => {
    const response = await axios.get(`${URL}/users`);

    return response.data;
}
