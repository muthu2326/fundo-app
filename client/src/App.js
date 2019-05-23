import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import UserRegister from './components/user/register'
import UserLogin from './components/user/login'
import Home from './components/home'
import UserAccount from './components/user/account'
import UserLogout from './components/user/logout'
import newCampaign from './components/campaign/new'
import BrowseCampaign from './components/campaign/browseCampaign'
import Header from './components/header/header'

import './App.css';

class App extends React.Component {
 
  render() {
    return (
      <BrowserRouter>
        
        <Header />
                
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


export default App;