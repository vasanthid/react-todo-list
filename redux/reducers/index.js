import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'

let rootReducer = combineReducers({
    todos: todoReducer,
    user: userReducer
})

export default rootReducer