import React, {Component} from "react";
import {Link} from "react-router-dom";

import {AuthStatus} from "../../services/AuthStatus";
import Menu from './Menu';
import './Header.scss';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <Menu/>
                {/*<AuthStatus/>*/}
                <section className="section">
                    <div className="container">
                        <h1 className="title">
                            Hello World
                        </h1>
                        <p className="subtitle">
                            My first website with <strong>Bulma</strong>!
                        </p>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;
