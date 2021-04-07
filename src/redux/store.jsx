
import { createStore,combineReducers, applyMiddleware } from 'redux';
import countReducer from './reducers/countReducer'
import authReducer from './reducers/authReducer';
import { COUT_DECREMENT, COUT_INCREMENT } from './actions/type';
import { createLogger} from 'redux-logger'
let reducer= combineReducers({
    count:countReducer,auth:authReducer
})
const logger=createLogger({})
let thunFake= store=>next=>action=>{
    if(typeof action ==='function'){
        let { dispatch}=store
        return action(dispatch)
    }
    next(action)
}
let midaware= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store = createStore( reducer,applyMiddleware(logger,thunFake ) )
export default store;