import React from 'react'
import { FaUserEdit } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ListEmp = ({ nombre, rfc, departamento, status } ) => {
    
    
    
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
                <button
                    className="ListEmp__main__table__edit"
                >
                    <FaUserEdit />
                </button>
            </td>
            <td>
                <button
                    className="ListEmp__main__table__delete"
                >
                    <BsFillTrashFill />
                </button>
            </td>
        </tr>
    )
}
