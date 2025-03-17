import React, { createContext, useState } from 'react';
//Se creo un contexto para el usuario que sirve para almacenar la informacion del mismo
export const UserContext = createContext();

export const UserProvider = ({ children }) => { //provider para almacenar la inf.
    //userData es el estado que almacena la informacion del usuario
    const [userData, setUserData] = useState(null);

    return ( //retornara el provider con el valor del estado userData y la funcion setUserData
        <UserContext.Provider value={{ userData, setUserData }}>
            {children} {/*retorna los hijos del provider*/}
        </UserContext.Provider>
    );
};