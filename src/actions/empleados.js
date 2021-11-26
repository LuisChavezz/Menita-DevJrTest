import { types } from "../types/types"

//get ls empleados
const lsEmpleados = JSON.parse( localStorage.getItem('empleados')) || [];

export const startCreateEmp = ( empleado ) => {
    
    return ( dispatch ) => {
        lsEmpleados.push(empleado);
        localStorage.setItem('empleados', JSON.stringify( lsEmpleados ));

        dispatch( crearEmpleado( empleado ) );
    }
}

export const startLoadingEmp = () => {

    return ( dispatch ) => {
        dispatch( loadEmpleados( lsEmpleados ) );
    }
}


//actions
export const crearEmpleado = ( empleado ) => {
    return {
        type: types.createEmp,
        payload: empleado
    }
}

export const loadEmpleados = ( empleados ) => {
    return {
        type: types.loadEmp,
        payload: empleados
    }
}