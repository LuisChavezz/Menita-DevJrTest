import React from 'react'
import { useDispatch } from 'react-redux';
import validator from 'validator';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { startCreateEmp } from '../../actions/empleados';



export const CreateEmpScreen = () => {
    
    const dispatch = useDispatch();

    // use form
    const [ formValues, handleInputChange, reset ] = useForm({
        nombre: '',
        rfc: '',
        fecha: '',
        departamento: 'Recursos Humanos',
        sueldo: 1,
        status: 'Activo',
    });
    const { nombre, rfc, fecha, departamento, sueldo, status } = formValues;



    const handleSubmit = (e) => {
        e.preventDefault();

        if ( isFormValid() ) { // Sí el formulario es válid
            dispatch( startCreateEmp( formValues ) );
            reset();
            Swal.fire('Empleado agregado', 'El empleado se ha registrado correctamente.' ,'success');
        }
    }

    //Validación del formulario
    const isFormValid = () => {

        if ( validator.isEmpty( nombre ) || nombre === undefined ) {
            Swal.fire('Error', 'Debe ingresar un nombre.' ,'error');
            return false;

        } else if ( validator.isEmpty( rfc ) ) {
            Swal.fire('Error', 'Debe ingresar un RFC.' ,'error');
            return false;

        } else if ( validator.isEmpty( fecha ) || validator.isAfter(fecha, '2013-11-20') ) {
            Swal.fire('Error', 'Debe ingresar una fecha. Y sólo puede registrar empleados mayores de edad.' ,'error');
            return false;

        } else if ( sueldo <= 0 || sueldo > 999999 ) {
            Swal.fire('Error', 'El empleado debe tener un sueldo no mayor a $999,999' ,'error');
            return false;

        }

        return true;
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    name="nombre"
                    placeholder="Nombre"
                    autoComplete="off"
                    minLength="3"
                    maxLength="50"
                    value={ nombre }
                    onChange={ handleInputChange }
                />

                <input 
                    type="text" 
                    name="rfc"
                    placeholder="RFC"
                    autoComplete="off"
                    minLength="19"
                    maxLength="19"
                    value={ rfc }
                    onChange={ handleInputChange }
                />

                <input 
                    type="date" 
                    name="fecha"    
                    value={ fecha }
                    onChange={ handleInputChange }
                />

                <label>Departamento: </label>
                <select 
                    name="departamento"
                    value={ departamento }
                    onChange={ handleInputChange }
                >
                    <option value="Recursos humanos">Recursos Humanos</option>
                    <option value="Sistemas">Sistemas</option>
                    <option value="Contabilidad">Contabilidad</option>
                    <option value="Credito y Cobranza">Credito y Cobranza</option>
                    <option value="Nómina">Nómina</option>
                </select>
                
                <label>Status: </label>
                <select 
                    name="status"
                    value={ status }
                    onChange={ handleInputChange }
                >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>

                <input 
                    type="number"
                    name="sueldo"
                    placeholder="Sueldo"
                    autoComplete="off"
                    value={ sueldo }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                >
                    Añadir empleado
                </button>

            </form>
        </div>
    )
}
