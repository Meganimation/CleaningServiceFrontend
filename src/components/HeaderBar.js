import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown 
} from 'reactstrap';


export default class HeaderBar extends Component {
  logout() {
    localStorage.clear();
    window.location.href = '/';
}

    openNav=(e)=> {
        console.log('clicked')
      if (document.querySelector(".sidebar").style.width = "0px"
      ) {
      document.querySelector(".sidebar").style.width = "250px"
      document.querySelector(".sidebar").marginLeft = "250px"
      }
    }

     closeNav=(e)=>{
        console.log('clicked')
     if (document.querySelector(".sidebar").style.width = "250px") {
        document.querySelector(".sidebar").style.width = "0px"
        document.querySelector(".sidebar").marginLeft = "0px";}
       }


    render() {
        return (
        <Container>
       
          <div style={{
                width: '900px',
                margin: 'auto',
                padding: '20px'
            }}>
              
              <img  style={{width: '100%', height: '50%', marginTop: '-13%'}}src="logo.jpg" alt="logo"/>
              <li><a href="#" class="round green" onClick={this.openNav}>≣<span class="round"></span></a></li>
              <div id="main">
          </div>
                    
<div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
  <p>   <br></br>  {this.props.name}    </p>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

  <Link exact to="/home"> Home </Link>
  <br/>
  <br/>
  <Link to={{ pathname: '/about', 
        state: { sender: this.props.id} }}> About</Link> 
  <br/>
  <br/>
  <Link 
        to={{ pathname: '/contact' }}> Contact</Link>
  <br/>
  <br/>
  <Link 
        to={{ pathname: '/settings' }}> Settings </Link>
  <br/>
  <br/>

  <Link exact to="/Logout">  Logout </Link>
</div>
</div>

</Container>        
        )
    }
}
