import React, {Component} from "react";
import {connect} from 'react-redux';
import '../styles/LoginForm.css';


class LoginForm extends Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(e, username, password) {
        e.preventDefault();
        const {onLogin} = this.props;
        onLogin(username, password)
    }
    render() {
        let username;
        let password;
        return (
            <div className="login_form">
                <h2>Login Form</h2>
                <form  onSubmit={(e) => this.handleSubmit(e, username.value, password.value)}>    
                        <p><label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username"
                               name="username" required ref={node => {
                            username = node
                        }}/>
                        </p>
                        <p><label className='password'><b>Password</b></label>
                        <input type="password" placeholder="Enter Password"
                               name="password" required
                               ref={node => {
                                   password = node
                               }}
                        /></p>
                        <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

function select(state) {
    console.log('in login select')
    let loggedIn = false;
    if (sessionStorage.getItem('logged')) {
        loggedIn = true
    }
    return {loggedIn};
};

export default connect(select)(LoginForm)