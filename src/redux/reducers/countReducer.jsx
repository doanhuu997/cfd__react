import { COUT_DECREMENT, COUT_INCREMENT } from "../actions/type"

let inittialState = {
    count: 0
}
 export default function authReducer(state = inittialState, action) {
    switch (action.type) {
        case COUT_INCREMENT: return{
                    ...state,
                    count : state.count + (action.payload || 1)
            }
        case COUT_DECREMENT:
            return{
                     ...state,
                    count : state.count - (action.payload || 1)
            }
        default: return state
    }

}