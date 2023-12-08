import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import { LoginPage,SignUpPage,HomePage,FacultadesPage,ProgramasPage,DashboardPage,ProgramasForm,FacultadesForm} from "../pages";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'signup', element: <SignUpPage /> }
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: 'programas',
                element: <ProgramasPage />,
            },
            {
                path: 'programa/:id',
                element: <ProgramasForm />,
            },
            {
                path: 'programas/add',
                element: <ProgramasForm />,
            },
            {
                path: 'facultades',
                element: <FacultadesPage />,
            }, {
                path: 'facultad/:id',
                element: <FacultadesForm />,
            }, {
                path: 'facultades/add',
                element: <FacultadesForm />,
            },
            {
                path: '*',
                element: <Navigate to="/dashboard" />,
            },
        ],
    },
    {
        path: '*',
        element: <h2>Error</h2>,
    },
]);