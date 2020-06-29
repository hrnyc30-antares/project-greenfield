import {combineReducers} from 'redux'

// need to import a reducer from where ever its been created and add it to the combined function

const reducer = (state = [], action) =>{
    switch(action.type){
        default: return state
    }
}

export default combineReducers(reducer)