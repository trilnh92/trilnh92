import React, { Component } from "react";
import './Menu.scss';
import { Link } from "react-router-dom";

class Menu extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Menu;