import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/login';
import Catalogo from './pages/Catalogo/catalogo';
import Painel from './pages/Painel/index';
import Modulos from './pages/Painel/Menus/Modulo/modulos';
import EdicaoModulo from './pages/Painel/Menus/Modulo/edit';
import CadastroModulo from './pages/Painel/Menus/Modulo/cadastro'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Catalogo} />
                <Route path="/login" exact component={Login} />
                <Route path="/painel" exact component={Painel} />
                <Route path="/modulos" exact component={Modulos} />
                <Route path="/modulos/edit/:id" exact component={EdicaoModulo} />
                <Route path="/modulos/cadastrar" exact component={CadastroModulo} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;