import { toast } from "react-hot-toast"
export const showNotification = (estado, message) => {
    if (estado === "error") {
        toast.error(message,{
            position:"top-right",
            style:{
                backgroundColor:"#FF0000",
                color:"#fff",
                fontWeight:"bold",
                padding:"10px"
            },
            iconTheme:{
                primary:"#fff",
                secondary:"#FF0000"
            },
            duration:3000,
            
        })
    } else if (estado === "success") {
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
}