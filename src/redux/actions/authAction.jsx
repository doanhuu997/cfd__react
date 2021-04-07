import userApi from "../../api/userApi";
import { AUTH_POPUP,AUTH_LOGIN, AUTH_LOGOUT, AUTH_LOGINERROR } from "./type";

export  function popupLogin(flag){
    return {
        type:AUTH_POPUP,
        payload:flag
    }
}
export function login1(user){
    return{
        type: AUTH_LOGIN,
        payload:user
    }
}
export function lgout(user){
    return{
        type:AUTH_LOGOUT,
       
    }
}
export function loginError(error){
    return {
        type:AUTH_LOGINERROR,
        payload:error
    }
}
export function fetchLogin(form){
    return async (dispatch) =>{
        let res= await userApi.login(form)
        if (res.error) {
          dispatch(loginError(res.error))
        } else {
            dispatch(login1(res.data))
            dispatch(popupLogin(false)) 

        }
    }
}