import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import './edit.css'

const validationPost = yup.object().shape({
    nome: yup.string().required().max(200)
})

function Edit() {

    const { id } = useParams()

    let history = useHistory();



    const { register, handleSubmit, formState: { erros }, reset } = useForm({
        resolver: yupResolver(validationPost)
    });

    const editModulo = data => axios.put(`http://localhost:8000/modulos/${id}` + "/", data)
        .then(() => {
            history.push("/modulos")
        })
        .catch(() => {
            console.log("deu errado")
        })

    useEffect(() => {
        axios.get(`http://localhost:8000/modulos/${id}`)
            .then((response) => {
                reset(response.data)
            })
    }, [])



    return (
        <div>
            <header>
                <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                <ul className="menu">
                    <li><a href="/">Sign up</a></li>
                </ul>
            </header>
            <section className="container-edit">
                <form className="formulario" onSubmit={handleSubmit(editModulo)}>
                    <input type="text" className="input-edit" name="nome" {...register("nome")}></input>

                    <button className="submitform-button" type="submit">Enviar</button>
                </form>
            </section>
        </div>
    );
}

export default Edit;