import React from 'react';
import './catalogo.css';
import api_modulos from "../../service/api_get_modulos";
import axios from 'axios';
//import { useState } from 'react';

//import Cabecalho from "../components/header_home_page";

class Catalogo extends React.Component {


    state = {
        catalogo: [],
        aulas: []
    }

    async componentDidMount() {
        const response = await api_modulos.get('');
        try {
            this.setState({ catalogo: response.data });
        } catch (error) {
            alert("Houve um problema na chamada ao servidor!")
        }


    }

    async showAulas(catalogo) {

        try {
            const { data } = await axios.get("http://localhost:8000/aulas/");

            const aulas_catalogo = data.filter((aula) => (
                aula.fk_modulo === catalogo
            ))
            console.log(aulas_catalogo)
            this.setState({ aulas: aulas_catalogo })

        } catch (error) {

        }


    }


    render() {


        const { catalogo, aulas } = this.state;




        return (
            <div>
                <header>
                    <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                    <ul className="menu">
                        <li><a href="/login">Login</a></li>

                    </ul>
                </header>
                <div className="horizontal-line"></div>
                <div className="titulo-pagina">
                    <h1 className="default-font-collor">Módulos</h1>
                    <h3 className="color-subtitle">Selecione o módulo para verificar as aulas disponíveis:</h3>
                </div>
                <section className="container">
                    {/* DIV Listando os Catalogos */}
                    <div className="grid-modules">

                        {catalogo.map(catalogo => (

                            <button onClick={() => this.showAulas(catalogo.id)} className="button-class" key={catalogo}>
                                <div className="intra-button">

                                </div>
                                <div>
                                    <h5 className="default-font-collor">{catalogo.nome}</h5>
                                    <span className="default-font-collor">{catalogo.num_aulas} aulas</span>
                                </div>
                            </button>
                        ))}

                    </div>
                </section>
                <div className="container">

                    <div className="grid-aulas">
                        {aulas.map(aula => (

                            <div className="button-class-aulas">
                                <div>
                                    <p className="default-font-collor conteudo-aulas">Aula: {aula.nome}</p>
                                    <p className="default-font-collor conteudo-aulas">Data: {aula.data_aula}</p>
                                </div>
                            </div>

                        ))
                        }
                    </div>
                </div>
            </div>
        );
    };
};

export default Catalogo;