import { useNavigate } from "react-router-dom";
import ProgramaCard from "./ProgramaCard"
import { useEffect, useState } from "react";
import { showNotification } from "../../utilities/NotifyAlert";
import { deletePrograma, getAllProgramas } from "../../services/apiService.js";

const ProgramasPage = () => {

    const [programas, setProgramas] = useState([]);
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        deletePrograma(id);
        const newProgramas = programas.filter((programa) => programa.programa_id !== id)
        setProgramas(newProgramas)
        showNotification("eliminada")
    }
    useEffect(() => {
        async function fetchProgramas() {
            console.log('Obteniendo programas...')
            const {data} = await getAllProgramas()
            console.log('get api:',data)
            setProgramas(data)
        }
        
        fetchProgramas()
    }, [])
    return (
        <section className="p-3 bg-[#f5f5f5]">
            <h2 className="text-4xl text-blue-300 font-bold py-2 text-center">Programas</h2>
            <div className="grid grid-cols-6 font-bold text-xl bg-blue-300 w-full py-4 px-2">
                <h4>Programa id</h4>
                <h4>Facultad id</h4>
                <h4>Nombre</h4>
                <h4>Cod programa</h4>
                <h4>Tipo</h4>
            </div>
            <div className="overflow-auto h-[570px] scroll">
                {
                    programas.map((programa,index) => 
                        <ProgramaCard key={programa.programa_id} programa={programa} idx={index} handleDelete={handleDelete}/>
                    )
                }
            </div>
            <div className="mt-5">
                <button className="py-2 px-4 text-xl uppercase mx-1 rounded-md bg-slate-500 text-white font-bold hover:bg-slate-600" onClick={()=>navigate('/dashboard/programas/add')}>Crear</button>
            </div>
        </section>
    )
}

export default ProgramasPage