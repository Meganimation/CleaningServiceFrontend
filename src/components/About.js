import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import BotChatContainer from './BotChatContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import $ from 'jquery';
import Popper from 'popper.js';


export default class About extends Component {

        
                

    render() {


        
        return (    
            <Container>
            <div>
            <HeaderBar />
            <br/>
            <div className ='myMainBoxx' >
            <div className ='fade-in' >
            <h1> About </h1>
            <br/>
                <br/>
                <br/>
                <br/>
            <div> Here is the about section. Let me know what kind of substance you would like adding here, such as quotes, images, etc.</div>
            <br/>
            <br/>
            <br/>
<Link exact to="/home" > 
<Button> Home </Button>
</Link>
</div>
</div>
</div>
</Container>
        )
    }

}