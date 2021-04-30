import React from 'react';
import Link from './Link';
import beans from './beans.png';
import {BrowserRouter, NavLink} from "react-router-dom";
import {useState} from "react";
import { Switch, Route } from 'react-router-dom';


const Header = () => {
  const [isOpen, setOpen] = useState(false);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={beans} ></img>
  <ul class="navbar-nav mr-auto">
  <li class="nav-item">
      <a class="nav-link"></a>
    </li><li class="nav-item">
      <a class="nav-link"></a>
    </li>
    <li><a href="#"><i class="fa fa-twitter nav-link"></i></a></li>
    <li><a href="#"><i class="fa fa-facebook nav-link"></i></a></li>
    <li><a href="#"><i class="fa fa-linkedin nav-link"></i></a></li>
    <li><a href="#"><i class="fa fa-instagram nav-link"></i></a></li>
    <li>
   
</li>
    </ul>

<ul class="nav navbar-nav navbar-logo mx-auto">
      <li class="nav-item">
        <a class="nav-link nav-center" href="#">Connect Wallet</a>
      </li>
    </ul>




  


  <ul class="navbar-nav ml-auto">
  <li class="nav-item">
  <NavLink className="nav-link" to="/" >
  HOME
</NavLink>    </li>
  <li class="nav-item">
  <NavLink className="nav-link" to="/learn" >
  LEARN 
</NavLink>    </li>
   
    <li class="nav-item">
      <a class="nav-link">Service </a>
    </li>
    <li class="nav-item">
      <a class="nav-link">Events</a>    
    </li>
    <li class="nav-item">
    <span class="glyphicon glyphicon-search"></span>
    </li>
  </ul>
</nav>
    )
}

export default Header;