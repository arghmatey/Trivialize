import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ?
        <div className="Nav">
            <NavLink to='/skills' className="neon-nav" activeClassName="neon-active">Skills</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink to='/trivias' className="neon-nav" activeClassName="neon-active">Trivia Games</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink to='' onClick={props.handleLogout} className="neon-nav">Logout</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className="neon-name">Welcome, {props.user.name}</span>
        </div>
        :
        <div className="Nav">
            <NavLink to='/login' className="neon-nav" activeClassName="neon-active">Login</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink to='/signup' className="neon-nav" activeClassName="neon-active">Signup</NavLink>
        </div>;

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;