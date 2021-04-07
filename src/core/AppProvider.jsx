import React, { useEffect, useState } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import {Provider} from 'react-redux'
export let Context = React.createContext()

// function Provider({ children }) {

// }
function App({children}){
    let [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || {
        login: false,
        user: null
    });

    function updateInfo(data)
    {
        setAuth({
           ...auth,
            user: data
        })
    }

    let history = useHistory()
    function linkLoading(e) {
        document.body.classList.remove('menu-is-show')
        document.querySelector('.loading-page').style.transform = 'scale(25)';

        e.preventDefault()
        setTimeout(() => {
            history.push(e.target.href?.replace(window.location.origin, '') || '')
            document.querySelector('.loading-page').style.transform = 'scale(0)';
        }, 500)
    }


    return (
        <Context.Provider value={{  linkLoading,updateInfo }}>
            {children}

        </Context.Provider>

    );
}
export default function AppProvider({ children }) {
    return <BrowserRouter >
        <App>
            {children}
        </App>
    </BrowserRouter>
}