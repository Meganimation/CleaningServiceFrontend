import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../chat';
import HeaderBar from './HeaderBar';
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown 
} from 'reactstrap';



class BotChatContainer extends Component {


sayHello=()=>{
  if (localStorage.name == undefined ) {
    return 'Hello, Guest!'
  }
  else return localStorage.name.replace(/['"]+/g, '');
}

  render() {
    return (
      <Container>
      <div>
      <HeaderBar id={window.localStorage.id} name={window.localStorage.name} email={window.localStorage.email} facebook_id={this.props.userID}   picture={window.localStorage.picture}/>
  <br/>
  <br/>
  <br/>
  <br/>
      <div className="myMainBox">
      <div className="fade-in">
      <h1 style={{ height: '100px', padding: '20px'}}> Hello {(window.localStorage.name == undefined) ? 
    'guest' :  window.localStorage.name.replace(/['"]+/g, '')}</h1>
      <br/>
  <p> Click the button above to navigate around the site and let me know if this is the UI you were looking for. It's fairly simple and easy to navigate. OAUTH and AI can be implemented too if you want to pursue facebook log ins, or a bot that can answer queries.  </p>
  <br/>
  <p> Also, the logo is very poor quality and does not wrap well with bootstrap or OG css, so if your client would like to have their logo revamped, please let me know as it's hard to make the website look pretty with it lol. </p>   
        </div>
        </div>
        </div>
        </Container>

  )
}};





  export default BotChatContainer;