import React, { useEffect, useState } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore,compose,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
export let Context = React.createContext()
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose

const sagamiddleware=createSagaMiddleware();
let store
function App({ children,reducers,saga }) {
    let [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || {
        login: false,
        user: null
    });

    function updateInfo(data) {
        setAuth({
            ...auth,
            user: data
        })
    }
    let thunFake= store=>next=>action=>{
        if(typeof action ==='function'){
            let { dispatch}=store
            return action(dispatch)
        }
        next(action)
    }
    
    if(!store)
    {
        // if(!reducers) reducers = () => {}
        store = createStore( reducers,composeEnhancers(applyMiddleware(sagamiddleware,thunFake )) )
        // sagamiddleware.run( saga || function* () {})
    }
    let history = useHistory()
    function linkLoading(e) {
        document.body.classList.remove('menu-is-show')
        document.querySelector('.loading-page').style.transform = 'scale(25)';

        e.preventDefault()
        console.log(e.target.href?.replace(window.location.origin, ''))
        setTimeout(() => {
            history.push(e.target.href?.replace(window.location.origin, '') || '')
            document.querySelector('.loading-page').style.transform = 'scale(0)';
            
        }, 500)
    }

    return (
        <Provider store={store}>
            <Context.Provider value={{ linkLoading, updateInfo }}>
                {children}

            </Context.Provider>
        </Provider>

    );
}
export default function AppProvider({ children,reducers,saga }) {
    return <BrowserRouter >
        <App reducers={reducers} saga={saga}>
            {children}
        </App>
    </BrowserRouter>
}