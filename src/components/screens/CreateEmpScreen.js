import React from 'react'
import { useForm } from '../../hooks/useForm';


export const CreateEmpScreen = () => {
    
    // use form
    const [ formValues, handleInputChange, reset ] = useForm({
        nombre: '',
        rfc: '',
        fecha: '',
        departamento: '',
        sueldo: 0,
        status: 'Inactivo',
    });
    const { nombre, rfc, fecha, departamento, sueldo, status } = formValues;



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );

        // reset();
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    name="nombre"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={ nombre }
                    onChange={ handleInputChange }
                />

                <input 
                    type="text" 
                    name="rfc"
                    placeholder="RFC"
                    autoComplete="off"
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
