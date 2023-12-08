import { useNavigate } from "react-router-dom";
import ProgramaCard from "./ProgramaCard"
import { useEffect, useState } from "react";
import { showNotification } from "../../utilities/NotifyAlert";
import { deletePrograma, getAllProgramas } from "../../services/apiService.js";

const ProgramasPage = () => {

    const [programas, setProgramas] = useState([]);
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        const results = await deletePrograma(id);
        const newProgramas = programas.filter((programa) => programa.programa_id !== id)
        setProgramas(newProgramas)
        showNotification('success', results)
    }
    useEffect(() => {
        async function fetchProgramas() {
            console.log('Obteniendo programas...')
            const data = await getAllProgramas()
            console.log('get api:',data)
            setProgramas(data)
        }
        fetchProgramas()
    }, [])
    return (
        <section className="p-3 bg-[#f5f5f5]">
            <h2 className="text-4xl text-blue-300 font-bold py-2 text-center mb-4">Programas</h2>
            <div className="grid grid-cols-6 font-bold text-xl bg-blue-300 w-full py-4 px-2">
                <h4>Programa id</h4>
                <h4>Facultad id</h4>
                <h4>Nombre</h4>
                <h4>Cod programa</h4>
                <h4>Tipo</h4>
            </div>
            <div className="overflow-auto h-[570px] scroll flex flex-col">
                {
                    programas.length === 0 && <h3 className="text-2xl text-center mt-5">No hay programas...</h3>
                }
                {
                    programas.map((programa,index) => 
                        <ProgramaCard key={programa.programa_id} programa={programa} idx={index} handleDelete={handleDelete}/>
                    )
                }
            </div>
            <div className="mt-5 flex justify-between">
                <button className="py-2 px-4 text-xl uppercase mx-1 rounded-md bg-slate-500 text-white font-bold hover:bg-slate-600" onClick={()=>navigate('/dashboard/programas/add')}>Crear</button>
                <button className="py-2 px-4 text-xl mx-1 rounded-md bg-red-400 text-white font-bold hover:bg-red-600" onClick={()=>navigate('/dashboard')}>Regresar al dashboard</button>
            </div>
        </section>
    )
}

export default ProgramasPage