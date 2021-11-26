import React from 'react'


export const ListEmp = ({ nombre, departamento, status } ) => {
    
    
    
    return (
        <tr>
            <td>{ nombre }</td>
            <td>{ departamento }</td>
            <td>{ status }</td>
            <td>--editar--</td>
            <td>--eliminar--</td>
        </tr>
    )
}
