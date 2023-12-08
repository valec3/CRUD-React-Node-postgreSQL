import axios from "axios";

const apiService = axios.create({
    baseURL: "https://api-warrenbank.onrender.com/api",
});

export const authUser = async (dates) => {
    const { data } = await apiService.post("/users/login", dates, {
        headers: {
        "Content-Type": "application/json",
        },
    });
    return data;
};

export const registerUser = async (dates) => {
    const { data } = await apiService.post("/users/signup", dates, {
        headers: {
        "Content-Type": "application/json",
        },
    });
    return data;
};

export const checkUser = async (token) => {
    const { data } = await apiService.get("/users/profile", {
        headers: {
        "Content-Type": "application/json",
        Authorization: token,
        },
    });
    return data;
};


export const getPrograma = async (token) => { };
export const createPrograma = async (token) => { };
export const updatePrograma = async (token) => { };
export const deletePrograma = async (token) => { };
export const getAllProgramas = async (token) => { };

export const deleteFacultad = async (token) => { };
export const getAllFacultades = async (token) => { };