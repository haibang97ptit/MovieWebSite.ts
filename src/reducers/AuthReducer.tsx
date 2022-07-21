import { AuthActionType } from './typeAuth'

const { AUTH_TYPE } = AuthActionType
export interface AuthState {
    isAuthent : boolean,
    username : string
}
type AuthAction ={
    type : AuthActionType,
    payload : string
}
export const authReducer = (state : AuthState , action : AuthAction) =>{
    switch (action.type){
        case AUTH_TYPE:
            return {
                ...state,
                isAuthent : !state.isAuthent,
                username : action.payload

            }
        default :
            return state;
    }
   
}

