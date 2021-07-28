import './login.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import api_login from '../../service/api_post_user'
import { Route, Router } from 'react-router';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object().shape({
    nome: yup.string().required().max(200),
    rg: yup.string().required(9),

})

const Login = () => {

    let history = useHistory();

    const { register, handleSubmit, formState: { erros } } = useForm({
        resolver: yupResolver(validationPost)
    });

    const login = data => {

        console.log(data);
        axios.post("http://localhost:8000/usuarios/", data)
            .then(() => {
                localStorage.setItem('app-token', data)
                history.push("/painel")
            })
            .catch(() => {
                console.log("deu errado")
            })
    }

    return (
        <div>
            <section className="section">
                <div className="responsividade">
                    <h1 className="titulo-login">Catálogo de Aulas</h1>
                    <h4 className="subtitulo-login">Fazer Login</h4>
                    <div className="linha"></div>
                </div>

                <div className="box-login responsividade">
                    <form onSubmit={handleSubmit(login)}>
                        <div className="input-container">
                            <input name="nome" id="user" type="text" placeholder="Usuario" {...register("nome")} className="input" required></input>
                        </div>
                        <div className="input-container">
                            <input name="rg" id="user" type="password" placeholder="Sua senha é seu RG" {...register("rg")} className="input" required></input>
                        </div>
                        <button type="submit" className="button-form"><b>Entrar</b></button>
                    </form>
                    <div>

                    </div>
                </div>
            </section>
        </div >
    );


}

export default Login;