import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import BotChatContainer from './BotChatContainer';
import ls from 'local-storage';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown 
  } from 'reactstrap';

export default class Facebook extends Component {
    state = {
        users: [],
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        id: 0
    }

    componentDidMount() {
        fetch('http://localhost:3000/senders')
        .then( res => res.json())
        .then( data => this.setState({ users: data}))
    }

    responseFacebook = response => {
    this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email
    })

    ls.set('userID', response.userID);
    ls.set('name', response.name);
    ls.set('email', response.email);

    // const matchId=()=> {
    //     this.state.users.map((user) => {
    //         if (user.facebook_id === parseInt(response.userID))     {
    //             this.setState({
    //                 id: user.id
    //             })
    //             ls.set('id', user.id);
     
    //        console.log(`welcome back ${user.id}`)   }
    //     })
    // }
    
    //     fetch('http://localhost:3000/senders', {
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           name: response.name,
    //           email: response.email,
    //           facebook_id: response.userID
    //         })
    //       })
    //       .then(matchId)
    // }
    }
    
    render() {

        let fbContent;
        if(this.state.isLoggedIn) {
            fbContent = 
            <Container>
            <div> 
            <BotChatContainer id={window.localStorage.id} name={window.localStorage.name} email={this.state.email} facebook_id={this.state.userID}  />      
            </div>
            </Container>
        } else {
            fbContent = ( 
            <>
            <Container>
            <div className = "myMainBox" >
            <br/>
            <br/>
            <FacebookLogin
            appId="1378656285636593"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} /> 
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link exact to="/home"><Button>login as guest</Button></Link>
            <br/>
            <br/>
            </div>
            </Container>
            </>
            
            );





        }



        return (
            <Container>
            <div>
                <Row style={{ position: 'center', marginLeft: '10%', marginTop: '30%'}}>
                {fbContent}
                </Row>
            </div>
            </Container>
        )
    }
}
