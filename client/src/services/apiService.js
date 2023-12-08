import axios from "axios";

const apiService = axios.create({
    baseURL: "http://localhost:3000/api/",
});

export const authUser = async (dates) => {
    const { data } = await apiService.post("/signin", dates, {
        headers: {
        "Content-Type": "application/json",
        },
    });
    return data;
};

export const registerUser = async (dates) => {
    const { data } = await apiService.post("/signup", dates, {
        headers: {
        "Content-Type": "application/json",
        },
    });
    return data;
};

export const checkUser = async (token) => {
    const { data } = await apiService.get("/profile", {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
    return data;
};

export const getUsuario = async (id) => {
    const { data } = await apiService.get(`/usuarios/get/${id}`);
    return data;
}
export const logoutUser = async () => {
    const { data } = await apiService.post("/logout");
    return data;
}



export const getPrograma = async (id) => {
    const { data } = await apiService.get(`/programas/get/${id}`);
    return data;
};
export const createPrograma = async (data) => {
    const { data: response } = await apiService.post("/programas/create", data);
    return response;
};
export const updatePrograma = async (id,data) => {
    const { data: response } = await apiService.put(`/programas/update/${id}`, data);
    return response;
};
export const deletePrograma = async (id) => {
    const { data } = await apiService.delete(`/programas/delete/${id}`);
    return data;
};
export const getAllProgramas = async () => {
    const { data } = await apiService.get("/programas/all");
    return data;
};

export const getFacultad = async (id) => {
    const { data } = await apiService.get(`/facultades/get/${id}`);
    return data;
};
export const createFacultad = async (data) => {
    const { data: response } = await apiService.post("/facultades/create", data);
    return response;
};
export const updateFacultad = async (id,data) => {
    const { data: response } = await apiService.put(`/facultades/update/${id}`, data);
    return response;
};
export const deleteFacultad = async (id) => {
    const { data } = await apiService.delete(`/facultades/delete/${id}`);
    return data;
};
export const getAllFacultades = async () => {
    const { data } = await apiService.get("/facultades/all");
    return data;
};


export const getViewReport = async () => { 
    const { data } = await apiService.get("/reportes/view");
    return data;
}