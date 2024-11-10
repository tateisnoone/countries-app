import axios, { CreateAxiosDefaults } from "axios";

const axiosConfig: CreateAxiosDefaults = {
    baseURL: "http://localhost:3000",
};

export const HttpClient = axios.create(axiosConfig);
