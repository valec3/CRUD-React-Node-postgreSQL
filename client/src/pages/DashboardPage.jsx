import { NavLink } from "react-router-dom"
const DashboardPage = () => {
    return (
        <section className="p-10">
            <ul>
                <li>
                    <NavLink to='/dashboard/facultades'>Facultades</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/programas'>Programas</NavLink>
                </li>
            </ul>
        </section>
    )
}

export default DashboardPage