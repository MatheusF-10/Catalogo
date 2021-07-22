import './login.css';


function Login() {
    return (
        <div>
            <section>
                <div>
                    <h1 className="titulo-login">Catálogo de Aulas</h1>
                    <h4 className="subtitulo-login">Fazer Login</h4>
                    <div className="linha"></div>
                </div>

                <div className="box-login">
                    <form action="/painel">
                        <div className="input-container">
                            <input id="email" type="email" placeholder="E-mail" className="input" required></input>
                        </div>
                        <div className="input-container">
                            <input type="password" placeholder="Senha" className="input" required></input>
                        </div>
                        <button type="submit" className="button-form"><b>Entrar</b></button>
                    </form>
                    <div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;