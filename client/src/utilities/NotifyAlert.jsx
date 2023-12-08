import { toast } from "react-hot-toast"
export const showNotification = (estado) => {
    const message = `Programa ${estado} exitosamente`
    toast.success(message,{
        position:"top-right",
        style:{
            backgroundColor:"#4BB543",
            color:"#fff",
            fontWeight:"bold",
            padding:"10px"
        },
        iconTheme:{
            primary:"#fff",
            secondary:"#4BB543"
        },
        duration:3000,
        
    })
}