import React from "react";
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

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path='/' exact ><Redirect to='/blog'/></Route>
          <Route path='/blog' exact><Blog /></Route>
          <Route path='/blog/create' exact><BlogForm /></Route>
          <Route path='/blog/:id/edit' exact><BlogForm /></Route>
          <Route path='/blog/:id' exact><BlogPost /></Route>
          <Route path='/login' exact ><LoginForm /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
