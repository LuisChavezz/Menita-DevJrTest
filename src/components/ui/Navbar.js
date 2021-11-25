import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    
    
    
    return (
        <nav className="navbar" >
            <Link to="/menita-rh/homepage" className="navbar__logo">
                Menita-RH
            </Link>

            <div className="navbar__links">
                <NavLink
                    className="navbar__links__link"
                    exact
                    to="/menita-rh/create-emp"
                >
                    Nuevo empleado
                </NavLink>

                <NavLink
                    className="navbar__links__link"
                    exact
                    to="/menita-rh/list-emp"
                >
                    Lista de empleados
                </NavLink>
            </div>
        </nav>
    )
}
