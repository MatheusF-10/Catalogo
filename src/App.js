import logo from './logo.svg';
import './App.css';
import Catalogo from './components/catalogo';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="#">Catálogo de Aulas</a></h1>
        <ul className="menu">
          <li><a href="./components/login">Sign in</a></li>
          <li><a href="#">Sign up</a></li>
        </ul>
      </header>
      {/* Fim do header */}
      <div className="horizontal-line"></div>
      <body>
        <Catalogo />
      </body>
    </div >
  );
}

export default App;
