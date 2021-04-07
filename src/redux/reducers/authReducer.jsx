import { AUTH_LOGIN, AUTH_LOGINERROR, AUTH_LOGOUT, AUTH_POPUP } from "../actions/type"

let initialState=JSON.parse(localStorage.getItem('auth')) || {
    login: false,
    user: null,
    popupOpen:false,
    loginError:null

}
export default function authReducer(state=initialState,action)
{
    switch (action.type) {
        case AUTH_POPUP: return{
            ...state,
            popupOpen:action.payload
        }
            
        case AUTH_LOGIN :
            localStorage.setItem('auth', JSON.stringify({
                login:true,
                user:action.payload
            }))
            if (action.payload.token) {
                localStorage.setItem('token', JSON.stringify(action.payload.token))
            }
             return{
            ...state,
            login:true,
            user:action.payload
        }
        case AUTH_LOGOUT: 
        localStorage.removeItem('auth')
        localStorage.removeItem('token')
        return{
            ...state,
           login:false,
           user:null
        }
        case AUTH_LOGINERROR :
            return{
                ...state,
                loginError:action.payload
            }
        default: return state
           
    }
}