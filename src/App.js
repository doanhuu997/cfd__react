import React from 'react';

import './App.css';
import routers from './router';
import renderRouter from './core/routerConfig'
import AppProvider from './core/AppProvider';
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {

  return (

    <AppProvider >
      <Provider store={store}> {renderRouter(routers)} </Provider>
    </AppProvider>

  );
}

export default App;
