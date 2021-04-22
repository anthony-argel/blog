import React, { useEffect, useState } from "react";
import '../styles/index.css';
import { Redirect } from 'react-router-dom';

function LoginForm(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState('');
    const [error, setError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    function login(e){
        e.preventDefault();
        fetch('https://quiet-retreat-88465.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({username: user, password: password}),
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors'
        })
        .then(res => {
            if(res.status === 400){
                localStorage.removeItem('token');
                setError(true);
            }
            else {
                return res.json()
            }
        })
        .then(res => {
            if(res) {
                setToken(res.token);
            }
        })
        
    }

    useEffect(() => {
        if(token !== '') {
            localStorage.setItem('token', token);
            props.setLogin(true);
            setLoggedIn(true);
        }
    }, [token]);

    const loginCheck = () => {
        if(loggedIn) {
            return <Redirect push to={`/blog`}/>;
        }
    }

    return (
        <div className="content">
            {loginCheck()}
            <h1>Login Form</h1>
            <form onSubmit={login} className='login-form'>
                <input type="text" 
                name="username" 
                required
                placeholder='username'
                onChange={e => setUser(e.target.value)}></input>
                <input type="password" 
                name="password"
                placeholder='password'
                required
                onChange={e => setPassword(e.target.value)}></input>
                <input type="submit" value='login'></input>
            </form>
            {error ? <p>Failed to log in. Please try again.</p> : null}
        </div>
    )
}

export default LoginForm;