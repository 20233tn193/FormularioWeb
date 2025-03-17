import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Formulario = () => {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().required("Campo requerido"),
        email: yup.string().email("Correo electrónico inválido").required("Campo requerido"),
        age: yup.number().positive("Debe ser un número positivo").integer("Debe ser un número entero").required("Campo requerido").min(18, "Debe ser mayor de 18 años").typeError("Campo requerido"),
        tel: yup.number().positive("Debe ser un número positivo").integer("Debe ser un número entero").required("Campo requerido").typeError("Campo requerido"),
        password: yup.string().min(4, "Debe tener al menos 4 caracteres").required("Campo requerido").max(10, "Debe tener como máximo 10 caracteres"),
        confirPass: yup.string().oneOf([yup.ref('password'), null], "Las contraseñas deben coincidir").required("Campo requerido")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        setUserData(data);
        navigate('/login');
    }

    return (
        <div className="container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Nombre Completo' {...register("name")} />
                <p>{errors.name?.message}</p>
                <input type="text" placeholder='Email' {...register("email")} />
                <p>{errors.email?.message}</p>
                <input type="number" placeholder='Edad' {...register("age")} />
                <p>{errors.age?.message}</p>
                <input type="number" placeholder='Teléfono' {...register("tel")} />
                <p>{errors.tel?.message}</p>
                <input type="password" placeholder='Contraseña' {...register("password")} />
                <p>{errors.password?.message}</p>
                <input type="password" placeholder='Validación de Contraseña' {...register("confirPass")} />
                <p>{errors.confirPass?.message}</p>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Formulario;