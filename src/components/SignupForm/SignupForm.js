import React, { Component } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import userService from '../../utils/userService';

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div className="SignupForm">
                <h2>Signup</h2>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            required
                            name="name"
                            id="standard-helperText"
                            fullWidth
                            label="Name"
                            onChange={this.handleChange}
                            value={this.state.name} />
                    </div>
                    <div>
                        <TextField
                            required
                            type="email"
                            name="email"
                            fullWidth
                            label="Email"
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </div>
                    <div>
                        <TextField
                            required
                            type="password"
                            name="password"
                            fullWidth
                            label="Password"
                            onChange={this.handleChange}
                            value={this.state.password} />
                    </div>
                    <div>
                        <TextField
                            required
                            type="password"
                            name="passwordConf"
                            fullWidth
                            label="Confirm Password"
                            onChange={this.handleChange}
                            value={this.state.passwordConf} />
                    </div>
                    <div className="button-section">
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={this.state.invalidForm}>
                            Signup
                        </Button>
                        <Link
                            to="/">
                            <Button
                                color="secondary"
                                variant="contained"
                                type="submit"
                                disabled={this.state.invalidForm}>
                                Cancel
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignupForm;