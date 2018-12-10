import React, {Component} from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

class Layout extends Component {
    render() {
        return (
            <section className="page-container">
                <Header/>
                {this.props.children}
                <Footer/>
            </section>
        )
    }
}

export default Layout;
