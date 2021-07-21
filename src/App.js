import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="#">Catálogo de Aulas</a></h1>
        <div className="div-button-enter">
          <a className="default-font-collor button-enter" href="#">Entrar</a>
        </div>
      </header>
      {/* Fim do header */}
      <div className="horizontal-line"></div>
      <body>
        <div className="container">
          <h1 className="default-font-collor">Módulos</h1>
          <h3 className="color-subtitle">Selecione o módulo para verificar as aulas disponíveis:</h3>

          {/* DIV Listando os Catalogos */}
          <div className="grid-modules">
            <div className="div-items">
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

            <div className="div-items">
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

            <div className="div-items">
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

            <div className="div-items">
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
          </div>

        </div>
      </body>

    </div >
  );
}

export default App;
