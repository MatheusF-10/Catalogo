import './login.css';
import React from 'react';
import api_login from '../../service/api_post_user'
import { Route, Router } from 'react-router';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            dados: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount(this);

    }
    handleChange(event) {
        this.setState({ user: event.target.user })
        this.setState({ password: event.target.password })
    }

    async componentDidMount(event) {
        const response = await api_login.get(this.state.user);
        try {
            if (response) {
                console.log(response);
                < Route exact path="/" >

                </Route >
            }
        } catch (error) {

        }
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
                        <form onSubmit={this.componentDidMount}>
                            <div className="input-container">
                                <input id="user" type="text" value={this.state.user} placeholder="Usuario" className="input" required></input>
                            </div>
                            <div className="input-container">
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    value={this.state.password}
                                    className="input"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="button-form"><b>Entrar</b></button>
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