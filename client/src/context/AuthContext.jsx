/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { authUser, checkUser, registerUser } from "../services/apiService"
import Cookies from 'js-cookie';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(false)
    const [error, setError] = useState('')
    const [dataUser, setDataUser] = useState()

    const login = async (user) => {
        try {
            const data = await authUser(user)
            // console.log("data de respuesta: ",data)
            if (data.email) {
                setAuth(true);
                localStorage.setItem('access-token', data.token)
                Cookies.set('access-token', data.token, { expires: 7 });
                setDataUser(data)
            } else {
                setError('Inicio Invalido')
            }
        } catch (error) {
            setError(error)
            console.error(error)
        }
    }

    const checkAuth = async (token) => {
        if (token) {
            try {
                console.log("check auth")
                // console.log("token a revisar",token)
                const data = await checkUser(token)
                if (data.username) {
                    setAuth(true)
                    setDataUser(data)
                } else {
                    setAuth(false)
                    setError('Inicio Invalido')
                }
            } catch (error) {
                setError(error)
                console.error(error)
            }
        }
    }

    const logout = () => {
        localStorage.clear();
        setAuth(false);
        setDataUser(null)
    };

    const register = async (user) => {
        try {
            const data = await registerUser(user)
            if (data.token) {
                setAuth(true);
                localStorage.setItem('access-token', data.token)
                setDataUser(data)
            } else {
                setError('Registro Invalido')
            }
        } catch (error) {
            setError(error)
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ login, register, checkAuth, auth, error, dataUser, logout }} >
            {children}
        </AuthContext.Provider>
    )
}