import {createContext} from 'react';

const AppContext = createContext(initialState);

const initialState={
    "username": "",
    "password": "",
    "isLoggedIn": false,
}

const reducer = (state,action)=>{
    
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                "username": action.payload.username,
                "password": action.payload.password,
                "isLoggedIn" : true,
            }
        case 'LOGOUT':
            return {
                ...state,
                "username": "",
                "password": "",
                "isLoggedIn" : true,
            }
        
        
        default: return state
    }
}

export {initialState,reducer,AppContext}