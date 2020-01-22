import React, { Component } from "react";
import './Portfolio.scss';

class Portfolio extends Component {

    componentDidMount() {
        document.title = "Portfolio | Tri Le Nguyen Huu";
    }

    render() {
        return (
            <section className="portfolio">
                <h2>This is Portfolio page.</h2>
                <div>
                    <a  target="_blank" href="https://articles-portal.netlify.com/">Articles Portal</a>
                </div>
            </section>
        )
    }
}

export default Portfolio;
