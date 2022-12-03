import { combineReducers } from "redux";
import { addUser } from "./action";
import { addTable } from "./action";
import { addFood } from "./action";
import { addOrder } from "./action";

const initialStateRegistr=false
const initialStateTable=''

function RegisterUser(state=initialStateRegistr,{type,payload}){
    switch(type){
        case addUser:
            return payload.data;
        default :
        return state
    }
}

function AddTable(state=initialStateTable,{type,payload}){
    switch(type){
        case addTable:
            return payload.data;
        default :
        return state
    }
}


function AddFood(state=initialStateTable,{type,payload}){
    switch(type){
        case addFood:
            return payload.data;
        default :
        return state
    }
}

function AddOrder(state=initialStateTable,{type,payload}){
    switch(type){
        case addOrder:
            return payload.data;
        default :
        return state
    }
}
const rootReducer=combineReducers({
    RegisterUser,
    AddTable,
    AddFood,
    AddOrder
})


export default rootReducer