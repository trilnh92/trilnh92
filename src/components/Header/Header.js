import React, {Component} from "react";
import './Header.scss';
import {Link} from "react-router-dom";
import {AuthStatus} from "../../services/AuthStatus";

class Header extends Component {

    render() {
        return (
            <header className="header">
                <h2>This is header.</h2>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>

                {/*<AuthStatus/>*/}

            </header>
        )
    }
}

export default Header;
