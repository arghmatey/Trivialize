import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ?
        <div className="Nav">
            <NavLink 
                to='/quiz' 
                className="neon-nav"
                activeClassName="neon-nav-active">Quizzes</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink 
                to='/create' 
                className="neon-nav"
                activeClassName="neon-nav-active">Create</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink 
                to='/manage' 
                className="neon-nav"
                activeClassName="neon-nav-active">Manage</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink 
                to='/' 
                onClick={props.handleLogout} 
                className="neon-nav">Logout</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className="neon-name">{props.user.name}</span>
        </div>
        :
        <div className="Nav">
            <NavLink 
                to='/login' 
                className="neon-nav">Login</NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink 
                to='/signup' 
                className="neon-nav">Signup</NavLink>
        </div>;

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;