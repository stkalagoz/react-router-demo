import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/About" component={About} />
            </Switch>
        </div>
    );
};
