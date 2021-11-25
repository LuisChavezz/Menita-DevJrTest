import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    
    
    
    return (
        <nav>
            <Link to="/menita-rh/homepage">
                Menita
            </Link>

            <NavLink
                exact="true"
                to="/menita-rh/create-emp"
            >
                Dar de alta
            </NavLink>

            <NavLink 
                exact="true"
                to="/menita-rh/list-emp"
            >
                Lista de empleados
            </NavLink>
        </nav>
    )
}
