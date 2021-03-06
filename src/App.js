import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Settings from './components/Settings'
import Logout from './components/Logout'
import Particles from 'react-particles-js';
import './App.css';
import Facebook from './components/Facebook';
import BotChatContainer from './components/BotChatContainer';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown 
} from 'reactstrap';


class App extends React.Component {


  render() {

  return (
    <Container>
      <div className="App">
      <header className="App-header">
    <BrowserRouter> 
    <Switch>
    <Route exact path="/" component={Facebook} />
    <Route exact path="/home" component={BotChatContainer} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/logout" component={Logout} />
    </Switch>            
    </BrowserRouter>
    </header>
    </div>
    </Container>
  )
  }
}
  export default App;
