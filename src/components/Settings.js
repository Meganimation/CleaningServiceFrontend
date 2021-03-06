import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ls from 'local-storage';
import HeaderBar from './HeaderBar';
import {
    Card, CardTitle, Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown 
  } from 'reactstrap';

  
export default class Settings extends Component {



updateName=()=>{
    var updateName = prompt('Please enter the new name', 'name')
    if (updateName == null || updateName == "")  {
    const  txt = ''
    return txt
    } 

    else {
           fetch(`http://localhost:3000/senders/${window.localStorage.id}`, {
               method: 'PATCH', 
               headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
               },
               
               body: JSON.stringify({
                   name: updateName
               })
           })
               .then(resp => resp.json()) 
               .then(ls.set('name', updateName))
       }


    const   txt = `Your new name is now ${updateName}.`;
    window.location.reload();
    return alert(txt)
}



updateEmail=()=>{

    var updateEmail = prompt('Please enter the new email', 'email')
    if (updateEmail == null || updateEmail == "")  {
     const  txt = ''
     return txt
     } 



     if (updateEmail.includes('@'))  {
      fetch(`http://localhost:3000/senders/${window.localStorage.id}`, {
               method: 'PATCH', 
               headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
               },
               
               body: JSON.stringify({
                   email: updateEmail
               })
           })
               .then(resp => resp.json()) 
               .then(ls.set('email', updateEmail))

    window.location.reload();
    const   txt = `Your new email is now ${updateEmail}.`;
    return alert(txt) 
    }
    else alert('you must enter a valid email!')
    }

    logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {

        return (
        <Container>
            <HeaderBar/>
            <Card>
                <div className ="fade-in">
                <br/>
                <br/>
                <img src="https://img.icons8.com/cotton/2x/settings--v1.png" />
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">  Settings   </CardTitle>
                <br/>
                <br/>      
    <Col>  <br/>  <h3>name:   {window.localStorage.name}      </h3> </Col>
    <Button onClick ={this.updateName}>change</Button> <br/>
    <Col> <br/>  <h3> email:   {window.localStorage.email}   </h3>  </Col>
    <Button onClick ={this.updateEmail}>change</Button> <br/>
<br/>
<br/>
<br/>
<br/>
    <Button onClick={this.logout}> log out </Button>
<br/>
<br/>
    <Link exact to="/home"> 
    <Button >go home </Button>
    </Link>
            </div>
            <div>   
            </div> <br/>
            <br/>
            <br/>
            </Card>
            </Container>
        )
    }
}
