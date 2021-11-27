import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaFilter } from 'react-icons/fa';

import { ListEmp } from '../ui/ListEmp';


export const ListEmpScreen = () => {
    
    const {empleados} = useSelector(state => state.workers);

    const [empleadosTabla, setEmpleados] = useState(empleados);
    const [filtros, setFiltros] = useState({
        dep:  '',
        stat: '',
    });

    useEffect(() => {
        if ( filtros.dep === '' && filtros.stat === '' ) {
            setEmpleados(empleados);
        
        } else if ( filtros.dep !== '' && filtros.stat === '' ) {
            setEmpleados( empleados.filter( emp => (emp.departamento === filtros.dep)) )

        } else if ( filtros.dep === '' && filtros.stat !== '' ) {
            setEmpleados( empleados.filter( emp => (emp.status === filtros.stat)) )
            
        } else if ( filtros.dep !== '' && filtros.stat !== '' ) {
            setEmpleados( empleados.filter( emp => (emp.departamento === filtros.dep) && (emp.status === filtros.stat)) )
            
        }

    }, [filtros])

    
    return (
        <div className="ListEmp__main">
            <div className="ListEmp__filters">
                <div>
                    <p><FaFilter />Departamento</p>
                    <select 
                        name="departamento"
                        onChange={ (e) => setFiltros({...filtros, dep: e.target.value}) }
                    >
                        <option value="">*</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Sistemas">Sistemas</option>
                        <option value="Contabilidad">Contabilidad</option>
                        <option value="Credito y Cobranza">Credito y Cobranza</option>
                        <option value="Nómina">Nómina</option>
                        <option value="Legal">Legal</option>
                    </select>
                </div>

                <div>
                    <p><FaFilter />Status</p>
                    <select 
                        name="status"
                        onChange={ (e) => setFiltros({...filtros, stat: e.target.value}) }
                    >
                        <option value="">*</option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
            </div>

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
                         empleadosTabla.map( emp => (
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
