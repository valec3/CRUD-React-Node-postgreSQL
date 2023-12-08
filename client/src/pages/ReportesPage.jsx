import { useEffect, useState } from "react"
import { getViewReport } from "../services/apiService"
import { useNavigate } from "react-router-dom"

const ReportesPage = () => {
    const navigate = useNavigate()
    const [reporte, setReporte] = useState([])
    useEffect(() => {
        async function getReporte() {
            const data = await getViewReport()
            setReporte(data)
        }
        getReporte()
    }, [])
    console.log(reporte)
    return (
        <section className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-4xl font-bold mb-3 pb-2 border-blue-300 border-b-[2px] w-full text-center text-blue-400">Reporte</h1>
            <div className="bg-white overflow-y-auto custom-scrollbar rounded-md border-[2px] border-blue-600 shadow-md shadow-blue-300">
                <div className="grid grid-cols-3 justify-center items-center font-bold text-xl bg-blue-300 w-full py-4 px-4">
                    <h4>N°</h4>
                    <h4>Abreviatura de Facultad</h4>
                    <h4>Programas</h4>
                </div>
                {reporte.map((item) =>
                    <div key={item.numero_registro} className="grid grid-cols-3 justify-center items-center border-b-[1px] border-blue-300 py-4 hover:bg-slate-200 cursor-pointer px-5 font-semibold">
                        <p>{item.numero_registro}</p>
                        <p>{item.abreviatura}</p>
                        <p>{item.programas}</p>
                    </div>
                )}
            </div>
            <div>
                <button
                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => navigate('/dashboard')}
                >
                    Volver al dashboard
                </button>
            </div>
        </section>
    )
}

export default ReportesPage