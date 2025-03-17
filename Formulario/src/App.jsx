import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Formulario from './pages/Formulario';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Formulario />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;

