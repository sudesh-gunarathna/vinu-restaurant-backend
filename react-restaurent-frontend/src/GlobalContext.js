import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { api } from "./config";
import Loading from "./Loading";

const GlobalContext = createContext();

function GlobalProvider ({children})

{
    const[user , setUser] = useState(null);
    //to retain user for RequireAuth
    const [loading, setLoading] = useState(true);
    
    // to user retain when refresh the page 
    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const result = await axios.get(`${api}/auth/me`, {withCredentials:true})
               // console.log(result.data)
                setUser(result.data)
                setLoading(false)
            }
            catch(err){
                setLoading(false)
            }
            //setLoading(false)
        }
        fetchUser();
    },[])

    return (
        <GlobalContext.Provider value={{user, setUser}}>
        {loading ? <Loading height="100vh"/> : <>{children}</>}
        </GlobalContext.Provider>
        ) 
}
export default GlobalProvider;

export function useGlobal(){
    return useContext(GlobalContext);
}