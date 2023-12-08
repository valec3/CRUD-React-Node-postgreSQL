/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { showNotification } from "../../utilities/NotifyAlert"

const FacultadCard = ({
    facultad,
    handleDelete
}) => {
    const navigate = useNavigate()
    const deleteBtn = ()=>{
        const confirm = window.confirm("¿Está seguro que desea borrar la facultad?")
        if (confirm){
            handleDelete(facultad.facultad_id)
            showNotification("eliminada")
        }
    }
    const updateBtn = ()=>{
        navigate(`/facultad/${facultad.facultad_id}`)
        console.log("update");
    }
    return (
        <div>
            <div className="grid grid-cols-5 gap-x-5 items-center border-b-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer py-2" >
                <h4>{facultad.facultad_id}</h4>
                <h4>{facultad.nombre}</h4>
                <h4>{facultad.abreviatura}</h4>
                <h4>{facultad.id_area}</h4>
                <div>
                    <button className="btn" onClick={deleteBtn}>Borrar</button>
                    <button className="btn" onClick={updateBtn}>Actualizar</button>
                </div>
            </div>
        </div>
    )
}

export default FacultadCard