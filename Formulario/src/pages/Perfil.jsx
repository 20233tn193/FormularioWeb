import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Perfil = () => {
    const { userData } = useContext(UserContext);
    
    if (!userData) {
        return <p>No hay datos disponibles.</p>;
    }

    return (
        <div className='container'>
            <h2>Perfil</h2>
            <p><strong>Nombre:</strong> {userData.name}</p>
            <p><strong>Correo:</strong> {userData.email}</p>
            <p><strong>Edad:</strong> {userData.age}</p>
            <p><strong>Teléfono:</strong> {userData.tel}</p>
        </div>
    );
};

export default Perfil;
