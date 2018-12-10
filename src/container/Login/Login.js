import React, {Component} from 'react';
import {AuthService} from "../../services/AuthService";
import {Redirect} from 'react-router-dom';

class Login extends Component {

    componentDidMount() {
        document.title = "Login | Tri Le Nguyen Huu";
    }

    state = {
        redirectToPreviousRoute: false
    };

    login = () => {
        AuthService.authenticate(() => {
            this.setState({redirectToPreviousRoute: true});
        });
    };

    render() {
        const {from} = this.props.location.state || {from: {pathname: "/"}};
        const {redirectToPreviousRoute} = this.state;

        if (redirectToPreviousRoute) {
            return <Redirect to={from.pathname}/>;
        }

        return (
            <section className="login">
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </section>
        )
    }
}

export default Login;
