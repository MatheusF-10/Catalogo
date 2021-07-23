import './catalogo.css';
//import Cabecalho from "../components/header_home_page";

function Catalogo() {
    return (
        <div>
            <header>
                <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                <ul className="menu">
                    <li><a href="/login">Sign in</a></li>
                    <li><a href="/">Sign up</a></li>
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

                    <button className="button-class">
                        <div className="intra-button">
                            <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                        </div>
                        <div>
                            <h5 className="default-font-collor">Python WEB</h5>
                            <span className="default-font-collor">10/10</span>
                        </div>
                    </button>



                    <button className="button-class">
                        <div className="intra-button">
                            <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                        </div>
                        <div>
                            <h5 className="default-font-collor">Python WEB</h5>
                            <span className="default-font-collor">10/10</span>
                        </div>
                    </button>



                    <button className="button-class">
                        <div className="intra-button">
                            <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                        </div>
                        <div>
                            <h5 className="default-font-collor">Python WEB</h5>
                            <span className="default-font-collor">10/10</span>
                        </div>
                    </button>



                    <button className="button-class">
                        <div className="intra-button">
                            <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                        </div>
                        <div>
                            <h5 className="default-font-collor">Python WEB</h5>
                            <span className="default-font-collor">10/10</span>
                        </div>
                    </button>

                    <button className="button-class">
                        <div className="intra-button">
                            <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                        </div>
                        <div>
                            <h5 className="default-font-collor">Python WEB</h5>
                            <span className="default-font-collor">10/10</span>
                        </div>
                    </button>

                    <button className="button-class">
                        <div className="intra-button">
                            <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                        </div>
                        <div>
                            <h5 className="default-font-collor">Python WEB</h5>
                            <span className="default-font-collor">10/10</span>
                        </div>
                    </button>

                </div>

            </section>
        </div>
    );
};

export default Catalogo;