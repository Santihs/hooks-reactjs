import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div> {/* siempre debe de estar dentro de un div todo lo que este dentro de Router */}

                <NavBar />

                <div className="container">
                    <Switch> {/* dependiendo de una condicion va ejecutar las distintas rutas */}
    
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route exact path="/" component={ HomeScreen } />
    
                        {/* <Route component={ HomeScreen } /> podemos redireccionar al principio si no encuentra una ruta */}
                        <Redirect to="/" /> {/* o podemos redireccionar a la ruta raiz */}
    
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
