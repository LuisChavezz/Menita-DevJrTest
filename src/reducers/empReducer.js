import { types } from "../types/types";



const initialState = {
    empleados: [],
}

export const empReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.createEmp:
            
            return {
                ...state,
                empleados: [ ...state.empleados, action.payload ]
            }

        case types.loadEmp:
        
            return {
                ...state,
                empleados: [ ...action.payload ]
            }
            
    
        default:
            return state;
    }
}