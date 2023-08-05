import { useState } from 'react';

export const Formulario = () => {
    
   
        const [formData, serFormData]=useState({
            nombreMascota:'',
            nombrePropietario:'',
            email:'',
            alta:'',
            sintomas: ''
        })
        
        const {nombreMascota,nombrePropietario,email,alta,sintomas } = formData;
        const handleInputChange =(e) =>{
            serFormData({
                ...formData,[e.target.name]:e.target.value,
            })
        }
    


    const handleSubmit = (e) => {
        e.preventDefault();
    } 
    
    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-5">
            {/* Titulo de la seccion del formulario*/}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            {/* descripcion de la seccion formulario*/}
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            {/* formulario */}
            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        name='nombreMascota'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreMascota}
                        onChange={handleInputChange}
                    />  
                    <label htmlFor="nombrePropietario" className="block text-gray-700 uppercase font-bold">
                        Nombre del propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        name='nombrePropietario'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombrePropietario}
                        onChange={handleInputChange}
                    />  
                    <label htmlFor="Correo" className="block text-gray-700 uppercase font-bold">
                        Correo
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="correo"
                        name='email'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={handleInputChange}
                    />  
                    <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        placeholder="dd/mm/yyyy"
                        name='alta'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={ handleInputChange}
                    />  
                    <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <input
                        id="Sintomas"
                        type="text"
                        placeholder="Sintomas"
                        name='sintomas'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={ handleInputChange}
                    />  
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={  'Agregar Paciente' }
                />
            </form>
        </div>
    );
  };