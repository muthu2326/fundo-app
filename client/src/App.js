import React from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from '../src/config/axios'
import UserRegister from './components/user/register'
import UserLogin from './components/user/login'
import Home from './components/home'
import UserAccount from './components/user/account'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isAuthenticated: !!localStorage.getItem('token')
    }
  }
  handleIsAuthenticated =(bool)=>{
    this.setState(() => ({
      isAuthenticated : bool
    }))
  }
  render() {
    return (
      <BrowserRouter>
        <div className="navbar-fixed">
        <nav className="nav-wrapper transparent ">
            <a href="" className="brand-logo">Fundo</a>
            <a href="" className="sidenav-trigger" data-target="mobile-links">
                <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
                <li><Link to='/'>Home</Link></li>

                {
                this.state.isAuthenticated && (
                  
                <li><Link to='/users/logout'>Logout</Link></li>
              
                )
              }

              {
                !this.state.isAuthenticated && (
                  <React.Fragment>
                <li><Link to='/users/register' >Register</Link></li>
                <li><Link to='/users/login' >Login</Link></li>
                </React.Fragment>
                )
              }
              
            </ul>
    </nav>
    
</div>
                
        <Switch>
          <Route path='/' component={Home} exact={true}></Route>
          <Route path='/users/register' component={UserRegister} exact={true}></Route>
          <Route path='/users/login' render={(props) => <UserLogin  handleIsAuthenticated={this.handleIsAuthenticated} props = {props}/> }></Route> 
          <Route path='/users/logout' component={(props) => { 
            localStorage.clear()
            axios.defaults.headers['x-auth'] = null
                  return (
                    <div>
                      <p> You have successfully logged out</p>
                    </div>
                  )
                  }}></Route>
          <Route path='/users/account' component={UserAccount} exact={true}></Route>
        </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
