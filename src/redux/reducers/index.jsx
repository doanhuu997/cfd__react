
import countReducer from './countReducer'
import authReducer from './authReducer';
import { combineReducers} from 'redux';
 const reducers= combineReducers({
    count:countReducer,auth:authReducer
})
export default reducers