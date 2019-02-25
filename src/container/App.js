import React, {Component} from 'react';

import './App.scss';
import ComingSoon from "../components/ComingSoon/ComingSoon";

import {BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        {/*<ComingSoon/>*/}
                        <ul>
                            <li><Link to="/">Homepage</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        </ul>
                        <hr />
                        <Switch>
                            <Route path="/" exact={true} component={Homepage} />
                            <Route path="/about" component={About} />
                            <Route path="/portfolio" component={Portfolio} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
