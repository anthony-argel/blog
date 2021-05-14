import {Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {FaSearch} from 'react-icons/fa';

const NavBar = (props) => {
    const [tagName, setTagName] = useState('');
    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('token') !== '') {
            setToken(localStorage.getItem('token'));
        }
    }, [])

    function logOut() {
        localStorage.removeItem('token');
        props.setLogin(false);
    }

    function sendSearch(e) {
        e.preventDefault();
        if(props.apiURL !== '') {
            history.push('/search/'+search.split(' ').join('_'))
        }
    }

    function createTag(e) {
        if(props.apiURL === '' || token === '' || tagName === '') return;
        fetch(props.apiURL+'/tag/', {
            method:'POST',
            headers: { 'Authorization' : 'Bearer ' + token, 'Content-Type': 'application/json' },
            body: JSON.stringify({name: tagName}),
            mode:'cors'
        }).then(res => setTagName(''));
    }

    return (
        <nav className='navbar navbar-light navbar-expand-md shadow mb-5' style={{backgroundColor:"#44b787"}}>
            <div className='container'>
                <Link to='/' className='navbar-brand'>Home</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navContent' aria-controls='navContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse d-flex justify-content-end' id='navContent'>
                    <ul className='navbar-nav d-flex'>
                        <li className='nav-item'>
                        <form className="form-inline my-2 my-lg-0 d-flex" onSubmit={e => sendSearch(e)}>
                            <input className="form-control mr-sm-2 rounded-start" required type="text" onChange={(e) => setSearch(e.target.value)} name='query' placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type='submit' style={{backgroundColor:'darkGreen'}} ><FaSearch color='black'/></button>
                        </form>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-link'>Blog</Link>
                        </li>
                        {props.loggedIn ? <li className='nav-item'><p className='nav-link' data-bs-toggle="modal" data-bs-target="#createTagModal" style={{cursor:'pointer', marginBottom:'0'}}>Add Tag</p></li> : null}
                        {props.loggedIn ? <li className='nav-item'><Link to='/blog/create' className='nav-link'>Create</Link></li> : null}
                        {!props.loggedIn ? <li className='nav-item'><Link to='/login' className='nav-link'>Login</Link></li> : <li onClick={logOut} className='nav-item nav-link' style={{cursor:'pointer'}}>Log Out</li>}
                    </ul>
                </div>
            </div>

            <div className="modal fade" id="createTagModal" tabIndex="-1" aria-labelledby="createTagModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="createTagModalLabel">Tag Form</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" >
                    <form>
                        {
                            tagName === '' ?
                            <input type='text' required onChange={e => setTagName(e.target.value)} defaultValue=''></input> :
                            <input type='text' required onChange={e => setTagName(e.target.value)}></input>
                        }
                        <button className="btn btn-primary" type='button' onClick={e => createTag(e)}>Create Tag</button>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default NavBar;