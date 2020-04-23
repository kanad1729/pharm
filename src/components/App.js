import React, { Component } from 'react';
import Web3 from 'web3';
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar';
import Main from './Main';
import './App.css';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AboutPage from './About.js';
import DashboardPage from './Dashboard.js';
import User from './User';

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        
         <Route exact path='/' component={DashboardPage}></Route>
         <Route exact path='/user' component={User}></Route>
         <Route exact path='/about' component={AboutPage}></Route>
     
      
      </BrowserRouter>
      
    );
  }
}

export default App;