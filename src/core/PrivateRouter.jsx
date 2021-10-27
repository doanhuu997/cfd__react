import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";


export default function PrivateRouter(props){
    let {login}=useSelector(state => state.auth);
    if(login)
    {
        return <Route {...props} />
    }
    return <Redirect to="/" />
}