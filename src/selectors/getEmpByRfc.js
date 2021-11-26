

export const getEmpByRfc = ( empleados, rfc) => {
    
    return empleados.find( emp => emp.rfc === rfc );
}