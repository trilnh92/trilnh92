import React, {Component} from "react";
import './Homepage.scss';

class Homepage extends Component {

    componentDidMount() {
        document.title = "Homepage | Tri Le Nguyen Huu";
    }

    render() {
        return (
            <section className="homepage">
                <h2>This is Home page.</h2>
            </section>
        )
    }
}

export default Homepage;
