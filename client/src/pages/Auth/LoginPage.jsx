import { useState } from "react";
import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext";
const LoginPage = () => {
    const { login } = useAuthContext();
    const [dates, setDates] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario usando el spread operator para mantener los valores anteriores
        setDates({
            ...dates,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("login submit",dates)
        await login(dates)
    }
    return (
        <section className="w-full h-full flex items-center">
            <div className="w-full md:max-w-[450px] flex flex-col items-center justify-center md:px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Iniciar sesión
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input 
                                    onChange={handleInputChange}
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input 
                                    onChange={handleInputChange}
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800 bg-primary"
                            >
                                Iniciar sesión
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                ¿No tienes una cuenta?
                                <NavLink
                                    to="/signup"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-3"
                                >
                                    Registrarse
                                </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage