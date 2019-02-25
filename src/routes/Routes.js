import React, {Suspense, lazy} from 'react';
import {HashRouter  as Router, Redirect, Route, Switch} from 'react-router-dom';

import {AuthService} from "../services/AuthService"
import Homepage from "../container/Homepage/Homepage";
import Layout from "../components/Layout/Layout";

const About = lazy(() => import('../container/About/About'));
const Portfolio = lazy(() => import('../container/Portfolio/Portfolio'));
const Login = lazy(() => import('../container/Login/Login'));

const ComingSoon = lazy(() => import('../components/ComingSoon/ComingSoon'));
const Errors = lazy(() => import('../components/Errors/Errors'));


// TODO: implement authenticated route
//https://medium.freecodecamp.org/beginners-guide-to-react-router-4-8959ceb3ad58

const SecretRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        AuthService.isAuthenticated === true ?
            <Component {...props}/> :
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
    )}/>
);

const RoutingConfig = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <Switch>
                    <Route
                        path="/" exact
                        render={props => <Homepage {...props}  />}
                    />
                    <Route path="/about"  component={props => <About {...props} />}/>
                    <Route path="/portfolio"  component={props => <Portfolio {...props} />}/>
                    <Route path="/coming-soon"  component={props => <ComingSoon {...props} />}/>
                    <Route path="/login"  component={props => <Login {...props} />}/>
                    <Route component={props => <Errors {...props} />}/>
                </Switch>
            </Layout>
        </Suspense>
    </Router>
);

export default RoutingConfig;
