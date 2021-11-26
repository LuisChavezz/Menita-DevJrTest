import { types } from "../types/types"

//Get del LS
const lsEmp = JSON.parse(localStorage.getItem('empleados')) || [];

export const startCreateEmp = ( empleado ) => {
    
    return ( dispatch ) => {
        
        lsEmp.push(empleado);
        console.log(lsEmp);
        localStorage.setItem('empleados', JSON.stringify( lsEmp ));

        dispatch( crearEmpleado( empleado ) );
    }
}

export const startLoadingEmp = () => {

    return ( dispatch ) => {
        const lsEmpleados = JSON.parse( localStorage.getItem('empleados'));

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