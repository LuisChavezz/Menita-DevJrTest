import { types } from "../types/types"

//get ls empleados
let lsEmpleados = JSON.parse( localStorage.getItem('empleados')) || [];

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

export const startUpdateEmp = ( rfc, empleado ) => {

    return ( dispatch ) => {
        lsEmpleados = lsEmpleados.map(
            emp => ( emp.rfc === rfc )
                ? emp = empleado
                : emp
        );
        localStorage.setItem('empleados', JSON.stringify( lsEmpleados ));

        dispatch( updateEmpleado( rfc, empleado ) );
    }
}

export const startDeleteEmp = ( rfc ) => {

    return ( dispatch ) => {
        lsEmpleados = lsEmpleados.filter( emp => emp.rfc !== rfc );
        localStorage.setItem('empleados', JSON.stringify( lsEmpleados ));
        
        dispatch( deleteEmpleado( rfc ) );
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

export const deleteEmpleado = ( id ) => {

    return {
        type: types.deleteEmp,

        payload: id
    }
}

export const updateEmpleado = ( rfc, empleado ) => {

    return {
        type: types.updateEmp,

        payload: {
            rfc,
            empleado: {
                rfc,
                ...empleado
            }
        }
    }
}