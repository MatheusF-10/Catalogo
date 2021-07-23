import './index.css'

function Painel() {
    return (
        <div>
            <header>
                <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                <ul className="menu">
                    <li><a className="botao-sair" href="/">Sair</a></li>
                </ul>
            </header>
            <h1 className="titulo-painel">Painel Administrativo</h1>
            <section className="secao-painel">

                <div className="item-painel">
                    <a className="link-itens" href="/modulos"><center>Módulos</center></a>
                </div>
                <div className="item-painel">
                    <a className="link-itens" href="/modulos"><center>Aulas</center></a>
                </div>
                <div className="item-painel">
                    <a className="link-itens" href="/modulos"><center>Usuários</center></a></div>
            </section>
        </div>
    );
};

export default Painel;