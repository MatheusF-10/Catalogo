import React from 'react';
import './aulas.css';
import api_aulas from "../../../../service/api_get_aulas";



class Aulas extends React.Component {

    state = {
        aulas: [],
    }

    async componentDidMount() {
        const response = await api_aulas.get('');
        try {
            this.setState({ aulas: response.data });
        } catch (error) {
            alert("Houve um problema na chamada ao servidor!")
        }
    }

    async excluirModulo(id) {

        const response = await api_aulas.delete(id + "/");
        try {
            this.setState({ aulas: response.data })

        } catch (error) {
            alert("Não foi possível excluir o módulo")
        }
    }

    render() {

        const { aulas } = this.state;

        return (
            <div>
                <header>
                    <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                    <ul className="menu">
                        <li><a href="/painel">Painel</a></li>
                    </ul>
                </header>
                <h1 className="title-container">Módulos</h1>
                <div className="div-button">
                    <button className="button-cadastrar">
                        <a href={"/aulas/cadastrar"}>Cadastrar Nova Aula</a>
                    </button>
                </div>
                <section className="container">
                    <div className="grid-modules">
                        {aulas.map(aulas => (

                            <button className="button-class" key={aulas}>
                                <div className="intra-button">
                                    <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                                </div>
                                <div>
                                    <h5 className="default-font-collor">{aulas.nome}</h5>
                                    <span className="default-font-collor">{aulas.data_aula} aulas</span>
                                </div>
                                <button className="buttons-modulos"><a href={"/aulas/edit/" + (aulas.id)}>Editar</a></button>
                                <button className="buttons-modulos"><a onClick={() => this.excluirModulo(aulas.id)}>Excluir</a></button>
                            </button>
                        ))}
                    </div>
                </section>
            </div >
        );
    }
}

export default Aulas