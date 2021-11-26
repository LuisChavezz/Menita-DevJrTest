import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { FaUserEdit } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

import { getEmpByRfc } from '../../selectors/getEmpByRfc';
import { startDeleteEmp } from '../../actions/empleados';


export const EmployeeScreen = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const {empleados} = useSelector(state => state.workers);
    const { empRFC } = useParams();

    
    const { nombre, rfc, departamento, fecha, status, sueldo  } = getEmpByRfc( empleados, empRFC );
    console.log(status);
    
    
    const handleDelete = () => {

        if ( status === 'Inactivo' ) {
            Swal.fire({
                title: '¿Seguro quieres dar de baja este empleado?',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.replace('/menita-rh/list-emp');  
                    dispatch( startDeleteEmp( rfc ) );      
                    Swal.fire('Empleado Eliminado', `El empleado ${nombre} ha sido eliminado correctamente.` ,'success');
                }
            });

        } else {
            Swal.fire('Eliminación fallida', `No es posible eliminar a un usuario que aun trabaje para la empresa. Si ${nombre} ya no forma parte de la empresa, favor de editar su registro [Status]`, 'warning');
        }
    }
        
    return (
        <div className="employee__main">
            <div className="employee__main__card">
                <div className="employee__main__card__img">
                    <img src="https://cdn-icons-png.flaticon.com/512/432/432693.png" alt="cardPhoto" />
                </div>

                <div className="employee__main__card__info">
                    <i>Nombre</i>
                    <h2>{ nombre }</h2>

                    <i>Fecha de Nacimiento</i>
                    <h2>{ fecha }</h2>

                    <i>RFC</i>
                    <h2>{ rfc }</h2>

                    <i>Departamento</i>
                    <h2>{ departamento }</h2>

                    <i>Sueldo</i>
                    <h2>$ { sueldo } / mes</h2>

                    <i>Status de empleado</i>
                    <h2>{ status }</h2>
                </div>
            </div>

            <div className="employee__main__buttons">
                <button
                    className="employee__main__buttons__edit"
                >
                    Editar <FaUserEdit />
                </button>

                <button
                    className="employee__main__buttons__delete"
                    onClick={ handleDelete }
                >
                    Eliminar <BsFillTrashFill />
                </button>
            </div>
        </div>
    )
}
