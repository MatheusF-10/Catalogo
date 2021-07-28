import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import React, { useEffect, useState } from 'react';

const validationPost = yup.object().shape({
    nome: yup.string().required().max(200),
    data_aula: yup.date().required(),
    fk_modulo: yup.number().required()
})


function Edit() {

    const { id } = useParams()

    let history = useHistory();

    const { register, handleSubmit, formState: { erros }, reset } = useForm({
        resolver: yupResolver(validationPost)
    });

    const addAulas = data => {
        data.data_aula = data.data_aula.toISOString().split("T")[0];

        axios.put(`http://localhost:8000/aulas/${id}` + "/", data)
            .then(() => {
                history.push("/aulas")
            })
            .catch(() => {
                console.log("deu errado")
            })
    }


    const [comments, setComments] = useState([])

    useEffect(() => {
        async function fetchComments() {
            const response = await axios.get('http://localhost:8000/modulos/');
            setComments(response.data)
        }
        fetchComments()
    }
        , [])


    useEffect(() => {
        axios.get(`http://localhost:8000/aulas/${id}`)
            .then((response) => {
                reset(response.data)
            })
    }, [])

    return (
        <div>
            <header>
                <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                <ul className="menu">
                    <li><a href="/painel">Painel</a></li>
                </ul>
            </header>
            <section className="container-edit">
                <form className="formulario" onSubmit={handleSubmit(addAulas)}>
                    <input type="text" className="input-edit" name="nome" {...register("nome")}></input>
                    <input type="date" className="input-edit" name="data_aula" {...register("data_aula")}></input>
                    <select className="select-modulo" name="fk_modulo" {...register("fk_modulo")}>
                        {comments.map(comments => (
                            <option value={comments.id} key={comments.id}>{comments.nome}</option>
                        ))}
                    </select>
                    <button className="submitform-button" type="submit">Cadastrar</button>
                </form>
            </section>
        </div>
    );


}

export default Edit;