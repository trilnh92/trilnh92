import React, {Component} from "react";
import './About.scss';

class About extends Component {

    componentDidMount() {
        document.title = "About | Tri Le Nguyen Huu";
    }

    render() {
        return (
            <section className="about">
                <h2>This is about page.</h2>
            </section>
        )
    }
}

export default About;
