import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [attempts, setAttempts] = useState(0);

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.email === userData?.email && loginData.password === userData?.password) {
            navigate('/perfil');
        } else {
            setAttempts(attempts + 1);
            if (attempts >= 2) {
                setUserData(null);
                navigate('/');
            }
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
                <button type="submit">Ingresar</button>
                {attempts > 0 && <p>Intentos fallidos: {attempts}</p>}
            </form>
        </div>
    );
};

export default Login;
