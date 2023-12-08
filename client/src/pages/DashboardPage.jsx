import { NavLink } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const DashboardPage = () => {
    const { logout } = useAuthContext()
    return (
        <section className="p-10 text-black font-bold">
            <h2 className="mb-10 text-center text-3xl uppercase text-blue-400">
                Secciones del dashboard
            </h2>
            <ul className="flex mx-auto gap-5 md:w-[650px] max-md:flex-col">
                <li className="flex cursor-pointer bg-blue-50 rounded-[1rem] hover:bg-blue-200 flex-1">
                    <NavLink className="px-6 py-2 text-center w-full" to='/dashboard/facultades'>Tabla Facultades</NavLink>
                </li>
                <li className="flex cursor-pointer bg-blue-50 rounded-[1rem] hover:bg-blue-200 flex-1">
                    <NavLink className="px-6 py-2 text-center w-full" to='/dashboard/programas'>Tabla Programas</NavLink>
                </li>
                <li className="flex cursor-pointer bg-blue-50 rounded-[1rem] hover:bg-blue-200 flex-1">
                    <NavLink className="px-6 py-2 text-center w-full" to='/dashboard/reporte'>Reporte</NavLink>
                </li>
            </ul>
            <div className="flex absolute bottom-10 right-10 w-fit cursor-pointer bg-red-400 text-white rounded-[1rem] hover:bg-blue-200">
                <NavLink className="px-6 py-2 text-center w-full" to='/login'
                    onClick={logout}
                >Salir</NavLink>
            </div>
        </section>
    )
}

export default DashboardPage