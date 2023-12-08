import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createPrograma,updatePrograma,getPrograma } from "../../services/apiService"
import { useNavigate, useParams } from "react-router-dom"


const ProgramasForm = () => {
    const navigate = useNavigate()
    const params = useParams()
    const {register,handleSubmit,formState:{errors},setValue}= useForm()

    const handleOnSubmit = handleSubmit(async (data) => {
        if(params.id){
            await updatePrograma(params.id,data)
        }else{
            await createPrograma(data)
        }
        navigate('/dashboard/configuración')
    })

    useEffect(() => {
        async function getProgramaById() {
            if(params.id){
                const response = await getPrograma(params.id)
                setValue('programa_id',response.data.programa_id)
                setValue('facultad_id',response.data.facultad_id)
                setValue('nombre',response.data.nombre)
                setValue('cod_programa',response.data.cod_programa)
                setValue('tipo',response.data.tipo)
            }
        }
        getProgramaById();
    }, [ params.id,setValue])
    console.log("programas form")
    return (
        <section>
            <div className="flex flex-col bg-slate-400 p-5 px-10 border rounded-xl m-10">
                <h2 className="text-4xl text-white font-bold py-2 pb-6">{params.id ? 'Actualizar' : 'Crear'} programa</h2>
                <form onSubmit={handleOnSubmit} className="grid grid-cols-2 gap-4 items-center">
                    <div className="cell">
                        <label htmlFor="" className="lbl">Id Programa:</label>
                        <input className={`input ${params.id ? 'input-disabled':''}`} type="number" name="" id="" {...(params.id ? { disabled: true } : null)} {...register("programa_id",{required:false})} />
                        {errors.programa_id && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div className="cell">
                        <label htmlFor="" className="lbl">Id Facultad:</label>
                        <input className={`input`} type="number" name="" id="" {...register("facultad_id",{required:false})} />
                        {errors.facultad_id && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div className="cell">
                        <label htmlFor="" className="lbl">Nombre:</label>
                        <input className="input" type="text" name="" id="" {...register("nombre",{required:false})} />
                    </div>
                    <div className="cell">
                        <label htmlFor="" className="lbl">Código Programa:</label>
                        <input className="input" type="text" name="" id="" {...register("cod_programa",{required:false})} />
                    </div>
                    <div className="cell">
                        <label htmlFor="" className="lbl">Tipo:</label>
                        <input className="input" type="text" name="" id="" {...register("tipo",{tipo:false})} />
                    </div>
                    <div className="mt-2 flex items-end h-full">
                        {
                            params.id?
                                <button className="btn">Actualizar</button>
                                : <button className="btn">Crear</button>
                        }
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ProgramasForm

