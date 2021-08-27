import React, { useEffect, useState } from "react";
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import PostByTag from './components/PostByTag';
import Search from './components/Search';
import NavBar from './components/NavBar';
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [apiURL, setApiURL] = useState('');
  useEffect(() => {
    let url = 'https://quiet-retreat-88465.herokuapp.com'; 
    setApiURL(url);
  }, []);

  useEffect(() => {
    if(apiURL === '') return;
    if(localStorage.getItem('token') !== null) {
      fetch(apiURL+'/verify',{
        method: 'get',
        headers: { 'Authorization' : 'Bearer ' + localStorage.getItem('token') },
        mode: 'cors'
    })
    .then(res => {
      if (res.status === 200) {
        setLoggedIn(true);
      }
      else {
        setLoggedIn(false);
        localStorage.removeItem('token');
      }
    })
    }

  }, [apiURL])
  
  function setLogin(status) {
    setLoggedIn(status);
  }


  useEffect(() => {
  }, [loggedIn])

  return (
    <div className="App">
      <div style={{minHeight:'97vh'}}>
      <HashRouter hashType={'slash'}>
      <NavBar setLogin={setLogin} apiURL={apiURL === ''? '' : apiURL} loggedIn={loggedIn}/>
      <Switch>
          <Route path='/' render ={() => <Blog apiURL={apiURL === ''? '' : apiURL} />} exact></Route>
          <Route path='/search/:searchstring' exact><Search apiURL={apiURL === ''? '' : apiURL}/></Route>
          <Route path='/blog/' exact><Blog apiURL={apiURL === ''? '' : apiURL} /></Route>
          <Route path='/blog/create' exact><BlogForm apiURL={apiURL === ''? '' : apiURL} /></Route>
          <Route path='/blog/:id/edit' exact><BlogForm apiURL={apiURL === ''? '' : apiURL} /></Route>
          <Route path='/blog/:id' exact><BlogPost apiURL={apiURL === ''? '' : apiURL} /></Route>
          <Route path='/tag/:tagid' exact><PostByTag apiURL={apiURL === ''? '' : apiURL}/></Route>
          <Route path='/login' exact><LoginForm apiURL={apiURL === ''? '' : apiURL} setLogin={setLogin}/></Route>
          </Switch>
      </HashRouter>
      </div>
        <div style={{backgroundColor:'rgb(68, 183, 135)', minHeight:'3vh'}} className='text-center'><a style={{textDecoration:'none', color:'white'}} target='_blank' rel="noreferrer" href='https://anthonyargel.com/'>Developer</a></div>
    </div>
  );
}

export default App;