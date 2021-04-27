import {a, Link } from "react-router-dom";
import React, { useEffect } from "react";

const NavBar = (props) => {
    useEffect(() => {
    }, [])

    function logOut() {
        localStorage.removeItem('token');
        props.setLogin(false);
    }

    return (
        <nav className='navbar navbar-light navbar-expand-md shadow mb-5' style={{backgroundColor:"#44b787"}}>
            <div className='container'>
                <Link to='/' className='navbar-brand'>Home</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navContent' aria-controls='navContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse d-flex justify-content-end' id='navContent'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-link'>Blog</Link>
                        </li>
                        {props.loggedIn ? <li className='nav-item'><Link to='/blog/create' className='nav-link'>Create</Link></li> : null}
                        {!props.loggedIn ? <li className='nav-item'><Link to='/login' className='nav-link'>Login</Link></li> : <li onClick={logOut} className='nav-item nav-link' style={{cursor:'pointer'}}>Log Out</li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;