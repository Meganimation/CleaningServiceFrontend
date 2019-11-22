import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardTitle, Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown 
  } from 'reactstrap';



export default class About extends Component {

    render() {      
        return (    
            <Container>
                    <div>
            <HeaderBar/>
            <Card>
                    <br/>
            <div className ='fade-in'>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">  About   </CardTitle>
                    <br/>
                    <br/>
                <Col> Here is the about section. Let me know what kind of substance you would like adding here, such as quotes, images, etc.  </Col>
            <br/>
            <br/>
            <br/>
<Link exact to="/home" > 
<Button> Home </Button>
</Link>
</div>
<br/>
<br/>
</Card>
</div>
</Container>

        )
    }

}