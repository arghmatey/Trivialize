import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };

    handleChange = (e) => {
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
            console.log('there was a good thing')
        } catch (err) {
            console.log('there is an error');
        }
    }

    render() {
        return (
            <div>
                <header>Sign Up</header>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} />
                    <input type='email' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange} />
                    <input type="password" placeholder='Password' value={this.state.password} name='password' onChange={this.handleChange} />
                    <button>Sign Up</button>&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </form>
            </div>
        );
    }

}

export default SignupForm;