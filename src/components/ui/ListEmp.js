import React from 'react'
import { FaUserEdit } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';

export const ListEmp = ({ nombre, departamento, status } ) => {
    
    
    
    return (
        <tr>
            <td>{ nombre }</td>
            <td>{ departamento }</td>
            <td>{ status }</td>
            <td>
                <button
                    className="ListEmp__main__table__edit"
                >
                    <FaUserEdit clashName="ListEmp__main__table__edit__icon"/>
                </button>
            </td>
            <td>
                <button
                    className="ListEmp__main__table__delete"
                >
                    <BsFillTrashFill clashName="ListEmp__main__table__edit__icon" />
                </button>
            </td>
        </tr>
    )
}
