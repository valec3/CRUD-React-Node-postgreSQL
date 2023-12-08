import { useEffect, useState } from "react";
import FacultadCard from "./FacultadCard"
import { useNavigate } from "react-router-dom";
import { deleteFacultad, getAllFacultades } from "../../services/apiService";

const FacultadesPage = () => {

    const [facultades, setFacultades] = useState([]);
    const navigate = useNavigate()
    const handleDelete = async (id) => {
        deleteFacultad(id);
        const newFacultades = facultades.filter((facultad) => facultad.facultad_id !== id)
        setFacultades(newFacultades)
    }

    useEffect(() => {
        async function loadFacultades() {
            console.log('Obteniendo facultades...')
            const res= await getAllFacultades()
            console.log('get api:',res)
            setFacultades(res)
        }
        loadFacultades()
    }, [])

    return (
        <section className="p-3 bg-[#f5f5f5]">
            <h2 className="text-4xl text-blue-300 font-bold py-2 text-center">Facultades</h2>
            <div className="grid grid-cols-5 font-bold text-xl gap-2 bg-blue-300 w-full py-4 px-2">
                <h4>Id</h4>
                <h4>Nombre</h4>
                <h4>Abreviatura</h4>
                <h4>Id area</h4>
            </div>
            <div className="overflow-auto h-[570px] scroll">
                {
                    facultades.map((facultad,index) => 
                        <FacultadCard key={facultad.facultad_id} facultad={facultad} idx={index} handleDelete={handleDelete}/>
                    )
                }
            </div>
            <div className="mt-5 flex justify-between">
                <button className="py-2 px-4 text-xl uppercase mx-1 rounded-md bg-slate-500 text-white font-bold hover:bg-slate-600" onClick={() => navigate('/dashboard/facultades/add')}>Crear</button>
                <button className="py-2 px-4 text-xl mx-1 rounded-md bg-red-400 text-white font-bold hover:bg-red-600" onClick={() => navigate('/dashboard')}>Regresar al dashboard</button>
            </div>
        </section>
    )
}

export default FacultadesPage