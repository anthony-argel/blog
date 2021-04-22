import React, { useEffect, useState } from "react";
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('token') !== null) {
      setLoggedIn(true);
    }
  }, []);
  
  function setLogin(status) {
    setLoggedIn(status);
  }


  useEffect(() => {
  }, [loggedIn])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar setLogin={setLogin} loggedIn={loggedIn}/>
        <Switch>
          <Route path='/' exact ><Redirect to='/blog'/></Route>
          <Route path='/blog' exact><Blog /></Route>
          <Route path='/blog/create' exact><BlogForm /></Route>
          <Route path='/blog/:id/edit' exact><BlogForm /></Route>
          <Route path='/blog/:id' exact><BlogPost /></Route>
          <Route path='/login' exact><LoginForm setLogin={setLogin}/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
