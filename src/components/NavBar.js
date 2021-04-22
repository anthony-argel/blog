import {NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import '../styles/index.css';

const NavBar = (props) => {
    useEffect(() => {
        console.log(props.loggedIn)
    }, [])

    function logOut() {
        localStorage.removeItem('token');
        props.setLogin(false);
    }

    return (
        <nav>
            <div className='nav-left'>
                <ul>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className='nav-right'>
                <ul className='flex-row'>
                    {!props.loggedIn ? <li><NavLink to='/login'>Login</NavLink></li> : <li onClick={logOut} style={{cursor:'pointer'}}>Log Out</li>}
                    {props.loggedIn ? <li><NavLink to='/blog/create'>Create</NavLink></li> : null}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;