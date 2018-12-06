import React, {Component} from "react";
import './ComingSoon.scss';

const bgImg = require('../../assets/images/background-1600x900.jpg');

class ComingSoon extends Component {

    componentDidMount() {
        document.title = "Coming Soon | Tri Le Nguyen Huu";
    }

    render() {
        return (
            <section className="coming-soon" style={{backgroundImage: `url('${bgImg}')`}}>
                {/*<img src={bgImg} alt="coming soon background image"/>*/}
                <div className="coming-soon__container">
                    <h1 className="coming-soon-title">Coming Soon</h1>
                    <p className="coming-soon-description">
                        Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience.
                    </p>
                </div>
            </section>
        )
    }
}

export default ComingSoon;
