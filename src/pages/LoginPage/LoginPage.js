import React, { Component } from 'react';
import './LoginPage.css';
import { Button, TextField } from '@material-ui/core';
import userService from '../../utils/userService';

class LoginPage extends Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            alert('Invalid login activated on loginpage');
        }
    }

    render() {
        return (
            <div className="LoginForm">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit} >
                    <TextField
                        required
                        type="email"
                        name="email"
                        fullWidth
                        label="Email"
                        onChange={this.handleChange}
                        value={this.state.email} />
                    <TextField
                        required
                        type="password"
                        name="pw"
                        fullWidth
                        label="Password"
                        onChange={this.handleChange}
                        value={this.state.pw} />
                    <div className="button-section">
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit">
                            Login
                        </Button>
                    </div>
                </form >
            </div >
        );
    }
}

export default LoginPage;