import React from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux'


import UserRegister from './components/user/register'
import UserLogin from './components/user/login'
import Home from './components/home'
import UserAccount from './components/user/account'
import UserLogout from './components/user/logout'
import newCampaign from './components/campaign/new'
import BrowseCampaign from './components/campaign/browseCampaign'


import { isAuthenticated } from './components/commons/isAuth'

import './App.css';

class App extends React.Component {
 
  render() {
    return (
      <BrowserRouter>
        <div className="navbar-fixed">
        <nav className="nav-wrapper  ">
           <Link to='/' className="brand-logo">Fundo</Link>
            <a href="" className="sidenav-trigger" data-target="mobile-links">
                <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down"> 
                <li><Link to ='/campaign/list'>BrowseCampaign</Link></li>

                {
                !isAuthenticated(this.props.user) && (
                  <React.Fragment>
                  <li><Link to='/users/register' >Register</Link></li>
                    <li><Link to='/users/login' >Login</Link></li>
                    </React.Fragment>
                )
              }
                {
                isAuthenticated(this.props.user) && (
                  <React.Fragment>
                    <li><Link to = '/campaign/new'> Start fundraiser</Link></li>
                    <li><Link to='/users/logout'>Logout</Link></li>
                    <li><Link to='/users/account'>My Profile</Link></li>
                  </React.Fragment>
                )
              }
              
            </ul>
    </nav>
    
</div>
                
        <Switch>
          <Route path='/' component={Home} exact={true}></Route>
          <Route path='/users/logout' component={UserLogout} exact={true}/>
          <Route path='/users/register' component={UserRegister} exact={true}></Route>
          <Route path='/users/login' render={(props) => <UserLogin  handleIsAuthenticated={this.handleIsAuthenticated} props = {props}/> }></Route> 
          <Route path='/users/account' component={UserAccount} exact={true}></Route>
          <Route path ='/campaign/new' component = { newCampaign } exact = {true} />
          <Route path='/campaign/list' component = {BrowseCampaign} exact = {true} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(App);