import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown 
} from 'reactstrap';

export default class Projects extends Component {

  
    render() {
        return (
            <div>
            <HeaderBar/>
        <br/>               
        <br/>
        <br/>
                <div className ="fade-in">
                <div className="myMainBoxx">
        <h2> Contact </h2>
        <br/>
      <br/>
      <br/>
      <br/>
 If you want me to add an email form, telephone hotlink, etc, just let me know
        <br/>
        <br/>
        <br/>

<div className="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Paramaribo%2C%20Suriname&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="100%" marginwidth="10%"></iframe></div></div>
      <br/>
      <br/>
      <br/>
      <br/>
<Link exact to="/home" > 
<Button> Home </Button>
</Link>
            </div>
            </div>
            </div>          
        )
    }
}
