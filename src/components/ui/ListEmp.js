import React from 'react'
import { FaUserEdit } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

import { startDeleteEmp } from '../../actions/empleados';

export const ListEmp = ({ nombre, rfc, departamento, status } ) => {
    
    let history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = () => {

        if ( status === 'Inactivo' ) {
            Swal.fire({
                title: '¿Seguro quieres dar de baja este empleado?',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/menita-rh/list-emp');  
                    dispatch( startDeleteEmp( rfc ) );      
                    Swal.fire('Empleado Eliminado', `El empleado ${nombre} ha sido eliminado correctamente.` ,'success');
                }
            });

        } else {
            Swal.fire('Eliminación fallida', `No es posible eliminar a un usuario que aun trabaje para la empresa. Si ${nombre} ya no forma parte de la empresa, favor de editar su registro [Status]`, 'warning');
        }
    }
    
    return (
        <tr>
            <td>                
                <Link to={`/menita-rh/employee/${rfc}`} className="tableLink">
                    { nombre }
                </Link>
            </td>
            <td>{ departamento }</td>
            <td>{ status }</td>
            <td>
                <Link to={`/menita-rh/edit-emp/${rfc}`} className="tableLink">
                    <button
                        className="ListEmp__main__table__edit"
                    >
                        <FaUserEdit />
                    </button>
                </Link>
                
            </td>
            <td>
                <button
                    className="ListEmp__main__table__delete"
                    onClick={ handleDelete }
                >
                    <BsFillTrashFill />
                </button>
            </td>
        </tr>
    )
}
