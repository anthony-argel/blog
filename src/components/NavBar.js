import {NavLink} from "react-router-dom";
import React, { useEffect, useState } from "react";
import '../styles/index.css';

const NavBar = (props) => {
    const [token, setToken] = useState();

    useEffect(() => {
        setToken(localStorage.getItem('token'));
        
    }, [])

    const logOut =() => {
        localStorage.removeItem('token');
        window.location.reload();
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
                    {token === null ? <li><NavLink to='/login'>Login</NavLink></li> : <li onClick={logOut} style={{cursor:'pointer'}}>Log Out</li>}
                    {token !== null ? <li><NavLink to='/blog/create'>Create</NavLink></li> : null}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;