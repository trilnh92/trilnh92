import React, {Component} from 'react';

import './App.scss';
import ComingSoon from "../components/ComingSoon/ComingSoon";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ComingSoon/>
            </div>
        );
    }
}

export default App;
