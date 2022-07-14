import { createContext, ReactNode } from "react";

interface ProcessContextProviderProps{
    children : ReactNode
}
interface ProcessDefaultContext{
    lastTime: string,
    status: string
}
const ProcessDefault ={
    lastTime : '12/07/2021',
    status : 'in process'
}
export const ProcessContext = createContext<ProcessDefaultContext>(ProcessDefault);
const ProcessContextProvider = ({children} : ProcessContextProviderProps ) =>{
    return <ProcessContext.Provider value={ProcessDefault}>
        {children} 
    </ProcessContext.Provider>
}

export default ProcessContextProvider