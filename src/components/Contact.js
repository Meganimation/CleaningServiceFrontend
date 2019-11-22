import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import {
  Card, CardTitle, Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown 
} from 'reactstrap';

export default class Projects extends Component {
    render() {
        return (
        <Container>
        <div>
        <HeaderBar/>
        <Card>
        <br/>               
        <br/>
        <br/>
        <div className ="fade-in">
        <div className="myMainBoxx">
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary"> Contact</CardTitle>
<Col> If you want me to add an email form, telephone hotlink, etc, just let me know </Col>
        <br/>
        <br/>
        <br/>
<Row><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Paramaribo%2C%20Suriname&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="100%" marginwidth="30%"></iframe></div> </Row>
      <br/>
      <br/>
      <br/>
      <br/>
<Link exact to="/home" > 
<Button> Home </Button>
</Link>
            </div>
            </div>
            </Card> 
            <br/>
            </div>   
        </Container>
              
        )
    }
}
