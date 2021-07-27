import React from 'react';
import './modulos.css';
import api_modulos from "../../../../service/api_get_modulos";
import { useHistory } from 'react-router-dom'


class Modulos extends React.Component {

    state = {
        catalogo: [],
    }

    async componentDidMount() {
        const response = await api_modulos.get('');
        try {
            this.setState({ catalogo: response.data });
        } catch (error) {
            alert("Houve um problema na chamada ao servidor!")
        }
    }

    async excluirModulo(id) {

        const response = await api_modulos.delete(id + "/");
        try {
            this.setState({ catalogo: response.data })

        } catch (error) {
            alert("Não foi possível excluir o módulo")
        }
    }

    render() {

        const { catalogo } = this.state;

        return (
            <div>
                <header>
                    <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                    <ul className="menu">
                        <li><a href="/">Sign up</a></li>
                    </ul>
                </header>
                <h1 className="title-container">Módulos</h1>
                <div className="div-button">
                    <button className="button-cadastrar">
                        <a href={"/modulos/cadastrar"}>Cadastrar Novo Módulo</a>
                    </button>
                </div>
                <section className="container">
                    <div className="grid-modules">
                        {catalogo.map(catalogo => (

                            <button className="button-class" key={catalogo}>
                                <div className="intra-button">
                                    <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                                </div>
                                <div>
                                    <h5 className="default-font-collor">{catalogo.nome}</h5>
                                    <span className="default-font-collor">{catalogo.num_aulas} aulas</span>
                                </div>
                                <button className="buttons-modulos"><a href={"/modulos/edit/" + (catalogo.id)}>Editar</a></button>
                                <button className="buttons-modulos"><a onClick={() => this.excluirModulo(catalogo.id)}>Excluir</a></button>
                            </button>
                        ))}
                    </div>
                </section>
            </div >
        );
    }
}

export default Modulos