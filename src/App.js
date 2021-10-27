import React from 'react';

import './App.css';
import routers from './router';
import renderRouter from './core/routerConfig'
import AppProvider from './core/AppProvider';
// import { Provider } from 'react-redux'
import reducers from './redux/reducers'
import mysaga from './redux/saga'
function App() {

  return (

    <AppProvider reducers={reducers} saga={mysaga} >
      {/* <Provider store={store}>  </Provider> */}
      {renderRouter(routers)}
    </AppProvider>

  );
}

export default App;
