import React, { useEffect, useState } from "react";
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('token') !== null) {
      fetch('https://quiet-retreat-88465.herokuapp.com/verify',{
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
  }, []);
  
  function setLogin(status) {
    setLoggedIn(status);
  }


  useEffect(() => {
  }, [loggedIn])

  return (
    <div className="App">
      <HashRouter hashType={'slash'}>
      <NavBar setLogin={setLogin} loggedIn={loggedIn}/>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/blog/' exact><Blog /></Route>
          <Route path='/blog/create' exact><BlogForm /></Route>
          <Route path='/blog/:id/edit' exact><BlogForm /></Route>
          <Route path='/blog/:id' exact><BlogPost /></Route>
          <Route path='/login' exact><LoginForm setLogin={setLogin}/></Route>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;