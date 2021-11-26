import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { FaUserEdit } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';

import { getEmpByRfc } from '../../selectors/getEmpByRfc';

export const EmployeeScreen = () => {
    
    const {empleados} = useSelector(state => state.workers);
    const { empRFC } = useParams()
    
    const { nombre, rfc, departamento, fecha, status, sueldo  } = getEmpByRfc( empleados, empRFC );
    // console.log({ nombre, rfc, departamento, fecha, status, sueldo  });

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
                >
                    Eliminar <BsFillTrashFill />
                </button>
            </div>
        </div>
    )
}
