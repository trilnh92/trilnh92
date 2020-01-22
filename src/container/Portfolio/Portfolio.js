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
                    <Link to="https://articles-portal.netlify.com/">Articles Portal</Link>
                </div>
            </section>
        )
    }
}

export default Portfolio;
