import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import Empleadospagina from '../Pages/paginaEmpleados'
import Contratopagina from '../Pages/PaginaContrato'
import Pagospagina from '../Pages/PaginaPagos'
import Loginpagina from '../Pages/PaginaLogin'

export const RutasComponentes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/Empleados" component={Empleadospagina} />
                <Route exact path="/Contrato" component={Contratopagina} />
                <Route exact path="/Pagos" component={Pagospagina} />
                <Route exact path="/Login" component={Loginpagina} />

            </Switch>
        </Router>
    )
}