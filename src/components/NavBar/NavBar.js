import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ?
        <div className="Nav">
            <Link to='/skills' className="neon-nav">Skills</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/' className="neon-nav">Trivia Games</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout} className="neon-nav">Logout</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className="neon-nav">Welcome, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to='/login' className="neon-nav">Login</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className="neon-nav">Signup</Link>
        </div>;

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;