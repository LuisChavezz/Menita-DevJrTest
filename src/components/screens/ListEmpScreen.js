import React from 'react'
import { useSelector } from 'react-redux'

import { ListEmp } from '../ui/ListEmp';


export const ListEmpScreen = () => {
    
    const {empleados} = useSelector(state => state.workers);
    // console.log(empleados);
    
    return (
        <div className="ListEmp__main">
            <table className="ListEmp__main__table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                         empleados.map( emp => (
                            <ListEmp 
                                key={ emp.rfc } 
                                { ...emp } // PROP de cada propiedad que contenga cada 'Note'
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
