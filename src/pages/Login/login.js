import './login.css';
import React from 'react';



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.teste = this.teste.bind(this);
    }
    teste() {
        console.log('estou no teste');
    }

    render() {
        return (
            <div>
                <section className="section">
                    <div className="responsividade">
                        <h1 className="titulo-login">Catálogo de Aulas</h1>
                        <h4 className="subtitulo-login">Fazer Login</h4>
                        <div className="linha"></div>
                    </div>

                    <div className="box-login responsividade">
                        <form>
                            <div className="input-container">
                                <input id="email" type="email" placeholder="E-mail" className="input" required></input>
                            </div>
                            <div className="input-container">
                                <input type="password" placeholder="Senha" className="input" required></input>
                            </div>
                            <button onClick={this.teste} type="submit" className="button-form"><b>Entrar</b></button>
                        </form>
                        <div>

                        </div>
                    </div>
                </section>
            </div >
        );
    }
};

export default Login;