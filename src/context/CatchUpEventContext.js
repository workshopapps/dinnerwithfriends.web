import { useContext, createContext, useState } from "react";

const CatchUpEventContext = createContext()

export const CatchUpEventContextProvider = ({children}) =>{
    const [dateAndTime, setDateAndTime] = useState([])
    


    const values={dateAndTime, setDateAndTime}
    return(
        <CatchUpEventContext.Provider value={values}>{children}</CatchUpEventContext.Provider>
    )
}

export const CatchUpEventContextUse = () =>{
    return useContext(CatchUpEventContext)
}