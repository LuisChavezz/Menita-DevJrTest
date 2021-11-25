import React from 'react'
import { useHistory } from 'react-router'
import { HiUserAdd } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';


export const HomeScreen = () => {
    
    let history = useHistory();

    const handleRedirectCreate = () => {
        history.push('/menita-rh/create-emp');
    }

    const handleRedirectList = () => {
        history.push('/menita-rh/list-emp');
    }
    
    return (
        <div className="home__main">
            <div className="home__main__element" onClick={ handleRedirectCreate }>
                <HiUserAdd className="home__main__element__icon"/>
                <h1>Añadir nuevo empleado</h1>
            </div>

            

            <div className="home__main__element" onClick={ handleRedirectList }>
                <FaUsers className="home__main__element__icon"/>
                <h1>Ver lista de empleados</h1>
            </div>
        </div>
    )
}
