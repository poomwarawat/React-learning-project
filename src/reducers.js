import { combineReducers } from 'redux'

function CalculateAge(state=0, action){
    switch(action.type){
        case "UPAGE" : return state + 1
        case "DOWNAGE" : return state - 1
        default : return state
    }
}

function Users(state={}, action){
    switch(action.type){
        case "LOAD_USERS": return action.payload
        default : return state
    }
}

const reducers = combineReducers({
    Cal : CalculateAge,
    Users
})   


export default reducers 