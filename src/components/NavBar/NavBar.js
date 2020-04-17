import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link to='/skills'>Skills</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/'>Trivia Games</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout}>Logout</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span>Welcome, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to='/login'>Login</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup'>Signup</Link>
        </div>;

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;