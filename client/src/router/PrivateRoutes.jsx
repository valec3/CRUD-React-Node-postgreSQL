
import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function PrivateRoutes() {
    const { auth } = useContext(AuthContext)
    if (!auth) {
        return <Navigate to='/login' />
    }
    console.log('autenticado')
    return <Outlet />

}