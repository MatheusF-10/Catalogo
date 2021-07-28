import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'

const validationPost = yup.object().shape({
    nome: yup.string().required().max(200)
})

function Cadastro() {

    let history = useHistory();

    const { register, handleSubmit, formState: { erros } } = useForm({
        resolver: yupResolver(validationPost)
    });

    const addModulo = data => axios.post("http://localhost:8000/modulos/", data)
        .then(() => {
            history.push("/modulos")
        })
        .catch(() => {
            console.log("deu errado")
        })


    return (
        <div>
            <header>
                <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                <ul className="menu">
                    <li><a href="/painel">Painel</a></li>
                </ul>
            </header>
            <section className="container-edit">
                <form className="formulario" onSubmit={handleSubmit(addModulo)}>
                    <input type="text" className="input-edit" name="nome" {...register("nome")}></input>

                    <button className="submitform-button" type="submit">Enviar</button>
                </form>
            </section>
        </div>
    );


}

export default Cadastro;