import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/login';
import Catalogo from './pages/Catalogo/catalogo';
import Painel from './pages/Painel/index';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Catalogo} />
                <Route path="/login" exact component={Login} />
                <Route path="/painel" exact component={Painel} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;