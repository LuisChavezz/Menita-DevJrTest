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

        case types.updateEmp:
        
            return {
                ...state,
                empleados: state.empleados.map(
                    emp => (emp.rfc === action.payload.rfc)
                        ? action.payload.empleado 
                        : emp
                )
            }
            
        case types.deleteEmp:
        
            return {
                ...state,
                empleados: state.empleados.filter(
                    emp => emp.rfc !== action.payload
                )
            }
            
    
        default:
            return state;
    }
}