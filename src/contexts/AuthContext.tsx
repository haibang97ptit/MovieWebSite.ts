import { ReactNode , createContext, useReducer } from 'react'
import { authReducer , AuthState } from '../reducers/AuthReducer'
import { AuthActionType } from '../reducers/typeAuth' 

const { AUTH_TYPE } = AuthActionType
interface AuthContextProps {
    children : ReactNode
}
interface AuthContextDefault {
    authInfo :AuthState,
    login : (username : string) => void
}
const authDefault = { 
    isAuthent : false,
    username : ''
}
const AuthContexDefaultData ={

}
export const AuthContex = createContext<AuthContextDefault>({
    authInfo : authDefault,
    login : () => {}
})
const AuthContextProvider = ( {children} : AuthContextProps) => {
    const [ authInfo, dispatch] = useReducer(authReducer , authDefault)
    const login = (username : string) => dispatch({ type : AUTH_TYPE , payload : username})
    const authContexData = {
        authInfo, 
        login
    }
    return <AuthContex.Provider value={authContexData}>
        {children}
    </AuthContex.Provider>

}
export default AuthContextProvider